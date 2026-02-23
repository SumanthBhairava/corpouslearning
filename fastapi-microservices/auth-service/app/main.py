import hashlib
import json
import logging
import os
import uuid
from base64 import urlsafe_b64encode
from datetime import datetime, timedelta
from typing import Any, Dict, List, Optional
from urllib.parse import urlencode

import httpx
from fastapi import Depends, FastAPI, HTTPException, Query, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import JWTError, jwt
from pydantic import BaseModel, Field
from dotenv import load_dotenv

from .services.departments_store import DepartmentsStore
from .services.roles_store import RolesStore
from .services.users_store import UsersStore

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

APP_DIR = os.path.dirname(os.path.abspath(__file__))
SERVICE_ROOT = os.path.dirname(APP_DIR)
MICROSERVICES_ROOT = os.path.dirname(SERVICE_ROOT)
load_dotenv(os.path.join(MICROSERVICES_ROOT, ".env"))
load_dotenv(os.path.join(SERVICE_ROOT, ".env"))

def _env_int(name: str, default: int) -> int:
    raw = os.getenv(name, str(default)).strip()
    try:
        return int(raw)
    except ValueError:
        logger.warning("Invalid %s=%r, using default %d", name, raw, default)
        return default


JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "change-this-in-production")
JWT_ALGORITHM = os.getenv("JWT_ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = _env_int("ACCESS_TOKEN_EXPIRE_MINUTES", 120)
if ACCESS_TOKEN_EXPIRE_MINUTES <= 0:
    logger.warning("ACCESS_TOKEN_EXPIRE_MINUTES must be > 0; using 120")
    ACCESS_TOKEN_EXPIRE_MINUTES = 120
JWT_EXP_LEEWAY_SECONDS = max(0, _env_int("JWT_EXP_LEEWAY_SECONDS", 300))
OAUTH_STATE_EXPIRE_MINUTES = max(5, _env_int("OAUTH_STATE_EXPIRE_MINUTES", 15))
OAUTH_STATE_LEEWAY_SECONDS = max(0, _env_int("OAUTH_STATE_LEEWAY_SECONDS", 300))
bearer_scheme = HTTPBearer(auto_error=False)
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID", "").strip()
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET", "").strip()
GOOGLE_REDIRECT_URI = os.getenv("GOOGLE_REDIRECT_URI", "").strip()
MICROSOFT_CLIENT_ID = os.getenv("MICROSOFT_CLIENT_ID", "").strip()
MICROSOFT_CLIENT_SECRET = os.getenv("MICROSOFT_CLIENT_SECRET", "").strip()
MICROSOFT_REDIRECT_URI = os.getenv("MICROSOFT_REDIRECT_URI", "").strip()
FRONTEND_LOGIN_URL = os.getenv("FRONTEND_LOGIN_URL", "http://localhost:8100/auth/login").strip()

app = FastAPI(
    title="Auth Service",
    version="1.1.0",
    description="Microservice for JWT authentication and admin master data (users, roles, departments).",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class RoleCreateRequest(BaseModel):
    tenant_id: str = Field(..., min_length=1)
    name: str = Field(..., min_length=2, max_length=120)
    description: str = Field(default="")
    access_level: str = Field(..., pattern="^(high|medium|low)$")
    permissions: List[str] = Field(default_factory=list)


class RoleUpdateRequest(BaseModel):
    tenant_id: str = Field(..., min_length=1)
    name: str = Field(..., min_length=2, max_length=120)
    description: str = Field(default="")
    access_level: str = Field(..., pattern="^(high|medium|low)$")
    permissions: List[str] = Field(default_factory=list)


class DepartmentCreateRequest(BaseModel):
    tenant_id: str = Field(..., min_length=1)
    name: str = Field(..., min_length=2, max_length=120)
    description: str = Field(default="")
    head: str = Field(default="")
    icon: str = Field(default="people-outline")
    color: str = Field(default="#3B82F6")
    budget: str = Field(default="")
    member_count: int = Field(default=0, ge=0)
    open_roles: int = Field(default=0, ge=0)
    utilization: int = Field(default=0, ge=0, le=100)


class DepartmentUpdateRequest(BaseModel):
    tenant_id: str = Field(..., min_length=1)
    name: str = Field(..., min_length=2, max_length=120)
    description: str = Field(default="")
    head: str = Field(default="")
    icon: str = Field(default="people-outline")
    color: str = Field(default="#3B82F6")
    budget: str = Field(default="")


class UserCreateRequest(BaseModel):
    tenant_id: str = Field(..., min_length=1)
    username: str = Field(..., min_length=3, max_length=120)
    first_name: str = Field(..., min_length=1, max_length=120)
    last_name: str = Field(default="", max_length=120)
    email: str = Field(default="", max_length=255)
    role_name: str = Field(default="")
    department_name: str = Field(default="")
    is_active: bool = True
    password: Optional[str] = None


class UserUpdateRequest(BaseModel):
    tenant_id: str = Field(..., min_length=1)
    username: str = Field(..., min_length=3, max_length=120)
    first_name: str = Field(..., min_length=1, max_length=120)
    last_name: str = Field(default="", max_length=120)
    email: str = Field(default="", max_length=255)
    role_name: str = Field(default="")
    department_name: str = Field(default="")
    is_active: bool = True
    password: Optional[str] = None


class AuthRegisterRequest(BaseModel):
    email: str = Field(..., min_length=3, max_length=255)
    password: str = Field(..., min_length=1, max_length=255)
    first_name: str = Field(default="User", max_length=120)
    last_name: str = Field(default="", max_length=120)
    company: str = Field(default="")
    tenant_id: str = Field(default="default", min_length=1)


class AuthLoginRequest(BaseModel):
    email: str = Field(..., min_length=3, max_length=255)
    password: str = Field(..., min_length=1, max_length=255)
    tenant_id: str = Field(default="default", min_length=1)


try:
    ROLES_STORE: Optional[RolesStore] = RolesStore()
except Exception as exc:
    logger.warning("RolesStore disabled: %s", exc)
    ROLES_STORE = None

try:
    DEPARTMENTS_STORE: Optional[DepartmentsStore] = DepartmentsStore()
except Exception as exc:
    logger.warning("DepartmentsStore disabled: %s", exc)
    DEPARTMENTS_STORE = None

try:
    USERS_STORE: Optional[UsersStore] = UsersStore()
except Exception as exc:
    logger.warning("UsersStore disabled: %s", exc)
    USERS_STORE = None


def _display_role(role_name: str) -> str:
    value = (role_name or "").strip()
    if not value:
        return "User"
    return " ".join(part.capitalize() for part in value.replace("_", " ").replace("-", " ").split())


def _normalize_role_name(role_name: str) -> str:
    return (role_name or "").strip().lower().replace("-", "_").replace(" ", "_")


def _to_auth_user(record: Dict[str, Any], permissions: Optional[List[str]] = None) -> Dict[str, Any]:
    full_name = (f"{record.get('first_name', '')} {record.get('last_name', '')}").strip()
    return {
        "id": record.get("id"),
        "name": full_name or record.get("username") or "User",
        "email": record.get("email") or record.get("username") or "",
        "role": _display_role(record.get("role_name", "")),
        "company": record.get("tenant_id") or "",
        "tenant_id": record.get("tenant_id") or "",
        "username": record.get("username") or "",
        "permissions": permissions or [],
    }


def _create_access_token(user_record: Dict[str, Any]) -> str:
    now = datetime.utcnow()
    expire = now + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    payload = {
        "sub": user_record.get("id", ""),
        "tenant_id": user_record.get("tenant_id", ""),
        "role_name": _normalize_role_name(user_record.get("role_name", "") or ""),
        "email": user_record.get("email", ""),
        "iat": int(now.timestamp()),
        "exp": int(expire.timestamp()),
    }
    return jwt.encode(payload, JWT_SECRET_KEY, algorithm=JWT_ALGORITHM)


def _create_oauth_state(provider: str, tenant_id: str, mode: str) -> str:
    now = datetime.utcnow()
    payload = {
        "provider": provider,
        "tenant_id": tenant_id or "default",
        "mode": mode if mode in {"login", "register"} else "login",
        "iat": int(now.timestamp()),
        "exp": int((now + timedelta(minutes=OAUTH_STATE_EXPIRE_MINUTES)).timestamp()),
    }
    return jwt.encode(payload, JWT_SECRET_KEY, algorithm=JWT_ALGORITHM)


def _decode_oauth_state(state: str) -> Dict[str, Any]:
    cleaned_state = (state or "").strip().replace(" ", "+")
    payload = jwt.decode(
        cleaned_state,
        JWT_SECRET_KEY,
        algorithms=[JWT_ALGORITHM],
        options={"verify_exp": False},
    )

    now_ts = int(datetime.utcnow().timestamp())
    exp = payload.get("exp")
    iat = payload.get("iat")

    try:
        exp_ts = int(exp)
    except (TypeError, ValueError):
        raise JWTError("OAuth state missing exp")
    if now_ts > (exp_ts + OAUTH_STATE_LEEWAY_SECONDS):
        raise JWTError("OAuth state expired")

    if iat is not None:
        try:
            iat_ts = int(iat)
            if iat_ts > (now_ts + OAUTH_STATE_LEEWAY_SECONDS):
                raise JWTError("OAuth state iat is invalid")
        except (TypeError, ValueError):
            raise JWTError("OAuth state iat is invalid")

    return payload


def _build_frontend_redirect(
    token: Optional[str] = None,
    user: Optional[Dict[str, Any]] = None,
    error: Optional[str] = None,
) -> RedirectResponse:
    params: Dict[str, str] = {}
    if token:
        params["token"] = token
    if user is not None:
        raw = json.dumps(user, separators=(",", ":")).encode("utf-8")
        params["user"] = urlsafe_b64encode(raw).decode("ascii")
    if error:
        params["error"] = error

    target = FRONTEND_LOGIN_URL
    if params:
        separator = "&" if "?" in target else "?"
        target = f"{target}{separator}{urlencode(params)}"
    return RedirectResponse(url=target, status_code=302)


def _split_name(full_name: str) -> Dict[str, str]:
    cleaned = (full_name or "").strip()
    if not cleaned:
        return {"first_name": "User", "last_name": ""}
    parts = cleaned.split()
    if len(parts) == 1:
        return {"first_name": parts[0], "last_name": ""}
    return {"first_name": parts[0], "last_name": " ".join(parts[1:])}


def _oauth_upsert_and_issue(
    *,
    tenant_id: str,
    email: str,
    first_name: str,
    last_name: str,
    mode: str,
) -> RedirectResponse:
    if USERS_STORE is None:
        return _build_frontend_redirect(error="Users service unavailable")

    tenant = (tenant_id or "default").strip() or "default"
    email_value = (email or "").strip().lower()
    if not email_value:
        return _build_frontend_redirect(error="Email not available from provider")

    user = USERS_STORE.get_user_by_email_or_username(tenant_id=tenant, login=email_value)
    if user is None:
        username = email_value.split("@")[0]
        role_name = "admin" if mode == "register" else "user"
        try:
            user = USERS_STORE.create_user(
                user_id=str(uuid.uuid4()),
                tenant_id=tenant,
                username=username,
                first_name=first_name.strip() or "User",
                last_name=last_name.strip(),
                email=email_value,
                role_name=role_name,
                department_name="",
                is_active=True,
                password_hash=hashlib.sha256(uuid.uuid4().hex.encode("utf-8")).hexdigest(),
            )
        except Exception as exc:
            logger.warning("OAuth auto-create failed: %s", exc)
            return _build_frontend_redirect(error="Cannot create user from social login")

    if not user.get("is_active", True):
        return _build_frontend_redirect(error="User is inactive")

    USERS_STORE.touch_last_login(user_id=user["id"], tenant_id=tenant, at=datetime.utcnow().isoformat())
    permissions = sorted(_resolve_permissions_by_role(tenant_id=tenant, role_name=user.get("role_name", "")))
    token = _create_access_token(user)
    auth_user = _to_auth_user(user, permissions=permissions)
    return _build_frontend_redirect(token=token, user=auth_user)


def _unauthorized(detail: str = "Invalid or missing token") -> HTTPException:
    return HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail=detail,
        headers={"WWW-Authenticate": "Bearer"},
    )


def _get_current_claims(
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(bearer_scheme),
) -> Dict[str, Any]:
    if credentials is None or credentials.scheme.lower() != "bearer" or not credentials.credentials:
        raise _unauthorized()

    raw_token = str(credentials.credentials).strip().strip('"').strip("'")
    if raw_token.lower().startswith("bearer "):
        raw_token = raw_token[7:].strip()
    if not raw_token or raw_token.lower() in {"null", "undefined"}:
        raise _unauthorized()

    try:
        payload = jwt.decode(
            raw_token,
            JWT_SECRET_KEY,
            algorithms=[JWT_ALGORITHM],
            options={"verify_exp": False},
        )
    except JWTError as exc:
        logger.warning("JWT decode failed: %s", exc)
        raise _unauthorized()

    exp = payload.get("exp")
    try:
        exp_ts = int(exp)
    except (TypeError, ValueError):
        raise _unauthorized("Token payload is invalid")
    now_ts = int(datetime.utcnow().timestamp())
    if now_ts > (exp_ts + JWT_EXP_LEEWAY_SECONDS):
        raise _unauthorized("Token expired")

    subject = payload.get("sub")
    tenant_id = payload.get("tenant_id")
    if not subject or not tenant_id:
        raise _unauthorized("Token payload is invalid")

    return payload


def _ensure_tenant_access(claims: Dict[str, Any], tenant_id: str) -> None:
    token_tenant = (claims.get("tenant_id") or "").strip()
    role_name = (claims.get("role_name") or "").strip().lower()
    is_super_admin = role_name in {"super_admin", "super admin"}
    if not is_super_admin and token_tenant != tenant_id:
        raise HTTPException(status_code=403, detail="Not authorized for this tenant")


DEFAULT_ROLE_PERMISSIONS: Dict[str, set] = {
    "super_admin": {"*"},
    "admin": {"admin:*"},
    "company_owner": {"admin:*"},
    "owner": {"admin:*"},
    "manager": {
        "admin:roles:read",
        "admin:departments:read",
        "admin:users:read",
    },
    "user": set(),
}


def _normalize_permissions(values: List[str]) -> set:
    return {str(value).strip().lower() for value in values if str(value).strip()}


def _resolve_permissions_by_role(tenant_id: str, role_name: str) -> set:
    role_name = _normalize_role_name(role_name)
    if role_name in {"super_admin", "super admin"}:
        return {"*"}

    if ROLES_STORE is not None and role_name:
        try:
            role = ROLES_STORE.get_role_by_name(tenant_id=tenant_id, role_name=role_name)
            if role is not None:
                db_permissions = _normalize_permissions(role.get("permissions") or [])
                if db_permissions:
                    return db_permissions
        except Exception as exc:
            logger.warning("Permission lookup failed for role '%s': %s", role_name, exc)

    return set(DEFAULT_ROLE_PERMISSIONS.get(role_name, set()))


def _resolve_role_permissions(claims: Dict[str, Any], tenant_id: str) -> set:
    return _resolve_permissions_by_role(tenant_id=tenant_id, role_name=(claims.get("role_name") or ""))


def _permission_matches(granted: str, required: str) -> bool:
    if granted in {"*", required}:
        return True
    if granted.endswith("*"):
        return required.startswith(granted[:-1])
    return False


def _ensure_permission(claims: Dict[str, Any], tenant_id: str, required: str) -> None:
    permissions = _resolve_role_permissions(claims, tenant_id)
    if not permissions:
        raise HTTPException(status_code=403, detail=f"Missing permission: {required}")
    if any(_permission_matches(granted, required) for granted in permissions):
        return
    raise HTTPException(status_code=403, detail=f"Missing permission: {required}")


@app.get("/health")
def health() -> Dict[str, str]:
    return {"status": "ok", "service": "auth-service"}


@app.post("/auth/register")
def register(payload: AuthRegisterRequest) -> Dict[str, Any]:
    if USERS_STORE is None:
        raise HTTPException(status_code=503, detail="Users service unavailable. Configure PostgreSQL DSN.")
    tenant_id = payload.tenant_id.strip()
    email_value = payload.email.strip().lower()
    if not tenant_id or not email_value:
        raise HTTPException(status_code=400, detail="tenant_id and email are required")

    username = email_value.split("@")[0]
    password_hash = hashlib.sha256(payload.password.encode("utf-8")).hexdigest()

    try:
        user = USERS_STORE.create_user(
            user_id=str(uuid.uuid4()),
            tenant_id=tenant_id,
            username=username,
            first_name=payload.first_name.strip() or "User",
            last_name=payload.last_name.strip(),
            email=email_value,
            role_name="admin",
            department_name="",
            is_active=True,
            password_hash=password_hash,
        )
    except Exception as exc:
        error = str(exc).lower()
        if "unique" in error or "duplicate" in error:
            raise HTTPException(status_code=409, detail="Email or username already exists for this tenant.")
        raise HTTPException(status_code=500, detail=f"Cannot register user: {exc}")

    permissions = sorted(_resolve_permissions_by_role(tenant_id=tenant_id, role_name=user.get("role_name", "")))
    token = _create_access_token(user)
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": _to_auth_user(user, permissions=permissions),
    }


