import json
import os
import sqlite3
import threading
import uuid
from datetime import datetime
from typing import Any, Dict, List, Optional


class WorkflowStore:
    def __init__(self, db_path: str):
        self.db_path = db_path
        self._lock = threading.Lock()
        os.makedirs(os.path.dirname(db_path), exist_ok=True)
        self._init_db()

    def _connect(self) -> sqlite3.Connection:
        conn = sqlite3.connect(self.db_path)
        conn.row_factory = sqlite3.Row
        return conn

    def _init_db(self) -> None:
        with self._lock:
            conn = self._connect()
            try:
                cur = conn.cursor()
                cur.execute(
                    """
                    CREATE TABLE IF NOT EXISTS documents (
                        id TEXT PRIMARY KEY,
                        tenant_id TEXT NOT NULL,
                        title TEXT NOT NULL,
                        owner_id TEXT NOT NULL,
                        manager_id TEXT NOT NULL,
                        file_name TEXT NOT NULL,
                        file_path TEXT NOT NULL,
                        due_at TEXT,
                        status TEXT NOT NULL,
                        created_at TEXT NOT NULL,
                        updated_at TEXT NOT NULL
                    )
                    """
                )
                cur.execute(
                    """
                    CREATE TABLE IF NOT EXISTS assignments (
                        id TEXT PRIMARY KEY,
                        document_id TEXT NOT NULL,
                        assignee_id TEXT NOT NULL,
                        assigned_by TEXT NOT NULL,
                        status TEXT NOT NULL,
                        created_at TEXT NOT NULL,
                        updated_at TEXT NOT NULL,
                        submitted_at TEXT,
                        FOREIGN KEY(document_id) REFERENCES documents(id)
                    )
                    """
                )
                cur.execute(
                    """
                    CREATE TABLE IF NOT EXISTS submissions (
                        id TEXT PRIMARY KEY,
                        assignment_id TEXT NOT NULL,
                        document_id TEXT NOT NULL,
                        assignee_id TEXT NOT NULL,
                        summary_comment TEXT,
                        edited_content TEXT,
                        decision_payload TEXT,
                        review_status TEXT NOT NULL,
                        created_at TEXT NOT NULL,
                        updated_at TEXT NOT NULL,
                        FOREIGN KEY(assignment_id) REFERENCES assignments(id),
                        FOREIGN KEY(document_id) REFERENCES documents(id)
                    )
                    """
                )
                cur.execute(
                    """
                    CREATE TABLE IF NOT EXISTS reviews (
                        id TEXT PRIMARY KEY,
                        submission_id TEXT NOT NULL,
                        manager_id TEXT NOT NULL,
                        action TEXT NOT NULL,
                        notes TEXT,
                        created_at TEXT NOT NULL,
                        FOREIGN KEY(submission_id) REFERENCES submissions(id)
                    )
                    """
                )
                cur.execute(
                    """
                    CREATE TABLE IF NOT EXISTS audit_events (
                        id TEXT PRIMARY KEY,
                        tenant_id TEXT NOT NULL,
                        document_id TEXT,
                        actor_id TEXT NOT NULL,
                        event_type TEXT NOT NULL,
                        payload TEXT,
                        created_at TEXT NOT NULL
                    )
                    """
                )
                conn.commit()
            finally:
                conn.close()

    def _now(self) -> str:
        return datetime.utcnow().isoformat()

    def _insert_audit(
        self,
        conn: sqlite3.Connection,
        tenant_id: str,
        document_id: Optional[str],
        actor_id: str,
        event_type: str,
        payload: Dict[str, Any],
    ) -> None:
        conn.execute(
            """
            INSERT INTO audit_events(id, tenant_id, document_id, actor_id, event_type, payload, created_at)
            VALUES(?, ?, ?, ?, ?, ?, ?)
            """,
            (
                uuid.uuid4().hex,
                tenant_id,
                document_id,
                actor_id,
                event_type,
                json.dumps(payload, ensure_ascii=False),
                self._now(),
            ),
        )

    def create_document(
        self,
        tenant_id: str,
        title: str,
        owner_id: str,
        manager_id: str,
        file_name: str,
        file_path: str,
        due_at: Optional[str],
    ) -> Dict[str, Any]:
        with self._lock:
            conn = self._connect()
            try:
                doc_id = uuid.uuid4().hex
                now = self._now()
                conn.execute(
                    """
                    INSERT INTO documents(id, tenant_id, title, owner_id, manager_id, file_name, file_path, due_at, status, created_at, updated_at)
                    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        doc_id,
                        tenant_id,
                        title,
                        owner_id,
                        manager_id,
                        file_name,
                        file_path,
                        due_at,
                        "draft",
                        now,
                        now,
                    ),
                )
                self._insert_audit(
                    conn,
                    tenant_id,
                    doc_id,
                    owner_id,
                    "document_created",
                    {"title": title, "file_name": file_name},
                )
                conn.commit()
                return {
                    "document_id": doc_id,
                    "tenant_id": tenant_id,
                    "title": title,
                    "owner_id": owner_id,
                    "manager_id": manager_id,
                    "file_name": file_name,
                    "due_at": due_at,
                    "status": "draft",
                    "created_at": now,
                }
            finally:
                conn.close()

    def list_documents(self, tenant_id: str) -> List[Dict[str, Any]]:
        conn = self._connect()
        try:
            rows = conn.execute(
                """
                SELECT * FROM documents WHERE tenant_id=? ORDER BY created_at DESC
                """,
                (tenant_id,),
            ).fetchall()
            return [dict(r) for r in rows]
        finally:
            conn.close()

    def create_assignments(
        self,
        document_id: str,
        assigned_by: str,
        assignee_ids: List[str],
    ) -> List[Dict[str, Any]]:
        assignee_ids = [x.strip() for x in assignee_ids if x.strip()]
        if not assignee_ids:
            return []

        with self._lock:
            conn = self._connect()
            try:
                doc = conn.execute("SELECT * FROM documents WHERE id=?", (document_id,)).fetchone()
                if not doc:
                    raise ValueError("document_id not found")

                now = self._now()
                created: List[Dict[str, Any]] = []
                for assignee_id in assignee_ids:
                    assignment_id = uuid.uuid4().hex
                    conn.execute(
                        """
                        INSERT INTO assignments(id, document_id, assignee_id, assigned_by, status, created_at, updated_at)
                        VALUES(?, ?, ?, ?, ?, ?, ?)
                        """,
                        (assignment_id, document_id, assignee_id, assigned_by, "assigned", now, now),
                    )
                    created.append(
                        {
                            "assignment_id": assignment_id,
                            "document_id": document_id,
                            "assignee_id": assignee_id,
                            "assigned_by": assigned_by,
                            "status": "assigned",
                            "created_at": now,
                        }
                    )

                conn.execute(
                    "UPDATE documents SET status=?, updated_at=? WHERE id=?",
                    ("in_review", now, document_id),
                )
                self._insert_audit(
                    conn,
                    str(doc["tenant_id"]),
                    document_id,
                    assigned_by,
                    "document_assigned",
                    {"assignee_ids": assignee_ids},
                )
                conn.commit()
                return created
            finally:
                conn.close()

    def get_tasks_for_assignee(self, tenant_id: str, assignee_id: str) -> List[Dict[str, Any]]:
        conn = self._connect()
        try:
            rows = conn.execute(
                """
                SELECT a.id as assignment_id, a.assignee_id, a.status as assignment_status,
                       a.created_at as assigned_at, a.updated_at as assignment_updated_at,
                       d.id as document_id, d.title, d.file_name, d.due_at, d.manager_id, d.status as document_status
                FROM assignments a
                JOIN documents d ON d.id = a.document_id
                WHERE d.tenant_id=? AND a.assignee_id=?
                ORDER BY a.created_at DESC
                """,
                (tenant_id, assignee_id),
            ).fetchall()
            return [dict(r) for r in rows]
        finally:
            conn.close()

    def submit_assignment(
        self,
        assignment_id: str,
        assignee_id: str,
        summary_comment: Optional[str],
        edited_content: Optional[str],
        decision_payload: Optional[Dict[str, Any]],
    ) -> Dict[str, Any]:
        with self._lock:
            conn = self._connect()
            try:
                assignment = conn.execute(
                    """
                    SELECT a.*, d.tenant_id, d.title
                    FROM assignments a
                    JOIN documents d ON d.id = a.document_id
                    WHERE a.id=?
                    """,
                    (assignment_id,),
                ).fetchone()
                if not assignment:
                    raise ValueError("assignment_id not found")
                if assignment["assignee_id"] != assignee_id:
                    raise ValueError("assignee_id does not match assignment")

                now = self._now()
                submission_id = uuid.uuid4().hex
                conn.execute(
                    """
                    INSERT INTO submissions(id, assignment_id, document_id, assignee_id, summary_comment, edited_content, decision_payload, review_status, created_at, updated_at)
                    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        submission_id,
                        assignment_id,
                        assignment["document_id"],
                        assignee_id,
                        summary_comment,
                        edited_content,
                        json.dumps(decision_payload or {}, ensure_ascii=False),
                        "pending_review",
                        now,
                        now,
                    ),
                )

                conn.execute(
                    "UPDATE assignments SET status=?, submitted_at=?, updated_at=? WHERE id=?",
                    ("submitted", now, now, assignment_id),
                )

                self._insert_audit(
                    conn,
                    str(assignment["tenant_id"]),
                    str(assignment["document_id"]),
                    assignee_id,
                    "assignment_submitted",
                    {"assignment_id": assignment_id, "submission_id": submission_id},
                )
                conn.commit()

                return {
                    "submission_id": submission_id,
                    "assignment_id": assignment_id,
                    "document_id": assignment["document_id"],
                    "assignee_id": assignee_id,
                    "review_status": "pending_review",
                    "created_at": now,
                }
            finally:
                conn.close()

    def get_manager_queue(self, tenant_id: str, manager_id: str) -> List[Dict[str, Any]]:
        conn = self._connect()
        try:
            rows = conn.execute(
                """
                SELECT s.id as submission_id, s.review_status, s.created_at as submitted_at,
                       s.summary_comment, a.id as assignment_id, a.assignee_id,
                       d.id as document_id, d.title, d.file_name, d.status as document_status
                FROM submissions s
                JOIN assignments a ON a.id = s.assignment_id
                JOIN documents d ON d.id = s.document_id
                WHERE d.tenant_id=? AND d.manager_id=? AND s.review_status='pending_review'
                ORDER BY s.created_at DESC
                """,
                (tenant_id, manager_id),
            ).fetchall()
            return [dict(r) for r in rows]
        finally:
            conn.close()

    def list_submissions(self, document_id: str) -> List[Dict[str, Any]]:
        conn = self._connect()
        try:
            rows = conn.execute(
                """
                SELECT s.id as submission_id, s.review_status, s.created_at, s.updated_at,
                       s.assignee_id, s.summary_comment, s.edited_content, s.decision_payload,
                       a.status as assignment_status
                FROM submissions s
                JOIN assignments a ON a.id = s.assignment_id
                WHERE s.document_id=?
                ORDER BY s.created_at DESC
                """,
                (document_id,),
            ).fetchall()

            data = []
            for row in rows:
                item = dict(row)
                payload = item.get("decision_payload")
                try:
                    item["decision_payload"] = json.loads(payload) if payload else {}
                except Exception:
                    item["decision_payload"] = {}
                data.append(item)
            return data
        finally:
            conn.close()

    def review_submission(
        self,
        submission_id: str,
        manager_id: str,
        action: str,
        notes: Optional[str],
    ) -> Dict[str, Any]:
        if action not in ("approve", "reject", "request_changes"):
            raise ValueError("action must be approve, reject, or request_changes")

        with self._lock:
            conn = self._connect()
            try:
                sub = conn.execute(
                    """
                    SELECT s.*, d.tenant_id, d.id as doc_id, d.manager_id
                    FROM submissions s
                    JOIN documents d ON d.id = s.document_id
                    WHERE s.id=?
                    """,
                    (submission_id,),
                ).fetchone()
                if not sub:
                    raise ValueError("submission_id not found")
                if sub["manager_id"] != manager_id:
                    raise ValueError("manager_id is not allowed for this document")

                now = self._now()
                new_status = "approved" if action == "approve" else ("rejected" if action == "reject" else "changes_requested")

                conn.execute(
                    "UPDATE submissions SET review_status=?, updated_at=? WHERE id=?",
                    (new_status, now, submission_id),
                )
                conn.execute(
                    """
                    INSERT INTO reviews(id, submission_id, manager_id, action, notes, created_at)
                    VALUES(?, ?, ?, ?, ?, ?)
                    """,
                    (uuid.uuid4().hex, submission_id, manager_id, action, notes, now),
                )

                assignment_status = "approved" if action == "approve" else ("rejected" if action == "reject" else "assigned")
                conn.execute(
                    "UPDATE assignments SET status=?, updated_at=? WHERE id=?",
                    (assignment_status, now, sub["assignment_id"]),
                )

                # Update document status if all assignments are approved
                counts = conn.execute(
                    """
                    SELECT
                      SUM(CASE WHEN status='approved' THEN 1 ELSE 0 END) as approved_count,
                      COUNT(*) as total_count
                    FROM assignments WHERE document_id=?
                    """,
                    (sub["doc_id"],),
                ).fetchone()
                approved_count = int(counts["approved_count"] or 0)
                total_count = int(counts["total_count"] or 0)
                doc_status = "approved" if total_count > 0 and approved_count == total_count else "in_review"
                conn.execute(
                    "UPDATE documents SET status=?, updated_at=? WHERE id=?",
                    (doc_status, now, sub["doc_id"]),
                )

                self._insert_audit(
                    conn,
                    str(sub["tenant_id"]),
                    str(sub["doc_id"]),
                    manager_id,
                    "submission_reviewed",
                    {"submission_id": submission_id, "action": action, "notes": notes or ""},
                )
                conn.commit()

                return {
                    "submission_id": submission_id,
                    "review_status": new_status,
                    "document_status": doc_status,
                    "reviewed_at": now,
                }
            finally:
                conn.close()

    def get_audit_events(self, document_id: str) -> List[Dict[str, Any]]:
        conn = self._connect()
        try:
            rows = conn.execute(
                """
                SELECT id, tenant_id, document_id, actor_id, event_type, payload, created_at
                FROM audit_events
                WHERE document_id=?
                ORDER BY created_at DESC
                """,
                (document_id,),
            ).fetchall()
            events: List[Dict[str, Any]] = []
            for row in rows:
                event = dict(row)
                payload = event.get("payload")
                try:
                    event["payload"] = json.loads(payload) if payload else {}
                except Exception:
                    event["payload"] = {}
                events.append(event)
            return events
        finally:
            conn.close()
