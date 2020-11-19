from elasticsearch import Elasticsearch


es = Elasticsearch()

def retrieve():
    res = es.search(index="mpdb", body={"query":{"match_all":{}}})
    return res


if __name__=="__main__":
    print(retrieve())