@app.post("/auth/login")
def login(payload: AuthLoginRequest) -> Dict[str, Any]:
    if USERS_STORE is None:
        raise HTTPException(status_code=503, detail="Users service unavailable. Configure PostgreSQL DSN.")
    tenant_id = payload.tenant_id.strip()
    login_value = payload.email.strip().lower()
    if not tenant_id or not login_value:
        raise HTTPException(status_code=400, detail="tenant_id and email are required")

    user = USERS_STORE.get_user_by_email_or_username(tenant_id=tenant_id, login=login_value)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    expected_hash = user.get("password_hash", "") or ""
    incoming_hash = hashlib.sha256(payload.password.encode("utf-8")).hexdigest()
    if not expected_hash or expected_hash != incoming_hash:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    if not user.get("is_active", True):
        raise HTTPException(status_code=403, detail="User is inactive")

    USERS_STORE.touch_last_login(user_id=user["id"], tenant_id=tenant_id, at=datetime.utcnow().isoformat())

    permissions = sorted(_resolve_permissions_by_role(tenant_id=tenant_id, role_name=user.get("role_name", "")))
    token = _create_access_token(user)
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": _to_auth_user(user, permissions=permissions),
    }


@app.get("/auth/oauth/google/start")
def oauth_google_start(
    tenant_id: str = Query(default="default"),
    mode: str = Query(default="login"),
) -> RedirectResponse:
    if not GOOGLE_CLIENT_ID or not GOOGLE_CLIENT_SECRET or not GOOGLE_REDIRECT_URI:
        raise HTTPException(status_code=503, detail="Google OAuth is not configured")

    state = _create_oauth_state(provider="google", tenant_id=tenant_id, mode=mode)
    params = {
        "client_id": GOOGLE_CLIENT_ID,
        "redirect_uri": GOOGLE_REDIRECT_URI,
        "response_type": "code",
        "scope": "openid email profile",
        "state": state,
        "access_type": "offline",
        "prompt": "select_account",
    }
    target = f"https://accounts.google.com/o/oauth2/v2/auth?{urlencode(params)}"
    return RedirectResponse(url=target, status_code=302)


