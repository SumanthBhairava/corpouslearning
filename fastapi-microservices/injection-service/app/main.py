import logging
import os
import re
import shutil
import threading
import uuid
import zipfile
from datetime import datetime
from typing import Any, Dict, List, Literal, Optional

from fastapi import BackgroundTasks, FastAPI, File, Form, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from .services.corpus_learning_engine import CorpusLearningEngine
from .services.vector_store import VectorStore

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

APP_DIR = os.path.dirname(os.path.abspath(__file__))
SERVICE_ROOT = os.path.dirname(APP_DIR)
DATA_ROOT = os.path.join(SERVICE_ROOT, "data")
UPLOAD_ROOT = os.path.join(DATA_ROOT, "uploads")
INDEX_ROOT = os.path.join(DATA_ROOT, "indices")
JOBS_FILE = os.path.join(DATA_ROOT, "jobs.json")
MAX_ZIP_MB = int(os.getenv("MAX_CORPUS_ZIP_MB", "100"))
MAX_ZIP_BYTES = MAX_ZIP_MB * 1024 * 1024
MAX_ZIP_ENTRIES = int(os.getenv("MAX_CORPUS_ZIP_ENTRIES", "2000"))
MAX_DOCX_BYTES = int(os.getenv("MAX_DOCX_BYTES", str(20 * 1024 * 1024)))
TENANT_ID_RE = re.compile(r"^[a-zA-Z0-9_-]{1,64}$")

for path in [DATA_ROOT, UPLOAD_ROOT, INDEX_ROOT]:
    os.makedirs(path, exist_ok=True)


