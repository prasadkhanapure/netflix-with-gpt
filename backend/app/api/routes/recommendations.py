from fastapi import APIRouter

from services.recommendation_service import RecommendationService
from schemas.recommendations import RecommendationsRequest


router = APIRouter()

recommended_service = RecommendationService()
@router.post("/recommendations")
async def get_recommendations(request: RecommendationsRequest):
    
    return await recommended_service.get_recommendations(request.query)