@app.get("/auth/oauth/google/callback")
def oauth_google_callback(
    code: Optional[str] = None,
    state: Optional[str] = None,
    error: Optional[str] = None,
) -> RedirectResponse:
    if error:
        return _build_frontend_redirect(error=f"Google login failed: {error}")
    if not code or not state:
        return _build_frontend_redirect(error="Google callback missing code/state")

    try:
        state_payload = _decode_oauth_state(state)
        if state_payload.get("provider") != "google":
            return _build_frontend_redirect(error="OAuth state provider mismatch")
    except JWTError as exc:
        logger.warning("Google OAuth state decode failed: %s", exc)
        return _build_frontend_redirect(error="Invalid OAuth state")

    try:
        token_resp = httpx.post(
            "https://oauth2.googleapis.com/token",
            data={
                "code": code,
                "client_id": GOOGLE_CLIENT_ID,
                "client_secret": GOOGLE_CLIENT_SECRET,
                "redirect_uri": GOOGLE_REDIRECT_URI,
                "grant_type": "authorization_code",
            },
            timeout=20.0,
        )
        token_resp.raise_for_status()
        token_data = token_resp.json()
        access_token = token_data.get("access_token")
        if not access_token:
            return _build_frontend_redirect(error="Google access token missing")

        userinfo_resp = httpx.get(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            headers={"Authorization": f"Bearer {access_token}"},
            timeout=20.0,
        )
        userinfo_resp.raise_for_status()
        userinfo = userinfo_resp.json()
    except Exception as exc:
        logger.warning("Google OAuth exchange failed: %s", exc)
        return _build_frontend_redirect(error="Google token exchange failed")

    email = (userinfo.get("email") or "").strip().lower()
    first_name = (userinfo.get("given_name") or "").strip()
    last_name = (userinfo.get("family_name") or "").strip()
    if not first_name and not last_name:
        names = _split_name(userinfo.get("name") or "")
        first_name = names["first_name"]
        last_name = names["last_name"]

    return _oauth_upsert_and_issue(
        tenant_id=str(state_payload.get("tenant_id") or "default"),
        email=email,
        first_name=first_name,
        last_name=last_name,
        mode=str(state_payload.get("mode") or "login"),
    )


