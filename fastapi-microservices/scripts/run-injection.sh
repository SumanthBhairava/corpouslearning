#!/usr/bin/env bash
set -euo pipefail

uvicorn app.main:app --app-dir injection-service --host 0.0.0.0 --port 8001 --reload
