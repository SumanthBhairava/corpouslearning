import hashlib
import json
import logging
import os
from dataclasses import asdict, dataclass
from datetime import datetime
from typing import Any, Dict, List, Optional, Tuple

import numpy as np

logger = logging.getLogger(__name__)

try:
    import faiss  # type: ignore
    HAS_FAISS = True
except Exception:
    HAS_FAISS = False

try:
    from sentence_transformers import SentenceTransformer  # type: ignore
    HAS_SENTENCE_TRANSFORMER = True
except Exception:
    HAS_SENTENCE_TRANSFORMER = False


@dataclass
class PrecedentChunk:
    text: str
    tenant_id: str
    upload_id: str
    corpus_version: str
    document_id: str
    document_version: int
    customer: str
    filename: str
    source_path: str
    contract_type: str
    chunk_type: str
    clause_label: str = ""
    change_type: str = ""
    sequence_order: int = 0
    extraction_confidence: float = 1.0
    doc_hash: str = ""
    chunk_hash: str = ""
    is_active: bool = True
    deactivated_at: str = ""
    created_at: str = ""


class HashingEmbedder:
    """Fallback embedder when sentence-transformers is unavailable."""

    def __init__(self, dim: int = 384):
        self.dim = dim

    def encode(self, texts: List[str], show_progress_bar: bool = False) -> np.ndarray:
        vectors = np.zeros((len(texts), self.dim), dtype="float32")
        for i, text in enumerate(texts):
            for token in text.lower().split():
                idx = int(hashlib.md5(token.encode("utf-8")).hexdigest(), 16) % self.dim
                vectors[i, idx] += 1.0
        return vectors