@app.get("/auth/oauth/microsoft/start")
def oauth_microsoft_start(
    tenant_id: str = Query(default="default"),
    mode: str = Query(default="login"),
) -> RedirectResponse:
    if not MICROSOFT_CLIENT_ID or not MICROSOFT_CLIENT_SECRET or not MICROSOFT_REDIRECT_URI:
        raise HTTPException(status_code=503, detail="Microsoft OAuth is not configured")

    state = _create_oauth_state(provider="microsoft", tenant_id=tenant_id, mode=mode)
    params = {
        "client_id": MICROSOFT_CLIENT_ID,
        "redirect_uri": MICROSOFT_REDIRECT_URI,
        "response_type": "code",
        "scope": "openid profile email User.Read",
        "response_mode": "query",
        "state": state,
        "prompt": "select_account",
    }
    target = f"https://login.microsoftonline.com/common/oauth2/v2.0/authorize?{urlencode(params)}"
    return RedirectResponse(url=target, status_code=302)


@app.get("/auth/oauth/microsoft/callback")
def oauth_microsoft_callback(
    code: Optional[str] = None,
    state: Optional[str] = None,
    error: Optional[str] = None,
) -> RedirectResponse:
    if error:
        return _build_frontend_redirect(error=f"Microsoft login failed: {error}")
    if not code or not state:
        return _build_frontend_redirect(error="Microsoft callback missing code/state")

    try:
        state_payload = _decode_oauth_state(state)
        if state_payload.get("provider") != "microsoft":
            return _build_frontend_redirect(error="OAuth state provider mismatch")
    except JWTError as exc:
        logger.warning("Microsoft OAuth state decode failed: %s", exc)
        return _build_frontend_redirect(error="Invalid OAuth state")

    try:
        token_resp = httpx.post(
            "https://login.microsoftonline.com/common/oauth2/v2.0/token",
            data={
                "code": code,
                "client_id": MICROSOFT_CLIENT_ID,
                "client_secret": MICROSOFT_CLIENT_SECRET,
                "redirect_uri": MICROSOFT_REDIRECT_URI,
                "grant_type": "authorization_code",
            },
            timeout=20.0,
        )
        token_resp.raise_for_status()
        token_data = token_resp.json()
        access_token = token_data.get("access_token")
        if not access_token:
            return _build_frontend_redirect(error="Microsoft access token missing")

        profile_resp = httpx.get(
            "https://graph.microsoft.com/v1.0/me?$select=displayName,givenName,surname,mail,userPrincipalName",
            headers={"Authorization": f"Bearer {access_token}"},
            timeout=20.0,
        )
        profile_resp.raise_for_status()
        profile = profile_resp.json()
    except Exception as exc:
        logger.warning("Microsoft OAuth exchange failed: %s", exc)
        return _build_frontend_redirect(error="Microsoft token exchange failed")

    email = (profile.get("mail") or profile.get("userPrincipalName") or "").strip().lower()
    first_name = (profile.get("givenName") or "").strip()
    last_name = (profile.get("surname") or "").strip()
    if not first_name and not last_name:
        names = _split_name(profile.get("displayName") or "")
        first_name = names["first_name"]
        last_name = names["last_name"]

    return _oauth_upsert_and_issue(
        tenant_id=str(state_payload.get("tenant_id") or "default"),
        email=email,
        first_name=first_name,
        last_name=last_name,
        mode=str(state_payload.get("mode") or "login"),
    )


