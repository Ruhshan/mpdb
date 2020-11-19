from fastapi import APIRouter

from backend.service.elasticService import ElasticService

router = APIRouter()
service = ElasticService()

@router.get("/query")
async def query_plants():
    return service.search()

