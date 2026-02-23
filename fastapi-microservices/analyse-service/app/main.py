import json
import logging
import os
import shutil
import threading
import uuid
import hashlib
from collections import Counter
from datetime import datetime
from typing import Any, Dict, List, Optional

from fastapi import BackgroundTasks, FastAPI, File, Form, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from .services.document_analysis import AnalyseEngine
from .services.workflow_store import WorkflowStore

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

DEFAULT_INJECTION_URL = os.getenv("INJECTION_SERVICE_URL", "http://localhost:8001")
DEFAULT_LM_STUDIO_URL = os.getenv("LM_STUDIO_URL", "http://localhost:1234")
DEFAULT_MODEL = os.getenv("LM_STUDIO_MODEL", "mistral")
REQUEST_TIMEOUT = int(os.getenv("ANALYSE_REQUEST_TIMEOUT_SECONDS", "30"))
MAX_DOCX_BYTES = int(os.getenv("MAX_ANALYSE_DOCX_BYTES", str(20 * 1024 * 1024)))

APP_DIR = os.path.dirname(os.path.abspath(__file__))
SERVICE_ROOT = os.path.dirname(APP_DIR)
DATA_ROOT = os.path.join(SERVICE_ROOT, "data")
UPLOAD_ROOT = os.path.join(DATA_ROOT, "uploads")
JOBS_FILE = os.path.join(DATA_ROOT, "analysis_jobs.json")
CACHE_FILE = os.path.join(DATA_ROOT, "analysis_cache.json")
WORKFLOW_DB = os.path.join(DATA_ROOT, "workflow.db")
WORKFLOW_DOC_ROOT = os.path.join(DATA_ROOT, "workflow_docs")

for path in [DATA_ROOT, UPLOAD_ROOT, WORKFLOW_DOC_ROOT]:
    os.makedirs(path, exist_ok=True)


