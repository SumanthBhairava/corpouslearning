import json
import logging
import re
import time
from dataclasses import dataclass
from typing import Any, Dict, List, Optional

import requests


@dataclass
class LLMResponse:
    content: str
    success: bool
    error: Optional[str] = None
    tokens_used: int = 0
    latency_ms: int = 0


class LMStudioClient:
    def __init__(
        self,
        base_url: str = "http://localhost:1234",
        model: str = "mistral",
        request_timeout: int = 120,
        max_retries: int = 2,
    ):
        self.base_url = base_url.rstrip("/")
        self.api_endpoint = self.base_url + "/v1/chat/completions"
        self.model = model
        self.request_timeout = request_timeout
        self.max_retries = max_retries
        self.logger = logging.getLogger(__name__)

    def _sanitize(self, text: str) -> str:
        if not text:
            return ""
        return "".join(c if c.isprintable() or c in "\n\t" else " " for c in text)

    def _strip_markdown_fence(self, text: str) -> str:
        content = text.strip()
        if "```json" in content:
            return content.split("```json", 1)[1].split("```", 1)[0].strip()
        if "```" in content:
            return content.split("```", 1)[1].split("```", 1)[0].strip()
        return content

    def _extract_json_obj(self, text: str) -> Dict[str, Any]:
        cleaned = self._sanitize(self._strip_markdown_fence(text))
        cleaned = re.sub(r"[\x00-\x1F\x7F-\x9F]", "", cleaned)
        if "{" not in cleaned:
            raise ValueError("No JSON object found in LLM output")
        start = cleaned.find("{")
        end = cleaned.rfind("}")
        if end <= start:
            raise ValueError("Malformed JSON object in LLM output")
        return json.loads(cleaned[start : end + 1])

    def query(
        self,
        prompt: str,
        system_message: str,
        temperature: float = 0.1,
        max_tokens: int = 500,
        model: Optional[str] = None,
    ) -> LLMResponse:
        payload = {
            "model": model or self.model,
            "messages": [
                {"role": "system", "content": system_message},
                {"role": "user", "content": self._sanitize(prompt)},
            ],
            "temperature": temperature,
            "max_tokens": max_tokens,
            "stream": False,
        }

        last_error = None
        for attempt in range(self.max_retries + 1):
            started = time.time()
            try:
                response = requests.post(
                    self.api_endpoint,
                    json=payload,
                    timeout=self.request_timeout,
                )
                if response.status_code != 200:
                    raise RuntimeError("LM Studio API Error: %s" % response.text[:500])

                result = response.json()
                content = result["choices"][0]["message"]["content"]
                latency_ms = int((time.time() - started) * 1000)
                return LLMResponse(
                    content=content,
                    success=True,
                    tokens_used=result.get("usage", {}).get("total_tokens", 0),
                    latency_ms=latency_ms,
                )
            except Exception as exc:
                last_error = str(exc)
                self.logger.warning(
                    "LM query failed attempt %s/%s: %s",
                    attempt + 1,
                    self.max_retries + 1,
                    last_error,
                )
                time.sleep(0.5 * (attempt + 1))

        return LLMResponse(content="", success=False, error=last_error or "unknown error")

    def classify_contract_type(self, content: str, filename: str) -> str:
        prompt = (
            "Identify the legal agreement type. Return only the agreement type string.\n\n"
            "FILENAME: %s\nDOCUMENT:\n%s"
            % (filename, content[:1800])
        )
        response = self.query(
            prompt=prompt,
            system_message="You classify legal agreement types. Return only text.",
            max_tokens=60,
            temperature=0.0,
        )
        if response.success and response.content.strip():
            return response.content.strip().strip('"').strip("'")

        # Deterministic fallback when LLM unavailable.
        lowered = content.lower()
        heuristics = [
            ("non-disclosure", "Non-Disclosure Agreement"),
            ("confidential", "Non-Disclosure Agreement"),
            ("master service", "Master Service Agreement"),
            ("service level", "Service Agreement"),
            ("statement of work", "Statement of Work"),
            ("purchase order", "Purchase Order"),
            ("lease", "Lease Agreement"),
            ("employment", "Employment Agreement"),
        ]
        for token, label in heuristics:
            if token in lowered:
                return label
        return "Unknown"

    def analyze_document_structure(
        self,
        content: str,
        tracked_changes: Optional[List[Dict[str, Any]]] = None,
        comments: Optional[List[str]] = None,
    ) -> Dict[str, Any]:
        prompt = (
            "Analyze this legal document and return strict JSON with keys: "
            "contract_type, top_clauses, negotiation_context.\n\n"
            "CONTENT:\n%s\n\nCHANGES:\n%s\n\nCOMMENTS:\n%s"
            % (
                content[:2200],
                json.dumps((tracked_changes or [])[:10]),
                json.dumps((comments or [])[:10]),
            )
        )
        response = self.query(
            prompt=prompt,
            system_message="You are a legal analyst. Return JSON only.",
            max_tokens=800,
            temperature=0.1,
        )
        if not response.success:
            raise RuntimeError("LLM structure analysis failed: %s" % response.error)
        return self._extract_json_obj(response.content)
