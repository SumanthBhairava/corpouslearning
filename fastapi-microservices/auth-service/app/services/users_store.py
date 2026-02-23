import os
from contextlib import contextmanager
from datetime import datetime
from typing import Any, Dict, List, Optional

import psycopg2
import psycopg2.extras


class UsersStore:
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
                    CREATE TABLE IF NOT EXISTS users_admin (
                        id UUID PRIMARY KEY,
                        tenant_id TEXT NOT NULL,
                        username TEXT NOT NULL DEFAULT '',
                        first_name TEXT NOT NULL,
                        last_name TEXT NOT NULL DEFAULT '',
                        email TEXT NOT NULL,
                        role_name TEXT NOT NULL DEFAULT '',
                        department_name TEXT NOT NULL DEFAULT '',
                        is_active BOOLEAN NOT NULL DEFAULT TRUE,
                        password_hash TEXT NOT NULL DEFAULT '',
                        last_login_at TIMESTAMPTZ NULL,
                        created_at TIMESTAMPTZ NOT NULL,
                        updated_at TIMESTAMPTZ NOT NULL,
                        UNIQUE (tenant_id, email)
                    )
                    """
                )
                cur.execute(
                    "ALTER TABLE users_admin ADD COLUMN IF NOT EXISTS username TEXT NOT NULL DEFAULT ''"
                )
                cur.execute(
                    """
                    CREATE UNIQUE INDEX IF NOT EXISTS users_admin_tenant_username_unique
                    ON users_admin (tenant_id, username)
                    WHERE username <> ''
                    """
                )

    def list_users(self, tenant_id: str) -> List[Dict[str, Any]]:
        with self._conn() as conn:
            with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
                cur.execute(
                    """
                    SELECT id::text, tenant_id, username, first_name, last_name, email, role_name, department_name,
                           is_active, last_login_at::text, created_at::text, updated_at::text
                    FROM users_admin
                    WHERE tenant_id=%s
                    ORDER BY created_at DESC
                    """,
                    (tenant_id,),
                )
                rows = cur.fetchall()
                return [dict(row) for row in rows]

    def get_user_by_email_or_username(self, tenant_id: str, login: str) -> Optional[Dict[str, Any]]:
        with self._conn() as conn:
            with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
                cur.execute(
                    """
                    SELECT id::text, tenant_id, username, first_name, last_name, email, role_name, department_name,
                           is_active, password_hash, last_login_at::text, created_at::text, updated_at::text
                    FROM users_admin
                    WHERE tenant_id=%s AND (LOWER(email)=LOWER(%s) OR LOWER(username)=LOWER(%s))
                    ORDER BY created_at DESC
                    LIMIT 1
                    """,
                    (tenant_id, login, login),
                )
                row = cur.fetchone()
                return dict(row) if row else None

    def touch_last_login(self, user_id: str, tenant_id: str, at: Optional[str] = None) -> None:
        ts = at or datetime.utcnow().isoformat()
        with self._conn() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    UPDATE users_admin
                    SET last_login_at=%s::timestamptz,
                        updated_at=%s::timestamptz
                    WHERE id=%s::uuid AND tenant_id=%s
                    """,
                    (ts, ts, user_id, tenant_id),
                )

    def create_user(
        self,
        user_id: str,
        tenant_id: str,
        username: str,
        first_name: str,
        last_name: str,
        email: str,
        role_name: str,
        department_name: str,
        is_active: bool,
        password_hash: str,
    ) -> Dict[str, Any]:
        now = datetime.utcnow().isoformat()
        with self._conn() as conn:
            with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
                cur.execute(
                    """
                    INSERT INTO users_admin(
                        id, tenant_id, username, first_name, last_name, email, role_name, department_name,
                        is_active, password_hash, created_at, updated_at
                    )
                    VALUES(%s::uuid, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s::timestamptz, %s::timestamptz)
                    RETURNING id::text, tenant_id, username, first_name, last_name, email, role_name, department_name,
                              is_active, last_login_at::text, created_at::text, updated_at::text
                    """,
                    (
                        user_id,
                        tenant_id,
                        username,
                        first_name,
                        last_name,
                        email,
                        role_name,
                        department_name,
                        is_active,
                        password_hash,
                        now,
                        now,
                    ),
                )
                row = cur.fetchone()
                return dict(row) if row else {}

    def update_user(
        self,
        user_id: str,
        tenant_id: str,
        username: str,
        first_name: str,
        last_name: str,
        email: str,
        role_name: str,
        department_name: str,
        is_active: bool,
        password_hash: Optional[str] = None,
    ) -> Dict[str, Any]:
        now = datetime.utcnow().isoformat()
        with self._conn() as conn:
            with conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor) as cur:
                if password_hash is not None:
                    cur.execute(
                        """
                        UPDATE users_admin
                        SET first_name=%s,
                            username=%s,
                            last_name=%s,
                            email=%s,
                            role_name=%s,
                            department_name=%s,
                            is_active=%s,
                            password_hash=%s,
                            updated_at=%s::timestamptz
                        WHERE id=%s::uuid AND tenant_id=%s
                        RETURNING id::text, tenant_id, username, first_name, last_name, email, role_name, department_name,
                                  is_active, last_login_at::text, created_at::text, updated_at::text
                        """,
                        (
                            first_name,
                            username,
                            last_name,
                            email,
                            role_name,
                            department_name,
                            is_active,
                            password_hash,
                            now,
                            user_id,
                            tenant_id,
                        ),
                    )
                else:
                    cur.execute(
                        """
                        UPDATE users_admin
                        SET first_name=%s,
                            username=%s,
                            last_name=%s,
                            email=%s,
                            role_name=%s,
                            department_name=%s,
                            is_active=%s,
                            updated_at=%s::timestamptz
                        WHERE id=%s::uuid AND tenant_id=%s
                        RETURNING id::text, tenant_id, username, first_name, last_name, email, role_name, department_name,
                                  is_active, last_login_at::text, created_at::text, updated_at::text
                        """,
                        (
                            first_name,
                            username,
                            last_name,
                            email,
                            role_name,
                            department_name,
                            is_active,
                            now,
                            user_id,
                            tenant_id,
                        ),
                    )
                row = cur.fetchone()
                if not row:
                    raise ValueError("user not found")
                return dict(row)

    def delete_user(self, user_id: str, tenant_id: str) -> None:
        with self._conn() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    "DELETE FROM users_admin WHERE id=%s::uuid AND tenant_id=%s",
                    (user_id, tenant_id),
                )
                if cur.rowcount == 0:
                    raise ValueError("user not found")
