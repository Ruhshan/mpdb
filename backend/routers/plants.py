from fastapi import APIRouter

from backend.schema.searchRequest import SearchRequest
from backend.schema.searchResult import SearchResult

from backend.service.elasticService import ElasticService

router = APIRouter()
service = ElasticService()


@router.post("/query", response_model=SearchResult)
async def query_plants(searchRequest: SearchRequest):
    print(searchRequest)
    return service.search()

