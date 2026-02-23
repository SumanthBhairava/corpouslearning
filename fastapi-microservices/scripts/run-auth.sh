#!/usr/bin/env bash
set -euo pipefail

# Load environment variables from .env if present.
if [ -f ".env" ]; then
  set -a
  . ./.env
  set +a
fi

uvicorn app.main:app --app-dir auth-service --host 0.0.0.0 --port 8003 --reload