@app.get("/admin/roles")
def list_roles(tenant_id: str, claims: Dict[str, Any] = Depends(_get_current_claims)) -> Dict[str, Any]:
    if ROLES_STORE is None:
        raise HTTPException(status_code=503, detail="Roles service unavailable. Configure PostgreSQL DSN.")
    tenant_id = tenant_id.strip()
    if not tenant_id:
        raise HTTPException(status_code=400, detail="tenant_id is required")
    _ensure_tenant_access(claims, tenant_id)
    _ensure_permission(claims, tenant_id, "admin:roles:read")
    try:
        roles = ROLES_STORE.list_roles(tenant_id)
        return {"tenant_id": tenant_id, "total": len(roles), "roles": roles}
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Cannot load roles: {exc}")


@app.post("/admin/roles")
def create_role(payload: RoleCreateRequest, claims: Dict[str, Any] = Depends(_get_current_claims)) -> Dict[str, Any]:
    if ROLES_STORE is None:
        raise HTTPException(status_code=503, detail="Roles service unavailable. Configure PostgreSQL DSN.")
    tenant_id = payload.tenant_id.strip()
    _ensure_tenant_access(claims, tenant_id)
    _ensure_permission(claims, tenant_id, "admin:roles:write")
    try:
        role = ROLES_STORE.create_role(
            role_id=str(uuid.uuid4()),
            tenant_id=payload.tenant_id.strip(),
            name=payload.name.strip(),
            description=payload.description.strip(),
            access_level=payload.access_level,
            permissions=[p.strip() for p in payload.permissions if p.strip()],
        )
        return role
    except Exception as exc:
        error = str(exc).lower()
        if "unique" in error or "duplicate" in error:
            raise HTTPException(status_code=409, detail="Role name already exists for this tenant.")
        raise HTTPException(status_code=500, detail=f"Cannot create role: {exc}")