class VectorStore:
    EMBEDDING_DIM = 384
    MODEL_NAME = "all-MiniLM-L6-v2"

    def __init__(self, store_path: str):
        self.store_path = store_path
        self.metadata_path = os.path.join(self.store_path, "precedent_metadata.json")
        self.faiss_path = os.path.join(self.store_path, "precedent_vector.index")
        self.numpy_path = os.path.join(self.store_path, "precedent_vectors.npy")

        self.metadata = []  # type: List[Dict[str, Any]]
        self.chunk_hashes = set()  # type: set
        self.index = None
        self.vectors = np.zeros((0, self.EMBEDDING_DIM), dtype="float32")

        if HAS_SENTENCE_TRANSFORMER:
            self.embedding_model = SentenceTransformer(self.MODEL_NAME)
            logger.info("Loaded embedding model: %s", self.MODEL_NAME)
        else:
            self.embedding_model = HashingEmbedder(self.EMBEDDING_DIM)
            logger.warning("sentence-transformers unavailable, using HashingEmbedder fallback")

    def _norm(self, arr: np.ndarray) -> np.ndarray:
        norms = np.linalg.norm(arr, axis=1, keepdims=True)
        norms[norms == 0] = 1.0
        return arr / norms

    def load_or_create(self) -> bool:
        os.makedirs(self.store_path, exist_ok=True)

        if os.path.exists(self.metadata_path):
            with open(self.metadata_path, "r", encoding="utf-8") as f:
                self.metadata = json.load(f)
            self.chunk_hashes = set(
                item.get("chunk_hash", "") for item in self.metadata if item.get("chunk_hash")
            )

        if HAS_FAISS and os.path.exists(self.faiss_path):
            self.index = faiss.read_index(self.faiss_path)
            return True

        if os.path.exists(self.numpy_path):
            self.vectors = np.load(self.numpy_path)
            return True

        if HAS_FAISS:
            self.index = faiss.IndexFlatIP(self.EMBEDDING_DIM)
        else:
            self.vectors = np.zeros((0, self.EMBEDDING_DIM), dtype="float32")
        return False

    def save(self):
        os.makedirs(self.store_path, exist_ok=True)
        tmp_path = self.metadata_path + ".tmp"
        with open(tmp_path, "w", encoding="utf-8") as f:
            json.dump(self.metadata, f, indent=2, ensure_ascii=False)
        os.replace(tmp_path, self.metadata_path)

        if HAS_FAISS and self.index is not None:
            faiss.write_index(self.index, self.faiss_path)
        else:
            np.save(self.numpy_path, self.vectors)

    def add_chunks(self, chunks: List[PrecedentChunk]) -> int:
        if not chunks:
            return 0

        new_chunks = []  # type: List[PrecedentChunk]
        for chunk in chunks:
            if chunk.chunk_hash and chunk.chunk_hash in self.chunk_hashes:
                continue
            if not chunk.created_at:
                chunk.created_at = datetime.utcnow().isoformat()
            if chunk.chunk_hash:
                self.chunk_hashes.add(chunk.chunk_hash)
            new_chunks.append(chunk)

        if not new_chunks:
            return 0

        texts = [c.text for c in new_chunks]
        vectors = self.embedding_model.encode(texts, show_progress_bar=False)
        vectors = np.array(vectors).astype("float32")
        vectors = self._norm(vectors)

        if HAS_FAISS and self.index is not None:
            self.index.add(vectors)
        else:
            self.vectors = np.vstack([self.vectors, vectors])

        for chunk in new_chunks:
            self.metadata.append(asdict(chunk))

        return len(new_chunks)

    def deactivate_document(self, tenant_id: str, document_id: str) -> int:
        deactivated = 0
        timestamp = datetime.utcnow().isoformat()
        for item in self.metadata:
            if item.get("tenant_id") != tenant_id:
                continue
            if item.get("document_id") != document_id:
                continue
            if not item.get("is_active", True):
                continue
            item["is_active"] = False
            item["deactivated_at"] = timestamp
            deactivated += 1
        return deactivated

    def search(
        self,
        query_text: str,
        top_k: int = 5,
        tenant_id: Optional[str] = None,
        contract_type: Optional[str] = None,
        active_only: bool = True,
    ) -> List[Dict[str, Any]]:
        if not self.metadata:
            return []

        q = self.embedding_model.encode([query_text], show_progress_bar=False)
        q_vec = self._norm(np.array(q).astype("float32"))[0]

        scores = []  # type: List[Tuple[float, int]]
        candidate_multiplier = 20 if active_only else 5
        if HAS_FAISS and self.index is not None and self.index.ntotal > 0:
            k = min(max(top_k * candidate_multiplier, top_k), self.index.ntotal)
            vals, idxs = self.index.search(np.array([q_vec], dtype="float32"), k)
            for score, idx in zip(vals[0], idxs[0]):
                if idx >= 0:
                    scores.append((float(score), int(idx)))
        else:
            if self.vectors.size == 0:
                return []
            sims = np.dot(self.vectors, q_vec)
            ordered = np.argsort(-sims)[: max(top_k * candidate_multiplier, top_k)]
            for idx in ordered:
                scores.append((float(sims[idx]), int(idx)))

        results = []
        for score, idx in scores:
            if idx < 0 or idx >= len(self.metadata):
                continue
            item = self.metadata[idx]
            if tenant_id and item.get("tenant_id") != tenant_id:
                continue
            if contract_type and item.get("contract_type") != contract_type:
                continue
            if active_only and not item.get("is_active", True):
                continue
            out = dict(item)
            out["score"] = score
            results.append(out)
            if len(results) >= top_k:
                break
        return results

    def get_stats(self) -> Dict[str, Any]:
        customers = sorted(list(set(item.get("customer", "") for item in self.metadata)))
        contract_types = sorted(list(set(item.get("contract_type", "") for item in self.metadata)))
        active_vectors = len([item for item in self.metadata if item.get("is_active", True)])

        if HAS_FAISS and self.index is not None:
            total_vectors = int(self.index.ntotal)
        else:
            total_vectors = int(self.vectors.shape[0])

        return {
            "total_vectors": total_vectors,
            "total_metadata": len(self.metadata),
            "active_metadata": active_vectors,
            "customers": customers,
            "contract_types": contract_types,
            "uses_faiss": HAS_FAISS,
            "uses_sentence_transformer": HAS_SENTENCE_TRANSFORMER,
        }
