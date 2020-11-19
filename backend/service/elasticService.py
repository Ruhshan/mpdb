from elasticsearch import Elasticsearch


class ElasticService:
    def __init__(self):
        self.es = Elasticsearch()
        self.index = "mpdb"

    def search(self):
        return self.es.search(index=self.index, body={"query":{"match_all":{}}})

