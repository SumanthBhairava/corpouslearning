import os
from contextlib import contextmanager
from datetime import datetime
from typing import Any, Dict, List, Optional

import psycopg2
import psycopg2.extras


class DepartmentsStore:
    def __init__(self, dsn: Optional[str] = None):
        self.dsn = dsn or os.getenv("AUTH_PG_DSN") or os.getenv("DATABASE_URL") or os.getenv("ANALYSE_PG_DSN")
        if not self.dsn:
            raise ValueError("PostgreSQL DSN missing. Set AUTH_PG_DSN or DATABASE_URL")
        self._init_db()

    @contextmanager
    def _conn(self):
        conn = psycopg2.connect(self.dsn)
        try:
            yield conn
            conn.commit()
        except Exception:
            conn.rollback()
            raise
        finally:
            conn.close()

    def _init_db(self) -> None:
        with self._conn() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    CREATE TABLE IF NOT EXISTS departments (
                        id UUID PRIMARY KEY,
                        tenant_id TEXT NOT NULL,
                        name TEXT NOT NULL,
                        description TEXT NOT NULL DEFAULT '',
                        head TEXT NOT NULL DEFAULT '',
                        icon TEXT NOT NULL DEFAULT 'people-outline',
                        color TEXT NOT NULL DEFAULT '#3B82F6',
                        budget TEXT NOT NULL DEFAULT '',
                        member_count INTEGER NOT NULL DEFAULT 0,
                        open_roles INTEGER NOT NULL DEFAULT 0,
                        utilization INTEGER NOT NULL DEFAULT 0,
                        created_at TIMESTAMPTZ NOT NULL,
                        updated_at TIMESTAMPTZ NOT NULL,
                        UNIQUE (tenant_id, name)
                    )
                    """
                )
                cur.execute(
                    "ALTER TABLE departments ADD COLUMN IF NOT EXISTS description TEXT NOT NULL DEFAULT ''"
                )

    def list_departments(self, tenant_id: str) -> List[Dict[str, Any]]:
        with self._conn() as conn:
            with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
                cur.execute(
                    """
                    SELECT id::text, tenant_id, name, head, icon, color, budget,
                           description,
                           member_count, open_roles, utilization,
                           created_at::text, updated_at::text
                    FROM departments
                    WHERE tenant_id=%s
                    ORDER BY created_at DESC
                    """,
                    (tenant_id,),
                )
                rows = cur.fetchall()
                return [dict(row) for row in rows]

    def create_department(
        self,
        department_id: str,
        tenant_id: str,
        name: str,
        description: str,
        head: str,
        icon: str,
        color: str,
        budget: str,
        member_count: int,
        open_roles: int,
        utilization: int,
    ) -> Dict[str, Any]:
        now = datetime.utcnow().isoformat()
        with self._conn() as conn:
            with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
                cur.execute(
                    """
                    INSERT INTO departments(
                        id, tenant_id, name, description, head, icon, color, budget,
                        member_count, open_roles, utilization, created_at, updated_at
                    )
                    VALUES(
                        %s::uuid, %s, %s, %s, %s, %s, %s, %s,
                        %s, %s, %s, %s::timestamptz, %s::timestamptz
                    )
                    RETURNING id::text, tenant_id, name, description, head, icon, color, budget,
                              member_count, open_roles, utilization,
                              created_at::text, updated_at::text
                    """,
                    (
                        department_id,
                        tenant_id,
                        name,
                        description,
                        head,
                        icon,
                        color,
                        budget,
                        member_count,
                        open_roles,
                        utilization,
                        now,
                        now,
                    ),
                )
                row = cur.fetchone()
                return dict(row) if row else {}

    def update_department(
        self,
        department_id: str,
        tenant_id: str,
        name: str,
        description: str,
        head: str,
        icon: str,
        color: str,
        budget: str,
    ) -> Dict[str, Any]:
        now = datetime.utcnow().isoformat()
        with self._conn() as conn:
            with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
                cur.execute(
                    """
                    UPDATE departments
                    SET name=%s,
                        description=%s,
                        head=%s,
                        icon=%s,
                        color=%s,
                        budget=%s,
                        updated_at=%s::timestamptz
                    WHERE id=%s::uuid AND tenant_id=%s
                    RETURNING id::text, tenant_id, name, description, head, icon, color, budget,
                              member_count, open_roles, utilization,
                              created_at::text, updated_at::text
                    """,
                    (name, description, head, icon, color, budget, now, department_id, tenant_id),
                )
                row = cur.fetchone()
                if not row:
                    raise ValueError("department not found")
                return dict(row)

    def delete_department(self, department_id: str, tenant_id: str) -> None:
        with self._conn() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    "DELETE FROM departments WHERE id=%s::uuid AND tenant_id=%s",
                    (department_id, tenant_id),
                )
                if cur.rowcount == 0:
                    raise ValueError("department not found")
