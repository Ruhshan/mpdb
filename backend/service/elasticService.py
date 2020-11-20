from elasticsearch import Elasticsearch
from fastapi import HTTPException
from backend.schema.searchResult import SearchResult


class ElasticService:
    def __init__(self):
        self.es = Elasticsearch()
        self.index = "mpdb"

    def search(self) -> SearchResult:
        res = self.es.search(index=self.index, body={"query":{"match_all":{}}})
        return self.__format_result(res)

    def __format_result(self, res) -> SearchResult:
        if res["timed_out"]:
            raise HTTPException(status_code=408, detail="Request timed out")
        hits = res['hits']['total']['value']
        plants = [hit["_source"] for hit in res['hits']['hits']]
        return SearchResult(**{"hits": hits, "plants": plants})