app = FastAPI(
    title="Injection Service",
    version="2.0.0",
    description=(
        "Corpus learning service for agreement ingestion, metadata extraction, "
        "vector indexing, and RAG-ready retrieval previews."
    ),
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class InjectionRequest(BaseModel):
    base_text: str = Field(..., min_length=1)
    snippets: List[str] = Field(default_factory=list)
    mode: Literal["prepend", "append", "surround"] = "append"
    separator: str = "\n"


class InjectionResponse(BaseModel):
    original_length: int
    injected_length: int
    snippets_count: int
    output_text: str


class LearningJobResponse(BaseModel):
    job_id: str
    tenant_id: str
    status: str
    created_at: str


class JobStatusResponse(BaseModel):
    job_id: str
    tenant_id: str
    status: str
    created_at: str
    updated_at: str
    progress: List[str]
    error: Optional[str] = None


class RetrievalRequest(BaseModel):
    tenant_id: str = Field(..., min_length=1)
    query: str = Field(..., min_length=2)
    top_k: int = Field(default=5, ge=1, le=20)
    contract_type: Optional[str] = None
    version_mode: Literal["latest", "all"] = "latest"


class RetrievalResponse(BaseModel):
    total: int
    results: List[Dict[str, Any]]


JOBS = {}  # type: Dict[str, Dict[str, Any]]
JOBS_LOCK = threading.Lock()


def _atomic_write_json(path: str, payload: Any):
    import json

    os.makedirs(os.path.dirname(path), exist_ok=True)
    tmp_path = path + ".tmp"
    with open(tmp_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False)
    os.replace(tmp_path, path)


def _load_jobs():
    import json

    global JOBS
    if not os.path.exists(JOBS_FILE):
        JOBS = {}
        return
    try:
        with open(JOBS_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
        JOBS = data if isinstance(data, dict) else {}
    except Exception:
        logger.exception("Failed to load jobs.json, starting with empty job store")
        JOBS = {}


def _save_jobs():
    _atomic_write_json(JOBS_FILE, JOBS)


def _safe_extract_zip(zip_path: str, extract_path: str):
    with zipfile.ZipFile(zip_path, "r") as zip_ref:
        infos = zip_ref.infolist()
        if len(infos) > MAX_ZIP_ENTRIES:
            raise HTTPException(status_code=400, detail="Too many files in ZIP")

        root = os.path.abspath(extract_path)
        for info in infos:
            filename = info.filename or ""
            normalized = os.path.normpath(filename)
            if not normalized or normalized.startswith("..") or os.path.isabs(normalized):
                raise HTTPException(status_code=400, detail="Unsafe ZIP path")
            if info.file_size > MAX_DOCX_BYTES:
                raise HTTPException(status_code=400, detail="A file in ZIP is too large")
            if not info.is_dir() and not normalized.lower().endswith(".docx"):
                raise HTTPException(status_code=400, detail="ZIP must contain only .docx files")

            destination = os.path.abspath(os.path.join(extract_path, normalized))
            if not destination.startswith(root + os.sep) and destination != root:
                raise HTTPException(status_code=400, detail="Unsafe ZIP extraction target")

        for info in infos:
            normalized = os.path.normpath(info.filename)
            destination = os.path.join(extract_path, normalized)
            if info.is_dir():
                os.makedirs(destination, exist_ok=True)
                continue
            os.makedirs(os.path.dirname(destination), exist_ok=True)
            with zip_ref.open(info, "r") as src, open(destination, "wb") as dst:
                shutil.copyfileobj(src, dst)


def _normalize_customer_path(raw: str) -> str:
    value = (raw or "").strip().replace("\\", "/")
    if not value:
        value = "default"
    normalized = os.path.normpath(value).replace("\\", "/")
    if normalized.startswith("../") or normalized == ".." or normalized.startswith("/"):
        raise HTTPException(status_code=400, detail="Invalid customer_path")
    if normalized in (".", ""):
        return "default"
    return normalized


def _normalize_relative_doc_path(raw: str) -> str:
    value = (raw or "").strip().replace("\\", "/")
    normalized = os.path.normpath(value).replace("\\", "/")
    if not normalized or normalized in (".", ""):
        raise HTTPException(status_code=400, detail="Invalid relative document path")
    if normalized.startswith("../") or normalized == ".." or normalized.startswith("/"):
        raise HTTPException(status_code=400, detail="Invalid relative document path")
    if not normalized.lower().endswith(".docx"):
        raise HTTPException(status_code=400, detail="Only .docx files are supported")
    if "/" not in normalized:
        normalized = "default/" + normalized
    return normalized


def _job_update(job_id: str, **kwargs):
    with JOBS_LOCK:
        if job_id not in JOBS:
            return
        JOBS[job_id].update(kwargs)
        JOBS[job_id]["updated_at"] = datetime.utcnow().isoformat()
        _save_jobs()


def _job_append_progress(job_id: str, message: str):
    with JOBS_LOCK:
        if job_id not in JOBS:
            return
        JOBS[job_id]["progress"].append(message)
        JOBS[job_id]["updated_at"] = datetime.utcnow().isoformat()
        _save_jobs()


_load_jobs()


def _run_learning_job(
    job_id: str,
    tenant_id: str,
    extracted_corpus_path: str,
    lm_studio_url: str,
    model_name: str,
    corpus_version: str,
):
    try:
        _job_update(job_id, status="processing")
        tenant_index_path = os.path.join(INDEX_ROOT, tenant_id)
        os.makedirs(tenant_index_path, exist_ok=True)

        engine = CorpusLearningEngine(
            progress_callback=lambda msg: _job_append_progress(job_id, msg),
            lm_studio_url=lm_studio_url,
            model=model_name,
        )
        summary = engine.learn_from_corpus(
            tenant_id=tenant_id,
            corpus_path=extracted_corpus_path,
            vector_store_path=tenant_index_path,
            upload_id=job_id,
            corpus_version=corpus_version,
        )

        _job_update(job_id, status="completed", summary=summary)

    except Exception as exc:
        logger.exception("Learning job failed: %s", job_id)
        _job_update(job_id, status="failed", error=str(exc))


@app.get("/health")
def health() -> Dict[str, str]:
    return {"status": "ok", "service": "injection-service"}


@app.post("/inject", response_model=InjectionResponse)
def inject_payload(payload: InjectionRequest) -> InjectionResponse:
    injected_block = payload.separator.join(payload.snippets).strip()

    if not injected_block:
        output = payload.base_text
    elif payload.mode == "prepend":
        output = "%s%s%s" % (injected_block, payload.separator, payload.base_text)
    elif payload.mode == "surround":
        output = "%s%s%s%s%s" % (
            injected_block,
            payload.separator,
            payload.base_text,
            payload.separator,
            injected_block,
        )
    else:
        output = "%s%s%s" % (payload.base_text, payload.separator, injected_block)

    return InjectionResponse(
        original_length=len(payload.base_text),
        injected_length=len(output),
        snippets_count=len(payload.snippets),
        output_text=output,
    )


@app.post("/corpus/upload", response_model=LearningJobResponse)
async def upload_corpus_zip(
    background_tasks: BackgroundTasks,
    tenant_id: str = Form(...),
    corpus_zip: UploadFile = File(...),
    lm_studio_url: str = Form("http://localhost:1234"),
    model_name: str = Form("mistral"),
    corpus_version: str = Form(""),
):
    tenant_id = tenant_id.strip()
    if not tenant_id:
        raise HTTPException(status_code=400, detail="tenant_id is required")
    if not TENANT_ID_RE.match(tenant_id):
        raise HTTPException(
            status_code=400,
            detail="tenant_id must match [a-zA-Z0-9_-], max length 64",
        )

    upload_name = (corpus_zip.filename or "").strip().lower()
    if not upload_name.endswith(".zip"):
        raise HTTPException(status_code=400, detail="Upload must be a .zip file")

    job_id = uuid.uuid4().hex
    created_at = datetime.utcnow().isoformat()
    if not corpus_version.strip():
        corpus_version = "v-" + created_at.replace(":", "").replace("-", "").replace(".", "")

    job_upload_dir = os.path.join(UPLOAD_ROOT, job_id)
    os.makedirs(job_upload_dir, exist_ok=True)

    zip_path = os.path.join(job_upload_dir, "corpus.zip")
    with open(zip_path, "wb") as f:
        shutil.copyfileobj(corpus_zip.file, f)
    if os.path.getsize(zip_path) > MAX_ZIP_BYTES:
        raise HTTPException(
            status_code=400,
            detail="ZIP exceeds configured max size (%s MB)" % MAX_ZIP_MB,
        )

    extract_path = os.path.join(job_upload_dir, "extracted")
    os.makedirs(extract_path, exist_ok=True)

    try:
        _safe_extract_zip(zip_path, extract_path)
    except zipfile.BadZipFile:
        raise HTTPException(status_code=400, detail="Invalid ZIP file")

    with JOBS_LOCK:
        JOBS[job_id] = {
            "job_id": job_id,
            "tenant_id": tenant_id,
            "status": "queued",
            "created_at": created_at,
            "updated_at": created_at,
            "progress": ["Upload accepted", "ZIP extracted"],
            "summary": None,
            "error": None,
            "corpus_version": corpus_version,
        }
        _save_jobs()

    background_tasks.add_task(
        _run_learning_job,
        job_id,
        tenant_id,
        extract_path,
        lm_studio_url,
        model_name,
        corpus_version,
    )

    return LearningJobResponse(
        job_id=job_id,
        tenant_id=tenant_id,
        status="queued",
        created_at=created_at,
    )


@app.post("/corpus/upload-docx", response_model=LearningJobResponse)
async def upload_single_docx(
    background_tasks: BackgroundTasks,
    tenant_id: str = Form(...),
    customer_path: str = Form("default"),
    docx_file: UploadFile = File(...),
    lm_studio_url: str = Form("http://localhost:1234"),
    model_name: str = Form("mistral"),
    corpus_version: str = Form(""),
):
    tenant_id = tenant_id.strip()
    if not tenant_id:
        raise HTTPException(status_code=400, detail="tenant_id is required")
    if not TENANT_ID_RE.match(tenant_id):
        raise HTTPException(
            status_code=400,
            detail="tenant_id must match [a-zA-Z0-9_-], max length 64",
        )

    upload_name = (docx_file.filename or "").strip()
    if not upload_name.lower().endswith(".docx"):
        raise HTTPException(status_code=400, detail="Upload must be a .docx file")

    target_customer_path = _normalize_customer_path(customer_path)
    safe_name = os.path.basename(upload_name)
    if safe_name.startswith("~"):
        raise HTTPException(status_code=400, detail="Temporary Office files are not allowed")

    job_id = uuid.uuid4().hex
    created_at = datetime.utcnow().isoformat()
    if not corpus_version.strip():
        corpus_version = "v-" + created_at.replace(":", "").replace("-", "").replace(".", "")

    job_upload_dir = os.path.join(UPLOAD_ROOT, job_id)
    os.makedirs(job_upload_dir, exist_ok=True)

    extract_path = os.path.join(job_upload_dir, "extracted")
    target_dir = os.path.join(extract_path, target_customer_path)
    os.makedirs(target_dir, exist_ok=True)

    destination_path = os.path.join(target_dir, safe_name)
    with open(destination_path, "wb") as f:
        shutil.copyfileobj(docx_file.file, f)
    if os.path.getsize(destination_path) > MAX_DOCX_BYTES:
        raise HTTPException(status_code=400, detail="DOCX exceeds max allowed size")

    with JOBS_LOCK:
        JOBS[job_id] = {
            "job_id": job_id,
            "tenant_id": tenant_id,
            "status": "queued",
            "created_at": created_at,
            "updated_at": created_at,
            "progress": ["Upload accepted", "Single DOCX stored"],
            "summary": None,
            "error": None,
            "corpus_version": corpus_version,
        }
        _save_jobs()

    background_tasks.add_task(
        _run_learning_job,
        job_id,
        tenant_id,
        extract_path,
        lm_studio_url,
        model_name,
        corpus_version,
    )

    return LearningJobResponse(
        job_id=job_id,
        tenant_id=tenant_id,
        status="queued",
        created_at=created_at,
    )


@app.post("/corpus/upload-folder", response_model=LearningJobResponse)
async def upload_folder_docs(
    background_tasks: BackgroundTasks,
    tenant_id: str = Form(...),
    files: List[UploadFile] = File(...),
    relative_paths: str = Form(""),
    lm_studio_url: str = Form("http://localhost:1234"),
    model_name: str = Form("mistral"),
    corpus_version: str = Form(""),
):
    import json

    tenant_id = tenant_id.strip()
    if not tenant_id:
        raise HTTPException(status_code=400, detail="tenant_id is required")
    if not TENANT_ID_RE.match(tenant_id):
        raise HTTPException(
            status_code=400,
            detail="tenant_id must match [a-zA-Z0-9_-], max length 64",
        )
    if not files:
        raise HTTPException(status_code=400, detail="At least one .docx file is required")

    parsed_relative_paths = []  # type: List[str]
    if relative_paths.strip():
        try:
            parsed = json.loads(relative_paths)
            if not isinstance(parsed, list):
                raise ValueError("relative_paths must be a JSON array")
            parsed_relative_paths = [str(item) for item in parsed]
        except Exception:
            raise HTTPException(status_code=400, detail="Invalid relative_paths JSON")
        if len(parsed_relative_paths) != len(files):
            raise HTTPException(
                status_code=400,
                detail="relative_paths length must match uploaded files count",
            )

    job_id = uuid.uuid4().hex
    created_at = datetime.utcnow().isoformat()
    if not corpus_version.strip():
        corpus_version = "v-" + created_at.replace(":", "").replace("-", "").replace(".", "")

    job_upload_dir = os.path.join(UPLOAD_ROOT, job_id)
    os.makedirs(job_upload_dir, exist_ok=True)
    extract_path = os.path.join(job_upload_dir, "extracted")
    os.makedirs(extract_path, exist_ok=True)

    docx_count = 0
    for idx, upload in enumerate(files):
        original_name = (upload.filename or "").strip()
        if not original_name.lower().endswith(".docx"):
            raise HTTPException(status_code=400, detail="All uploaded files must be .docx")

        raw_relative_path = (
            parsed_relative_paths[idx]
            if parsed_relative_paths
            else original_name
        )
        safe_relative_path = _normalize_relative_doc_path(raw_relative_path)
        destination_path = os.path.join(extract_path, safe_relative_path)
        os.makedirs(os.path.dirname(destination_path), exist_ok=True)

        with open(destination_path, "wb") as f:
            shutil.copyfileobj(upload.file, f)
        if os.path.getsize(destination_path) > MAX_DOCX_BYTES:
            raise HTTPException(status_code=400, detail="One of the files exceeds max size")
        docx_count += 1

    with JOBS_LOCK:
        JOBS[job_id] = {
            "job_id": job_id,
            "tenant_id": tenant_id,
            "status": "queued",
            "created_at": created_at,
            "updated_at": created_at,
            "progress": ["Folder upload accepted", "Stored %s documents" % docx_count],
            "summary": None,
            "error": None,
            "corpus_version": corpus_version,
        }
        _save_jobs()

    background_tasks.add_task(
        _run_learning_job,
        job_id,
        tenant_id,
        extract_path,
        lm_studio_url,
        model_name,
        corpus_version,
    )

    return LearningJobResponse(
        job_id=job_id,
        tenant_id=tenant_id,
        status="queued",
        created_at=created_at,
    )


@app.get("/jobs/{job_id}", response_model=JobStatusResponse)
def get_job_status(job_id: str) -> JobStatusResponse:
    with JOBS_LOCK:
        job = JOBS.get(job_id)
        if not job:
            raise HTTPException(status_code=404, detail="job_id not found")

        return JobStatusResponse(
            job_id=job["job_id"],
            tenant_id=job["tenant_id"],
            status=job["status"],
            created_at=job["created_at"],
            updated_at=job["updated_at"],
            progress=job["progress"],
            error=job.get("error"),
        )


@app.get("/jobs/{job_id}/summary")
def get_job_summary(job_id: str) -> Dict[str, Any]:
    with JOBS_LOCK:
        job = JOBS.get(job_id)
        if not job:
            raise HTTPException(status_code=404, detail="job_id not found")
        if job["status"] != "completed":
            raise HTTPException(
                status_code=409,
                detail="summary available only for completed jobs",
            )
        return job["summary"]


@app.get("/tenant/{tenant_id}/jobs")
def get_tenant_jobs(tenant_id: str, limit: int = 50) -> Dict[str, Any]:
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
                "corpus_version": job.get("corpus_version"),
                "error": job.get("error"),
                "progress_count": len(job.get("progress", [])),
            }
            for job in JOBS.values()
            if job.get("tenant_id") == tenant_id
        ]

    jobs.sort(key=lambda item: item.get("created_at") or "", reverse=True)
    return {
        "tenant_id": tenant_id,
        "total": len(jobs),
        "jobs": jobs[:limit],
    }