app = FastAPI(
    title="Analyse Service",
    version="3.0.0",
    description="Microservice to analyse text, and run single-document RAG negotiation analysis.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class AnalyseRequest(BaseModel):
    text: str = Field(..., min_length=1, description="Text to analyse")
    top_n_words: int = Field(default=5, ge=1, le=25)


class AnalyseResponse(BaseModel):
    characters: int
    words: int
    sentences: int
    top_words: Dict[str, int]


class RAGAnalyseRequest(BaseModel):
    tenant_id: str = Field(..., min_length=1)
    query: str = Field(..., min_length=2)
    top_k: int = Field(default=5, ge=1, le=20)
    version_mode: str = Field(default="latest", pattern="^(latest|all)$")
    contract_type: Optional[str] = None
    include_answer_draft: bool = True
    injection_service_url: Optional[str] = None
    lm_studio_url: Optional[str] = None
    model_name: Optional[str] = None


class RAGAnalyseResponse(BaseModel):
    tenant_id: str
    query: str
    retrieval_total: int
    evidence_summary: Dict[str, Any]
    citations: List[Dict[str, Any]]
    answer_draft: Optional[str] = None


class AnalysisJobResponse(BaseModel):
    job_id: str
    tenant_id: str
    status: str
    created_at: str


class AnalysisJobStatusResponse(BaseModel):
    job_id: str
    tenant_id: str
    status: str
    created_at: str
    updated_at: str
    progress: List[str]
    error: Optional[str] = None


JOBS = {}  # type: Dict[str, Dict[str, Any]]
ANALYSIS_CACHE = {}  # type: Dict[str, Dict[str, Any]]
JOBS_LOCK = threading.Lock()
WORKFLOW = WorkflowStore(WORKFLOW_DB)


class WorkflowDocumentCreateResponse(BaseModel):
    document_id: str
    tenant_id: str
    title: str
    owner_id: str
    manager_id: str
    file_name: str
    due_at: Optional[str] = None
    status: str
    created_at: str


class WorkflowAssignRequest(BaseModel):
    assigned_by: str = Field(..., min_length=1)
    assignee_ids: List[str] = Field(..., min_items=1)


class WorkflowSubmissionRequest(BaseModel):
    assignee_id: str = Field(..., min_length=1)
    summary_comment: Optional[str] = None
    edited_content: Optional[str] = None
    decision_payload: Optional[Dict[str, Any]] = None


class WorkflowReviewRequest(BaseModel):
    manager_id: str = Field(..., min_length=1)
    action: str = Field(..., pattern="^(approve|reject|request_changes)$")
    notes: Optional[str] = None


def _load_jobs() -> None:
    global JOBS, ANALYSIS_CACHE
    if not os.path.exists(JOBS_FILE):
        JOBS = {}
        return
    try:
        with open(JOBS_FILE, "r", encoding="utf-8") as f:
            payload = json.load(f)
        JOBS = payload if isinstance(payload, dict) else {}
        if os.path.exists(CACHE_FILE):
            with open(CACHE_FILE, "r", encoding="utf-8") as f:
                cache_payload = json.load(f)
            ANALYSIS_CACHE = cache_payload if isinstance(cache_payload, dict) else {}
        else:
            ANALYSIS_CACHE = {}
    except Exception:
        logger.exception("Failed to load analysis_jobs.json")
        JOBS = {}
        ANALYSIS_CACHE = {}


def _save_jobs() -> None:
    jobs_tmp = JOBS_FILE + ".tmp"
    with open(jobs_tmp, "w", encoding="utf-8") as f:
        json.dump(JOBS, f, indent=2, ensure_ascii=False)
    os.replace(jobs_tmp, JOBS_FILE)

    cache_tmp = CACHE_FILE + ".tmp"
    with open(cache_tmp, "w", encoding="utf-8") as f:
        json.dump(ANALYSIS_CACHE, f, indent=2, ensure_ascii=False)
    os.replace(cache_tmp, CACHE_FILE)


def _md5(path: str) -> str:
    digest = hashlib.md5()
    with open(path, "rb") as f:
        for block in iter(lambda: f.read(8192), b""):
            digest.update(block)
    return digest.hexdigest()


def _build_cache_key(
    tenant_id: str,
    file_hash: str,
    top_k: int,
    version_mode: str,
    contract_type: Optional[str],
    injection_service_url: str,
    lm_studio_url: str,
    model_name: str,
) -> str:
    return "|".join(
        [
            tenant_id,
            file_hash,
            str(top_k),
            version_mode,
            contract_type or "",
            injection_service_url.rstrip("/"),
            lm_studio_url.rstrip("/"),
            model_name,
        ]
    )


def _job_update(job_id: str, **kwargs: Any) -> None:
    with JOBS_LOCK:
        if job_id not in JOBS:
            return
        JOBS[job_id].update(kwargs)
        JOBS[job_id]["updated_at"] = datetime.utcnow().isoformat()
        _save_jobs()


def _job_progress(job_id: str, message: str) -> None:
    with JOBS_LOCK:
        if job_id not in JOBS:
            return
        JOBS[job_id]["progress"].append(message)
        JOBS[job_id]["updated_at"] = datetime.utcnow().isoformat()
        _save_jobs()


def _run_document_analysis(
    job_id: str,
    tenant_id: str,
    file_path: str,
    top_k: int,
    version_mode: str,
    contract_type: Optional[str],
    injection_service_url: str,
    lm_studio_url: str,
    model_name: str,
    cache_key: str,
) -> None:
    try:
        _job_update(job_id, status="processing")
        _job_progress(job_id, "Document parsing started")

        engine = AnalyseEngine(
            injection_service_url=injection_service_url,
            lm_studio_url=lm_studio_url,
            model_name=model_name,
            request_timeout=REQUEST_TIMEOUT,
        )

        _job_progress(job_id, "LLM and precedent analysis started")
        result = engine.analyze_file(
            tenant_id=tenant_id,
            file_path=file_path,
            top_k=top_k,
            version_mode=version_mode,
            contract_type=contract_type,
        )

        _job_update(job_id, status="completed", result=result)
        with JOBS_LOCK:
            ANALYSIS_CACHE[cache_key] = {
                "result": result,
                "cached_at": datetime.utcnow().isoformat(),
                "job_id": job_id,
            }
            _save_jobs()
        _job_progress(job_id, "Analysis complete")
    except Exception as exc:
        logger.exception("Analysis job failed: %s", job_id)
        _job_update(job_id, status="failed", error=str(exc))


@app.get("/health")
def health() -> Dict[str, str]:
    return {"status": "ok", "service": "analyse-service"}


@app.post("/analyse", response_model=AnalyseResponse)
def analyse_text(payload: AnalyseRequest) -> AnalyseResponse:
    import re

    characters = len(payload.text)
    words_list = re.findall(r"[A-Za-z0-9']+", payload.text.lower())
    words = len(words_list)
    sentences = len(re.findall(r"[.!?]+", payload.text))

    frequencies = Counter(words_list)
    top_words = dict(frequencies.most_common(payload.top_n_words))

    return AnalyseResponse(
        characters=characters,
        words=words,
        sentences=sentences,
        top_words=top_words,
    )


@app.post("/rag/analyse", response_model=RAGAnalyseResponse)
def rag_analyse(payload: RAGAnalyseRequest) -> RAGAnalyseResponse:
    import requests

    injection_service_url = (payload.injection_service_url or DEFAULT_INJECTION_URL).rstrip("/")

    body = {
        "tenant_id": payload.tenant_id,
        "query": payload.query,
        "top_k": payload.top_k,
        "version_mode": payload.version_mode,
    }
    if payload.contract_type:
        body["contract_type"] = payload.contract_type

    try:
        response = requests.post(
            injection_service_url + "/rag/retrieve",
            json=body,
            timeout=REQUEST_TIMEOUT,
        )
        if response.status_code != 200:
            raise HTTPException(status_code=502, detail=response.text[:300])
        retrieval = response.json()
    except requests.RequestException as exc:
        raise HTTPException(status_code=502, detail="Cannot reach injection-service: %s" % exc)

    citations = retrieval.get("results", []) or []
    contract_type_counts = Counter([c.get("contract_type", "Unknown") for c in citations])
    chunk_type_counts = Counter([c.get("chunk_type", "unknown") for c in citations])
    filename_counts = Counter([c.get("filename", "unknown") for c in citations])

    evidence_summary = {
        "contract_type_counts": dict(contract_type_counts),
        "chunk_type_counts": dict(chunk_type_counts),
        "top_sources": [
            {"filename": f, "count": c}
            for f, c in filename_counts.most_common(5)
        ],
    }

    return RAGAnalyseResponse(
        tenant_id=payload.tenant_id,
        query=payload.query,
        retrieval_total=int(retrieval.get("total", 0)),
        evidence_summary=evidence_summary,
        citations=citations,
        answer_draft=None,
    )


@app.post("/analyse/upload-docx", response_model=AnalysisJobResponse)
async def analyse_upload_docx(
    background_tasks: BackgroundTasks,
    tenant_id: str = Form(...),
    docx_file: UploadFile = File(...),
    top_k: int = Form(5),
    version_mode: str = Form("latest"),
    contract_type: Optional[str] = Form(None),
    injection_service_url: str = Form(DEFAULT_INJECTION_URL),
    lm_studio_url: str = Form(DEFAULT_LM_STUDIO_URL),
    model_name: str = Form(DEFAULT_MODEL),
):
    tenant_id = tenant_id.strip()
    if not tenant_id:
        raise HTTPException(status_code=400, detail="tenant_id is required")
    if version_mode not in ("latest", "all"):
        raise HTTPException(status_code=400, detail="version_mode must be latest or all")

    file_name = (docx_file.filename or "").strip()
    if not file_name.lower().endswith(".docx"):
        raise HTTPException(status_code=400, detail="Upload must be .docx")

    job_id = uuid.uuid4().hex
    created_at = datetime.utcnow().isoformat()

    job_folder = os.path.join(UPLOAD_ROOT, job_id)
    os.makedirs(job_folder, exist_ok=True)
    safe_name = os.path.basename(file_name)
    file_path = os.path.join(job_folder, safe_name)

    with open(file_path, "wb") as f:
        shutil.copyfileobj(docx_file.file, f)

    if os.path.getsize(file_path) > MAX_DOCX_BYTES:
        raise HTTPException(status_code=400, detail="DOCX exceeds max size")

    file_hash = _md5(file_path)
    cache_key = _build_cache_key(
        tenant_id=tenant_id,
        file_hash=file_hash,
        top_k=int(top_k),
        version_mode=version_mode,
        contract_type=contract_type,
        injection_service_url=injection_service_url,
        lm_studio_url=lm_studio_url,
        model_name=model_name,
    )

    with JOBS_LOCK:
        cached = ANALYSIS_CACHE.get(cache_key)
        if cached and cached.get("result") is not None:
            JOBS[job_id] = {
                "job_id": job_id,
                "tenant_id": tenant_id,
                "status": "completed",
                "created_at": created_at,
                "updated_at": datetime.utcnow().isoformat(),
                "progress": ["Upload accepted", "Served from hash cache"],
                "error": None,
                "result": cached.get("result"),
                "cache_hit": True,
                "cache_key": cache_key,
                "input": {
                    "file_name": safe_name,
                    "file_hash": file_hash,
                    "version_mode": version_mode,
                    "top_k": top_k,
                    "contract_type": contract_type,
                },
            }
            _save_jobs()
            return AnalysisJobResponse(
                job_id=job_id,
                tenant_id=tenant_id,
                status="completed",
                created_at=created_at,
            )

    with JOBS_LOCK:
        JOBS[job_id] = {
            "job_id": job_id,
            "tenant_id": tenant_id,
            "status": "queued",
            "created_at": created_at,
            "updated_at": created_at,
            "progress": ["Upload accepted"],
            "error": None,
            "result": None,
            "cache_hit": False,
            "cache_key": cache_key,
            "input": {
                "file_name": safe_name,
                "file_hash": file_hash,
                "version_mode": version_mode,
                "top_k": top_k,
                "contract_type": contract_type,
            },
        }
        _save_jobs()

    background_tasks.add_task(
        _run_document_analysis,
        job_id,
        tenant_id,
        file_path,
        int(top_k),
        version_mode,
        contract_type,
        injection_service_url,
        lm_studio_url,
        model_name,
        cache_key,
    )

    return AnalysisJobResponse(
        job_id=job_id,
        tenant_id=tenant_id,
        status="queued",
        created_at=created_at,
    )


@app.get("/analyse/jobs/{job_id}", response_model=AnalysisJobStatusResponse)
def get_analysis_job_status(job_id: str) -> AnalysisJobStatusResponse:
    with JOBS_LOCK:
        job = JOBS.get(job_id)
        if not job:
            raise HTTPException(status_code=404, detail="job_id not found")
        return AnalysisJobStatusResponse(
            job_id=job["job_id"],
            tenant_id=job["tenant_id"],
            status=job["status"],
            created_at=job["created_at"],
            updated_at=job["updated_at"],
            progress=job.get("progress", []),
            error=job.get("error"),
        )


@app.get("/analyse/jobs/{job_id}/result")
def get_analysis_job_result(job_id: str) -> Dict[str, Any]:
    with JOBS_LOCK:
        job = JOBS.get(job_id)
        if not job:
            raise HTTPException(status_code=404, detail="job_id not found")
        if job.get("status") != "completed":
            raise HTTPException(status_code=409, detail="result available only when job is completed")
        return job.get("result", {})


@app.get("/tenant/{tenant_id}/analysis-jobs")
def get_tenant_analysis_jobs(tenant_id: str, limit: int = 50) -> Dict[str, Any]:
    tenant_id = tenant_id.strip()
    if not tenant_id:
        raise HTTPException(status_code=400, detail="tenant_id is required")

    limit = max(1, min(limit, 200))
    with JOBS_LOCK:
        jobs = [
            {
                "job_id": job.get("job_id"),
                "tenant_id": job.get("tenant_id"),
                "status": job.get("status"),
                "created_at": job.get("created_at"),
                "updated_at": job.get("updated_at"),
                "error": job.get("error"),
                "input": job.get("input", {}),
            }
            for job in JOBS.values()
            if job.get("tenant_id") == tenant_id
        ]

    jobs.sort(key=lambda x: x.get("created_at") or "", reverse=True)
    return {"tenant_id": tenant_id, "total": len(jobs), "jobs": jobs[:limit]}


@app.post("/workflow/documents/upload", response_model=WorkflowDocumentCreateResponse)
async def workflow_create_document(
    tenant_id: str = Form(...),
    title: str = Form(...),
    owner_id: str = Form(...),
    manager_id: str = Form(...),
    due_at: Optional[str] = Form(None),
    file: UploadFile = File(...),
):
    tenant_id = tenant_id.strip()
    title = title.strip()
    owner_id = owner_id.strip()
    manager_id = manager_id.strip()

    if not tenant_id or not title or not owner_id or not manager_id:
        raise HTTPException(status_code=400, detail="tenant_id, title, owner_id, manager_id are required")

    file_name = (file.filename or "").strip()
    if not file_name.lower().endswith(".docx"):
        raise HTTPException(status_code=400, detail="Upload must be .docx")

    safe_name = os.path.basename(file_name)
    doc_id = uuid.uuid4().hex
    doc_folder = os.path.join(WORKFLOW_DOC_ROOT, doc_id)
    os.makedirs(doc_folder, exist_ok=True)
    file_path = os.path.join(doc_folder, safe_name)

    with open(file_path, "wb") as f:
        shutil.copyfileobj(file.file, f)

    if os.path.getsize(file_path) > MAX_DOCX_BYTES:
        raise HTTPException(status_code=400, detail="DOCX exceeds max size")

    try:
        created = WORKFLOW.create_document(
            tenant_id=tenant_id,
            title=title,
            owner_id=owner_id,
            manager_id=manager_id,
            file_name=safe_name,
            file_path=file_path,
            due_at=due_at.strip() if due_at else None,
        )
        return WorkflowDocumentCreateResponse(**created)
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Cannot create workflow document: {exc}")


@app.get("/workflow/documents")
def workflow_list_documents(tenant_id: str) -> Dict[str, Any]:
    tenant_id = tenant_id.strip()
    if not tenant_id:
        raise HTTPException(status_code=400, detail="tenant_id is required")
    docs = WORKFLOW.list_documents(tenant_id)
    return {"tenant_id": tenant_id, "total": len(docs), "documents": docs}


@app.post("/workflow/documents/{document_id}/assign")
def workflow_assign_document(document_id: str, payload: WorkflowAssignRequest) -> Dict[str, Any]:
    try:
        assignments = WORKFLOW.create_assignments(
            document_id=document_id,
            assigned_by=payload.assigned_by.strip(),
            assignee_ids=payload.assignee_ids,
        )
        return {"document_id": document_id, "total_assignments": len(assignments), "assignments": assignments}
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Cannot assign document: {exc}")


@app.get("/workflow/tasks/{assignee_id}")
def workflow_assignee_tasks(assignee_id: str, tenant_id: str) -> Dict[str, Any]:
    tenant_id = tenant_id.strip()
    assignee_id = assignee_id.strip()
    if not tenant_id or not assignee_id:
        raise HTTPException(status_code=400, detail="tenant_id and assignee_id are required")
    tasks = WORKFLOW.get_tasks_for_assignee(tenant_id=tenant_id, assignee_id=assignee_id)
    return {"tenant_id": tenant_id, "assignee_id": assignee_id, "total": len(tasks), "tasks": tasks}


@app.post("/workflow/tasks/{assignment_id}/submit")
def workflow_submit_assignment(assignment_id: str, payload: WorkflowSubmissionRequest) -> Dict[str, Any]:
    try:
        submission = WORKFLOW.submit_assignment(
            assignment_id=assignment_id,
            assignee_id=payload.assignee_id.strip(),
            summary_comment=(payload.summary_comment or "").strip() or None,
            edited_content=payload.edited_content,
            decision_payload=payload.decision_payload or {},
        )
        return submission
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Cannot submit assignment: {exc}")


@app.get("/workflow/manager/{manager_id}/queue")
def workflow_manager_queue(manager_id: str, tenant_id: str) -> Dict[str, Any]:
    tenant_id = tenant_id.strip()
    manager_id = manager_id.strip()
    if not tenant_id or not manager_id:
        raise HTTPException(status_code=400, detail="tenant_id and manager_id are required")
    queue = WORKFLOW.get_manager_queue(tenant_id=tenant_id, manager_id=manager_id)
    return {"tenant_id": tenant_id, "manager_id": manager_id, "total": len(queue), "items": queue}


@app.get("/workflow/documents/{document_id}/submissions")
def workflow_document_submissions(document_id: str) -> Dict[str, Any]:
    items = WORKFLOW.list_submissions(document_id=document_id)
    return {"document_id": document_id, "total": len(items), "submissions": items}


@app.post("/workflow/submissions/{submission_id}/review")
def workflow_review_submission(submission_id: str, payload: WorkflowReviewRequest) -> Dict[str, Any]:
    try:
        result = WORKFLOW.review_submission(
            submission_id=submission_id,
            manager_id=payload.manager_id.strip(),
            action=payload.action,
            notes=(payload.notes or "").strip() or None,
        )
        return result
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Cannot review submission: {exc}")


@app.get("/workflow/documents/{document_id}/audit")
def workflow_document_audit(document_id: str) -> Dict[str, Any]:
    events = WORKFLOW.get_audit_events(document_id=document_id)
    return {"document_id": document_id, "total": len(events), "events": events}


_load_jobs()
