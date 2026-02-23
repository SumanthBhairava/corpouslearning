# FastAPI Microservices

This folder contains three standalone microservices:

- `injection-service` (port `8001`)
- `analyse-service` (port `8002`)
- `auth-service` (port `8003`)

## 1) Setup once

```bash
cd fastapi-microservices
python3 -m venv .venv
source .venv/bin/activate
pip install -r injection-service/requirements.txt
pip install -r analyse-service/requirements.txt
pip install -r auth-service/requirements.txt
```

### Environment variables
```bash
cd fastapi-microservices
cp .env.example .env
# edit .env with your PostgreSQL credentials and JWT secret
```

Optional (better vector quality, heavier install):
```bash
pip install -r injection-service/requirements-ml.txt
```

Optional runtime limits:
- `MAX_CORPUS_ZIP_MB` (default `100`)
- `MAX_CORPUS_ZIP_ENTRIES` (default `2000`)
- `MAX_DOCX_BYTES` (default `20971520`)
- `JWT_SECRET_KEY` (required for production, default is insecure dev value)
- `JWT_ALGORITHM` (default `HS256`)
- `ACCESS_TOKEN_EXPIRE_MINUTES` (default `120`)

## 2) Run services

### Injection service
```bash
cd fastapi-microservices
source .venv/bin/activate
./scripts/run-injection.sh
```

### Analyse service
```bash
cd fastapi-microservices
source .venv/bin/activate
./scripts/run-analyse.sh
```

### Auth service
```bash
cd fastapi-microservices
source .venv/bin/activate
./scripts/run-auth.sh
```

Docs:
- Injection service: `http://localhost:8001/docs`
- Analyse service: `http://localhost:8002/docs`
- Auth service: `http://localhost:8003/docs`

## 3) Injection service workflow (corpus learning)

1. Zip your corpus folder (`customer folders` inside it, each containing `.docx`).
2. Upload ZIP to `POST /corpus/upload` with `tenant_id`.
3. Poll `GET /jobs/{job_id}` until status is `completed`.
4. Read summary from `GET /jobs/{job_id}/summary`.
5. Use `POST /rag/retrieve` for RAG retrieval preview (`latest` or `all` versions).

### Upload corpus
```bash
curl -X POST http://localhost:8001/corpus/upload \
  -F "tenant_id=acme" \
  -F "corpus_version=2026-week-08" \
  -F "model_name=mistral" \
  -F "lm_studio_url=http://localhost:1234" \
  -F "corpus_zip=@/absolute/path/to/corpus.zip"
```

### Upload single DOCX (folder/subfolder target)
```bash
curl -X POST http://localhost:8001/corpus/upload-docx \
  -F "tenant_id=acme" \
  -F "customer_path=CustomerA/subfolder" \
  -F "corpus_version=2026-week-09" \
  -F "docx_file=@/absolute/path/to/contract_v2.docx"
```

### Upload folder documents directly (frontend sends files + relative paths)
```bash
curl -X POST http://localhost:8001/corpus/upload-folder \
  -F "tenant_id=acme" \
  -F 'relative_paths=["CustomerA/01_template.docx","CustomerA/sub/02_redline.docx"]' \
  -F "files=@/absolute/path/01_template.docx" \
  -F "files=@/absolute/path/02_redline.docx"
```

### Job status
```bash
curl http://localhost:8001/jobs/<job_id>
```

### Learning summary
```bash
curl http://localhost:8001/jobs/<job_id>/summary
```

### Retrieval preview
```bash
curl -X POST http://localhost:8001/rag/retrieve \
  -H 'Content-Type: application/json' \
  -d '{"tenant_id":"acme","query":"termination for convenience","top_k":5,"version_mode":"latest"}'
```

### Version inventory
```bash
curl http://localhost:8001/tenant/acme/versions
```

## 4) Existing text injection API

```bash
curl -X POST http://localhost:8001/inject \
  -H 'Content-Type: application/json' \
  -d '{
    "base_text":"Quarterly report is ready.",
    "snippets":["[PRIORITY]","Share with management"],
    "mode":"prepend"
  }'
```

## 5) Analyse service sample

```bash
curl -X POST http://localhost:8002/analyse \
  -H 'Content-Type: application/json' \
  -d '{
    "text":"FastAPI is simple. FastAPI is fast and productive!",
    "top_n_words": 3
  }'
```


### Analyse service RAG API
```bash
curl -X POST http://localhost:8002/rag/analyse \
  -H 'Content-Type: application/json' \
  -d '{"tenant_id":"acme","query":"What does termination clause usually allow?","top_k":5,"version_mode":"latest"}'
```


### Analyse single DOCX (async job)
```bash
curl -X POST http://localhost:8002/analyse/upload-docx \
  -F "tenant_id=acme" \
  -F "version_mode=latest" \
  -F "top_k=5" \
  -F "docx_file=@/absolute/path/to/current_redline.docx"
```

### Analyse job status
```bash
curl http://localhost:8002/analyse/jobs/<job_id>
```

### Analyse job result
```bash
curl http://localhost:8002/analyse/jobs/<job_id>/result
```

## 6) Auth/Admin service sample

### Register
```bash
curl -X POST http://localhost:8003/auth/register \
  -H 'Content-Type: application/json' \
  -d '{"tenant_id":"default","email":"admin@example.com","password":"Pass@123","first_name":"Admin","last_name":"User"}'
```

### Login
```bash
curl -X POST http://localhost:8003/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"tenant_id":"default","email":"admin@example.com","password":"Pass@123"}'
```

### Admin master data
```bash
curl "http://localhost:8003/admin/users?tenant_id=default"
curl "http://localhost:8003/admin/roles?tenant_id=default"
curl "http://localhost:8003/admin/departments?tenant_id=default"
```