@app.post("/rag/retrieve", response_model=RetrievalResponse)
def rag_retrieve(payload: RetrievalRequest) -> RetrievalResponse:
    tenant_index_path = os.path.join(INDEX_ROOT, payload.tenant_id)
    if not os.path.exists(tenant_index_path):
        raise HTTPException(status_code=404, detail="No index found for tenant")

    vector_store = VectorStore(store_path=tenant_index_path)
    vector_store.load_or_create()

    hits = vector_store.search(
        query_text=payload.query,
        top_k=payload.top_k,
        tenant_id=payload.tenant_id,
        contract_type=payload.contract_type,
        active_only=(payload.version_mode == "latest"),
    )

    return RetrievalResponse(total=len(hits), results=hits)


@app.get("/tenant/{tenant_id}/versions")
def get_tenant_versions(tenant_id: str) -> Dict[str, Any]:
    tenant_index_path = os.path.join(INDEX_ROOT, tenant_id)
    if not os.path.exists(tenant_index_path):
        raise HTTPException(status_code=404, detail="No index found for tenant")

    vector_store = VectorStore(store_path=tenant_index_path)
    vector_store.load_or_create()

    documents = {}  # type: Dict[str, Dict[str, Any]]
    uploads = {}  # type: Dict[str, int]
    for item in vector_store.metadata:
        if item.get("tenant_id") != tenant_id:
            continue
        document_id = item.get("document_id", "")
        doc_version = int(item.get("document_version", 0) or 0)
        upload_id = item.get("upload_id", "")

        if upload_id:
            uploads[upload_id] = uploads.get(upload_id, 0) + 1

        existing = documents.get(document_id)
        payload = {
            "document_id": document_id,
            "filename": item.get("filename", ""),
            "customer": item.get("customer", ""),
            "latest_document_version": doc_version,
            "is_active": item.get("is_active", True),
            "last_corpus_version": item.get("corpus_version", ""),
        }
        if not existing or doc_version >= existing["latest_document_version"]:
            documents[document_id] = payload

    return {
        "tenant_id": tenant_id,
        "documents": sorted(documents.values(), key=lambda x: x["document_id"]),
        "upload_ids": sorted(list(uploads.keys())),
        "total_uploads": len(uploads),
    }
