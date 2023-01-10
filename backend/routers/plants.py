from fastapi import APIRouter

from schema.searchRequest import SearchRequest
from schema.searchResult import SearchResult
from service.elasticService import ElasticService

router = APIRouter()
service = ElasticService()
import time

@router.post("/query", response_model=SearchResult)
async def query_plants(search_request: SearchRequest):
    return service.search(search_request)