@app.put("/admin/roles/{role_id}")
def update_role(role_id: str, payload: RoleUpdateRequest, claims: Dict[str, Any] = Depends(_get_current_claims)) -> Dict[str, Any]:
    if ROLES_STORE is None:
        raise HTTPException(status_code=503, detail="Roles service unavailable. Configure PostgreSQL DSN.")
    tenant_id = payload.tenant_id.strip()
    _ensure_tenant_access(claims, tenant_id)
    _ensure_permission(claims, tenant_id, "admin:roles:write")
    try:
        role = ROLES_STORE.update_role(
            role_id=role_id,
            tenant_id=payload.tenant_id.strip(),
            name=payload.name.strip(),
            description=payload.description.strip(),
            access_level=payload.access_level,
            permissions=[p.strip() for p in payload.permissions if p.strip()],
        )
        return role
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc))
    except Exception as exc:
        error = str(exc).lower()
        if "unique" in error or "duplicate" in error:
            raise HTTPException(status_code=409, detail="Role name already exists for this tenant.")
        raise HTTPException(status_code=500, detail=f"Cannot update role: {exc}")


@app.delete("/admin/roles/{role_id}")
def delete_role(role_id: str, tenant_id: str, claims: Dict[str, Any] = Depends(_get_current_claims)) -> Dict[str, Any]:
    if ROLES_STORE is None:
        raise HTTPException(status_code=503, detail="Roles service unavailable. Configure PostgreSQL DSN.")
    tenant_id = tenant_id.strip()
    if not tenant_id:
        raise HTTPException(status_code=400, detail="tenant_id is required")
    _ensure_tenant_access(claims, tenant_id)
    _ensure_permission(claims, tenant_id, "admin:roles:write")
    try:
        ROLES_STORE.delete_role(role_id=role_id, tenant_id=tenant_id)
        return {"deleted": True, "role_id": role_id}
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc))
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Cannot delete role: {exc}")


