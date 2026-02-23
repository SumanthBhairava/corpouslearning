import json
import logging
import re
from dataclasses import dataclass
from typing import Any, Dict, Optional

import requests

logger = logging.getLogger(__name__)


@dataclass
class LLMResponse:
    content: str
    success: bool
    error: Optional[str] = None


class LMStudioClient:
    def __init__(self, base_url: str = "http://localhost:1234", model: str = "mistral", timeout: int = 60):
        self.base_url = base_url.rstrip("/")
        self.model = model
        self.timeout = timeout

    def query(self, prompt: str, system_message: str, temperature: float = 0.1, max_tokens: int = 700) -> LLMResponse:
        body = {
            "model": self.model,
            "messages": [
                {"role": "system", "content": system_message},
                {"role": "user", "content": prompt},
            ],
            "temperature": temperature,
            "max_tokens": max_tokens,
            "stream": False,
        }
        try:
            response = requests.post(
                self.base_url + "/v1/chat/completions",
                json=body,
                timeout=self.timeout,
            )
            if response.status_code != 200:
                return LLMResponse(content="", success=False, error=response.text[:400])
            payload = response.json()
            content = payload.get("choices", [{}])[0].get("message", {}).get("content", "")
            return LLMResponse(content=content, success=True)
        except requests.RequestException as exc:
            return LLMResponse(content="", success=False, error=str(exc))

    def parse_json(self, raw: str) -> Dict[str, Any]:
        text = raw.strip()
        if "```json" in text:
            text = text.split("```json", 1)[1].split("```", 1)[0]
        elif "```" in text:
            text = text.split("```", 1)[1].split("```", 1)[0]

        text = re.sub(r"[\x00-\x1F\x7F-\x9F]", "", text).strip()

        if text.startswith("{") and text.endswith("}"):
            return json.loads(text)

        match = re.search(r"\{.*\}", text, re.DOTALL)
        if match:
            return json.loads(match.group(0))

        raise ValueError("No JSON object found in LLM response")
