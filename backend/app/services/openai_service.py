from openai import AsyncOpenAI
from app.core.config import settings

class OpenAIServices:
    def __init__(self):
        self.client = AsyncOpenAI(
            api_key = settings.openai_api_key
        )