from elasticsearch import Elasticsearch
from fastapi import HTTPException

from backend.schema.searchRequest import SearchRequest
from backend.schema.searchResult import SearchResult

from decouple import config

highlight_prop = {"pre_tags" : ["<span class='hl'>"], "post_tags" : ["</span>"],
                  "fragment_size":400, "type":"plain"}

class ElasticService:
    def __init__(self):
        self.es = Elasticsearch([config("ELASTICSEARCH_URL")])
        self.index = "mpdb"

    def search(self, search_request: SearchRequest) -> SearchResult:
        res = self.es.search(index=self.index, body=self.__make_query(search_request))
        return self.__format_result(res)

    def __make_query(self, search_request: SearchRequest) -> dict:
        start_from = search_request.itemsPerPage * (search_request.activePage - 1)
        query = {"match_all": {}}

        if search_request.globalSearch:
            # query = {"multi_match": {
            #         "query": search_request.globalSearch,
            #         "fields": ["scientificName", "author","familyName", "localName", "utilizedPart",
            #                    "ailment","activeCompound", "pmid"]
            #     }}
            query = {"query_string":{
                "query":search_request.globalSearch
            }}

        return {
                "from": start_from,
                "size": search_request.itemsPerPage,
                "sort": ["pid"],
                "query": query,
                "highlight": {
                    "fields": {
                        "scientificName": highlight_prop,
                        "author": highlight_prop,
                        "familyName": highlight_prop,
                        "localName": highlight_prop,
                        "utilizedPart": highlight_prop,
                        "ailment": highlight_prop,
                        "activeCompound": highlight_prop,
                        "pmid": highlight_prop
                        }
                    }
                }

    def __format_result(self, res) -> SearchResult:
        if res["timed_out"]:
            raise HTTPException(status_code=408, detail="Request timed out")
        number_of_hits = res['hits']['total']['value']
        plants = []
        for hit in res["hits"]["hits"]:
            plant = hit["_source"]
            hightlight = hit.get("highlight")
            plant["id"] = hit["_id"]
            if hightlight:
                self.__merge_highlight(plant, hightlight)
            plants.append(plant)
        return SearchResult(**{"hits": number_of_hits, "plants": plants})

    def __merge_highlight(self, plant, highlight):
        for k in highlight.keys():
            plant[k] = highlight[k][0]