@app.get("/admin/departments")
def list_departments(tenant_id: str, claims: Dict[str, Any] = Depends(_get_current_claims)) -> Dict[str, Any]:
    if DEPARTMENTS_STORE is None:
        raise HTTPException(status_code=503, detail="Departments service unavailable. Configure PostgreSQL DSN.")
    tenant_id = tenant_id.strip()
    if not tenant_id:
        raise HTTPException(status_code=400, detail="tenant_id is required")
    _ensure_tenant_access(claims, tenant_id)
    _ensure_permission(claims, tenant_id, "admin:departments:read")
    try:
        departments = DEPARTMENTS_STORE.list_departments(tenant_id)
        return {"tenant_id": tenant_id, "total": len(departments), "departments": departments}
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Cannot load departments: {exc}")


@app.post("/admin/departments")
def create_department(payload: DepartmentCreateRequest, claims: Dict[str, Any] = Depends(_get_current_claims)) -> Dict[str, Any]:
    if DEPARTMENTS_STORE is None:
        raise HTTPException(status_code=503, detail="Departments service unavailable. Configure PostgreSQL DSN.")
    tenant_id = payload.tenant_id.strip()
    _ensure_tenant_access(claims, tenant_id)
    _ensure_permission(claims, tenant_id, "admin:departments:write")
    try:
        department = DEPARTMENTS_STORE.create_department(
            department_id=str(uuid.uuid4()),
            tenant_id=payload.tenant_id.strip(),
            name=payload.name.strip(),
            description=payload.description.strip(),
            head=payload.head.strip(),
            icon=payload.icon.strip() or "people-outline",
            color=payload.color.strip() or "#3B82F6",
            budget=payload.budget.strip(),
            member_count=payload.member_count,
            open_roles=payload.open_roles,
            utilization=payload.utilization,
        )
        return department
    except Exception as exc:
        error = str(exc).lower()
        if "unique" in error or "duplicate" in error:
            raise HTTPException(status_code=409, detail="Department name already exists for this tenant.")
        raise HTTPException(status_code=500, detail=f"Cannot create department: {exc}")


@app.put("/admin/departments/{department_id}")
def update_department(
    department_id: str,
    payload: DepartmentUpdateRequest,
    claims: Dict[str, Any] = Depends(_get_current_claims),
) -> Dict[str, Any]:
    if DEPARTMENTS_STORE is None:
        raise HTTPException(status_code=503, detail="Departments service unavailable. Configure PostgreSQL DSN.")
    tenant_id = payload.tenant_id.strip()
    _ensure_tenant_access(claims, tenant_id)
    _ensure_permission(claims, tenant_id, "admin:departments:write")
    try:
        department = DEPARTMENTS_STORE.update_department(
            department_id=department_id,
            tenant_id=payload.tenant_id.strip(),
            name=payload.name.strip(),
            description=payload.description.strip(),
            head=payload.head.strip(),
            icon=payload.icon.strip() or "people-outline",
            color=payload.color.strip() or "#3B82F6",
            budget=payload.budget.strip(),
        )
        return department
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc))
    except Exception as exc:
        error = str(exc).lower()
        if "unique" in error or "duplicate" in error:
            raise HTTPException(status_code=409, detail="Department name already exists for this tenant.")
        raise HTTPException(status_code=500, detail=f"Cannot update department: {exc}")


@app.delete("/admin/departments/{department_id}")
def delete_department(
    department_id: str,
    tenant_id: str,
    claims: Dict[str, Any] = Depends(_get_current_claims),
) -> Dict[str, Any]:
    if DEPARTMENTS_STORE is None:
        raise HTTPException(status_code=503, detail="Departments service unavailable. Configure PostgreSQL DSN.")
    tenant_id = tenant_id.strip()
    if not tenant_id:
        raise HTTPException(status_code=400, detail="tenant_id is required")
    _ensure_tenant_access(claims, tenant_id)
    _ensure_permission(claims, tenant_id, "admin:departments:write")
    try:
        DEPARTMENTS_STORE.delete_department(department_id=department_id, tenant_id=tenant_id)
        return {"deleted": True, "department_id": department_id}
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc))
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Cannot delete department: {exc}")


