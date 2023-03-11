
from elasticsearch import Elasticsearch
from decouple import config

def create_index_for_mpdb(es:Elasticsearch):
    request = {
            "settings":{
               "analysis":{
                  "filter":{
                     "autocomplete_filter":{
                        "custom_token_chars":".()",
                        "min_gram":"1",
                        "type":"edge_ngram",
                        "max_gram":"20"
                     }
                  },
                  "analyzer":{
                     "autocomplete":{
                        "filter":[
                           "lowercase",
                           "autocomplete_filter"
                        ],
                        "type":"custom",
                        "tokenizer":"standard"
                     }
                  }
               }
            },
            "mappings":{
               "properties":{
                  "activeCompound":{
                     "type":"text",
                     "analyzer":"autocomplete",
                     "search_analyzer":"standard"
                  },
                  "ailment":{
                     "type":"text",
                     "analyzer":"autocomplete",
                     "search_analyzer":"standard"
                  },
                  "author":{
                     "type":"text",
                     "analyzer":"autocomplete",
                     "search_analyzer":"standard"
                  },
                  "familyName":{
                     "type":"text",
                     "analyzer":"autocomplete",
                     "search_analyzer":"standard"
                  },
                  "localName":{
                     "type":"text",
                     "analyzer":"autocomplete",
                     "search_analyzer":"standard"
                  },
                  "pid":{
                     "type":"integer"
                  },
                  "pmAcList":{
                     "properties":{
                        "ac":{
                           "type":"text",
                           "fields":{
                              "keyword":{
                                 "type":"keyword",
                                 "ignore_above":256
                              }
                           }
                        },
                        "pmid":{
                           "type":"text",
                           "fields":{
                              "keyword":{
                                 "type":"keyword",
                                 "ignore_above":256
                              }
                           }
                        }
                     }
                  },
                  "pmid":{
                     "type":"text",
                     "analyzer":"autocomplete",
                     "search_analyzer":"standard"
                  },
                  "scientificName":{
                     "type":"text",
                     "analyzer":"autocomplete",
                     "search_analyzer":"standard"
                  },
                  "utilizedPart":{
                     "type":"text",
                     "analyzer":"autocomplete",
                     "search_analyzer":"standard"
                  }
               }
            }
         }

    es.indices.create(index='mpdb', body=request)

def create_index_if_not_present():
    es = Elasticsearch([config("ELASTICSEARCH_URL")])

    if es.indices.exists('mpdb'):
        print("index already exists")
    else:
        print("Creating index")
        create_index_for_mpdb(es)


if __name__=="__main__":
    create_index_if_not_present()