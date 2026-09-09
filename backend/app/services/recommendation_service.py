from app.services.openai_service import OpenAIServices

class RecommendationServices:
    def __init__(self):
        self.openai_services = OpenAIServices()

        async def get_recommendations(self, query: str):
            return {
                "query": query,
                "movies": []
            }