@app.get("/admin/users")
def list_users(tenant_id: str, claims: Dict[str, Any] = Depends(_get_current_claims)) -> Dict[str, Any]:
    if USERS_STORE is None:
        raise HTTPException(status_code=503, detail="Users service unavailable. Configure PostgreSQL DSN.")
    tenant_id = tenant_id.strip()
    if not tenant_id:
        raise HTTPException(status_code=400, detail="tenant_id is required")
    _ensure_tenant_access(claims, tenant_id)
    _ensure_permission(claims, tenant_id, "admin:users:read")
    try:
        users = USERS_STORE.list_users(tenant_id)
        return {"tenant_id": tenant_id, "total": len(users), "users": users}
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Cannot load users: {exc}")


@app.post("/admin/users")
def create_user(payload: UserCreateRequest, claims: Dict[str, Any] = Depends(_get_current_claims)) -> Dict[str, Any]:
    if USERS_STORE is None:
        raise HTTPException(status_code=503, detail="Users service unavailable. Configure PostgreSQL DSN.")
    tenant_id = payload.tenant_id.strip()
    _ensure_tenant_access(claims, tenant_id)
    _ensure_permission(claims, tenant_id, "admin:users:write")
    try:
        password_hash = hashlib.sha256((payload.password or "").encode("utf-8")).hexdigest() if payload.password else ""
        username = payload.username.strip().lower()
        email_value = payload.email.strip().lower() if payload.email.strip() else username
        user = USERS_STORE.create_user(
            user_id=str(uuid.uuid4()),
            tenant_id=payload.tenant_id.strip(),
            username=username,
            first_name=payload.first_name.strip(),
            last_name=payload.last_name.strip(),
            email=email_value,
            role_name=payload.role_name.strip(),
            department_name=payload.department_name.strip(),
            is_active=payload.is_active,
            password_hash=password_hash,
        )
        return user
    except Exception as exc:
        error = str(exc).lower()
        if "unique" in error or "duplicate" in error:
            raise HTTPException(status_code=409, detail="Email or username already exists for this tenant.")
        raise HTTPException(status_code=500, detail=f"Cannot create user: {exc}")


@app.put("/admin/users/{user_id}")
def update_user(
    user_id: str,
    payload: UserUpdateRequest,
    claims: Dict[str, Any] = Depends(_get_current_claims),
) -> Dict[str, Any]:
    if USERS_STORE is None:
        raise HTTPException(status_code=503, detail="Users service unavailable. Configure PostgreSQL DSN.")
    tenant_id = payload.tenant_id.strip()
    _ensure_tenant_access(claims, tenant_id)
    _ensure_permission(claims, tenant_id, "admin:users:write")
    try:
        password_hash = hashlib.sha256(payload.password.encode("utf-8")).hexdigest() if payload.password else None
        username = payload.username.strip().lower()
        email_value = payload.email.strip().lower() if payload.email.strip() else username
        user = USERS_STORE.update_user(
            user_id=user_id,
            tenant_id=payload.tenant_id.strip(),
            username=username,
            first_name=payload.first_name.strip(),
            last_name=payload.last_name.strip(),
            email=email_value,
            role_name=payload.role_name.strip(),
            department_name=payload.department_name.strip(),
            is_active=payload.is_active,
            password_hash=password_hash,
        )
        return user
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc))
    except Exception as exc:
        error = str(exc).lower()
        if "unique" in error or "duplicate" in error:
            raise HTTPException(status_code=409, detail="Email or username already exists for this tenant.")
        raise HTTPException(status_code=500, detail=f"Cannot update user: {exc}")


@app.delete("/admin/users/{user_id}")
def delete_user(user_id: str, tenant_id: str, claims: Dict[str, Any] = Depends(_get_current_claims)) -> Dict[str, Any]:
    if USERS_STORE is None:
        raise HTTPException(status_code=503, detail="Users service unavailable. Configure PostgreSQL DSN.")
    tenant_id = tenant_id.strip()
    if not tenant_id:
        raise HTTPException(status_code=400, detail="tenant_id is required")
    _ensure_tenant_access(claims, tenant_id)
    _ensure_permission(claims, tenant_id, "admin:users:write")
    try:
        USERS_STORE.delete_user(user_id=user_id, tenant_id=tenant_id)
        return {"deleted": True, "user_id": user_id}
    except ValueError as exc:
        raise HTTPException(status_code=404, detail=str(exc))
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Cannot delete user: {exc}")
