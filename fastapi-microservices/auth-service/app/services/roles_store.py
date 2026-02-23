import json
import os
from contextlib import contextmanager
from datetime import datetime
from typing import Any, Dict, List, Optional

import psycopg2
import psycopg2.extras


class RolesStore:
    def __init__(self, dsn: Optional[str] = None):
        self.dsn = dsn or os.getenv('AUTH_PG_DSN') or os.getenv('DATABASE_URL') or os.getenv('ANALYSE_PG_DSN')
        if not self.dsn:
            raise ValueError('PostgreSQL DSN missing. Set AUTH_PG_DSN or DATABASE_URL')
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
                    CREATE TABLE IF NOT EXISTS roles (
                        id UUID PRIMARY KEY,
                        tenant_id TEXT NOT NULL,
                        name TEXT NOT NULL,
                        description TEXT NOT NULL DEFAULT '',
                        access_level TEXT NOT NULL CHECK (access_level IN ('high', 'medium', 'low')),
                        permissions JSONB NOT NULL DEFAULT '[]'::jsonb,
                        user_count INTEGER NOT NULL DEFAULT 0,
                        created_at TIMESTAMPTZ NOT NULL,
                        updated_at TIMESTAMPTZ NOT NULL,
                        UNIQUE (tenant_id, name)
                    )
                    """
                )

    def list_roles(self, tenant_id: str) -> List[Dict[str, Any]]:
        with self._conn() as conn:
            with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
                cur.execute(
                    """
                    SELECT id::text, tenant_id, name, description, access_level, permissions, user_count,
                           created_at::text, updated_at::text
                    FROM roles
                    WHERE tenant_id=%s
                    ORDER BY created_at DESC
                    """,
                    (tenant_id,),
                )
                rows = cur.fetchall()
                return [dict(row) for row in rows]

    def get_role_by_name(self, tenant_id: str, role_name: str) -> Optional[Dict[str, Any]]:
        with self._conn() as conn:
            with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
                cur.execute(
                    """
                    SELECT id::text, tenant_id, name, description, access_level, permissions, user_count,
                           created_at::text, updated_at::text
                    FROM roles
                    WHERE tenant_id=%s AND lower(name)=lower(%s)
                    LIMIT 1
                    """,
                    (tenant_id, role_name),
                )
                row = cur.fetchone()
                return dict(row) if row else None

    def create_role(
        self,
        role_id: str,
        tenant_id: str,
        name: str,
        description: str,
        access_level: str,
        permissions: List[str],
    ) -> Dict[str, Any]:
        now = datetime.utcnow().isoformat()
        with self._conn() as conn:
            with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
                cur.execute(
                    """
                    INSERT INTO roles(id, tenant_id, name, description, access_level, permissions, user_count, created_at, updated_at)
                    VALUES(%s::uuid, %s, %s, %s, %s, %s::jsonb, 0, %s::timestamptz, %s::timestamptz)
                    RETURNING id::text, tenant_id, name, description, access_level, permissions, user_count,
                              created_at::text, updated_at::text
                    """,
                    (role_id, tenant_id, name, description, access_level, json.dumps(permissions), now, now),
                )
                row = cur.fetchone()
                return dict(row) if row else {}

    def update_role(
        self,
        role_id: str,
        tenant_id: str,
        name: str,
        description: str,
        access_level: str,
        permissions: List[str],
    ) -> Dict[str, Any]:
        now = datetime.utcnow().isoformat()
        with self._conn() as conn:
            with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
                cur.execute(
                    """
                    UPDATE roles
                    SET name=%s,
                        description=%s,
                        access_level=%s,
                        permissions=%s::jsonb,
                        updated_at=%s::timestamptz
                    WHERE id=%s::uuid AND tenant_id=%s
                    RETURNING id::text, tenant_id, name, description, access_level, permissions, user_count,
                              created_at::text, updated_at::text
                    """,
                    (name, description, access_level, json.dumps(permissions), now, role_id, tenant_id),
                )
                row = cur.fetchone()
                if not row:
                    raise ValueError('role not found')
                return dict(row)

    def delete_role(self, role_id: str, tenant_id: str) -> None:
        with self._conn() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    "DELETE FROM roles WHERE id=%s::uuid AND tenant_id=%s",
                    (role_id, tenant_id),
                )
                if cur.rowcount == 0:
                    raise ValueError('role not found')
