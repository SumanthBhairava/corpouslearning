#!/usr/bin/env bash
set -euo pipefail

uvicorn app.main:app --app-dir analyse-service --host 0.0.0.0 --port 8002 --reload
