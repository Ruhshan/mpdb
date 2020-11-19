from fastapi import APIRouter
from backend.schema.searchResult import SearchResult

from backend.service.elasticService import ElasticService

router = APIRouter()
service = ElasticService()


@router.get("/query", response_model=SearchResult)
async def query_plants():
    return service.search()

