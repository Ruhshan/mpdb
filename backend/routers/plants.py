from fastapi import APIRouter

from backend.schema.searchRequest import SearchRequest
from backend.schema.searchResult import SearchResult

from backend.service.elasticService import ElasticService

router = APIRouter()
service = ElasticService()


@router.post("/query", response_model=SearchResult)
async def query_plants(search_request: SearchRequest):
    return service.search(search_request)


@router.get("/ping")
async def ping_pong():
    return "pong"


@router.get("/publications")
async def get_publications():
    publications = [{'id':1, 'title':'MPD3: a useful medicinal plants database for drug designing', 'link':'https://www.tandfonline.com/doi/abs/10.1080/14786419.2016.1233409'},
    {'id':2, 'title': 'A Brief Review of Traditional plants as Sources of Pharmacological interests', 'link': 'https://www.peertechzpublications.com/articles/OJPS-4-115.pdf'},
    {'id':3, 'title': 'In vitro Membrane Stabilizing and In vivo Analgesic Activities of Boehmeria glomerulifera Miq. in Swiss-Albino Mice Model', 'link': 'https://www.banglajol.info/index.php/BPJ/article/view/29278'},
    {'id':4, 'title': 'Analgesic and anti-diarrheal activities of Aganosma dichotoma (Roth) K. Schum. in Swiss-albino mice model ', 'link': 'https://www.banglajol.info/index.php/BPJ/article/view/23507'},
    {'id':5, 'title': 'ANTIOXIDANT, CYTOTOXIC, SEDATIVE AND ANTI-DIURETIC EFFECTS OF STEM AND ROOT EXTRACTS OF BASAK, ADHATODA VASICA'.title(), 'link':'https://d1wqtxts1xzle7.cloudfront.net/56391178/5.pdf?1524451571=&response-content-disposition=inline%3B+filename%3DANTIOXIDANT_CYTOTOXIC_SEDATIVE_AND_ANTI.pdf&Expires=1608479732&Signature=WVHgeGAvjseooAgDmo7cJCt01~QizZdl8dYHAbV0BiSEYMMrJcBOqR567Cv-vNMClie0cpB3oxM60-64zVvnKfUe7SVSn28q2BarxyDleij8UAxMwTSNh8HY~XLQ~h08Y3zjJHDTSZkCPHYzLBb5HCEAFQnViuFfln9nZX5gXDrbhLhi1lZt4SzuxN4ZrlXa6u3srOwkZQOBBgyUNoOwrBD1nImBlRBqnLvw8h-VrrDKZnyt-5OzN6E3jMRt0RJ3-2gAIHub2Q2zVSXLHmEHJBfmKkCKLewE82CyLGaYOVhOTPh7RxTU6bC21PG9EnXB3OY11pp8nehQsOfcOd-SGA__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA'},
    {'id':6, 'title': 'Anti-Diabetic and Bronchodilator Activities of Pothos scandens Linn Leaves', 'link': 'http://impactfactor.org/PDF/IJPPR/7/IJPPR,Vol7,Issue6,Article27.pdf'},
    {'id':7, 'title': 'Biochemical and Computational Approach of Selected Phytocompounds from Tinospora crispa in the Management of COVID-19', 'link': 'https://www.mdpi.com/1420-3049/25/17/3936'},
    {'id':8, 'title': 'MPB 3.1: A Useful Medicinal Plants Database of Bangladesh', 'link': 'https://scienceq.org/wp-content/uploads/2020/07/JALSV8I102.pdf'},
    {'id':9, 'title': 'PHYTOCHEMICAL SCREENING, ANTIBACTERIAL, THROMBOLYTICAND ANTI-INFLAMMATORY ACTIVITIES OF STEM AND ROOT EXTRACTS OF BASAK, ADHATODA VASICA'.title(), 'link': 'https://www.researchgate.net/profile/Jalal_Uddin7/publication/316285064_PHYTOCHEMICAL_SCREENING_ANTIBACTERIAL_THROMBOLYTIC_AND_ANTI-INFLAMMATORY_ACTIVITIES_OF_STEM_AND_ROOT_EXTRACTS_OF_BASAK_ADHATODA_VASICA/links/58f9cca0aca2723d79d5c5c1/PHYTOCHEMICAL-SCREENING-ANTIBACTERIAL-THROMBOLYTIC-AND-ANTI-INFLAMMATORY-ACTIVITIES-OF-STEM-AND-ROOT-EXTRACTS-OF-BASAK-ADHATODA-VASICA.pdf'},
    {'id':10, 'title': 'CDK4 as a phytochemical based anticancer drug target', 'link': 'https://www.biorxiv.org/content/10.1101/859595v1.abstract'},
    {'id':11, 'title': 'Therapeutic effects  of ethnomedicinal  plants  used  against  various  diseases  in Bangladesh', 'link': 'http://ijnss.org/wp-content/uploads/2018/03/IJNSS-V5I1-08-pp-52-58.pdf'},
    {'id':12, 'title': 'SCREENING OF BIOACTIVITIES OF METHANOL EXTRACTIVESFROM AERIAL PARTS OFNAYANTARA(CATHARANTHUS ROSEUS)'.title(), 'link': 'https://www.researchgate.net/profile/Jalal_Uddin7/publication/316349889_SCREENING_OF_BIOACTIVITIES_OF_METHANOL_EXTRACTIVES_FROM_AERIAL_PARTS_OF_NAYANTARA_CATHARANTHUS_ROSEUS/links/58fad5dfa6fdccde9892caa7/SCREENING-OF-BIOACTIVITIES-OF-METHANOL-EXTRACTIVES-FROM-AERIAL-PARTS-OF-NAYANTARA-CATHARANTHUS-ROSEUS.pdf'},
    {'id':13, 'title': 'Medicinal plants for gastrointestinal diseases among the Kuki-Chin ethnolinguistic groups across Bangladesh, India, and Myanmar: A comparative and network analysis study', 'link': 'https://www.sciencedirect.com/science/article/abs/pii/S0378874119315454'},
    {'id':14, 'title': 'Phytochemical screening and investigation of in-vitro antioxidant and antibacterial activity of leea aequata leaf extract', 'link': 'http://dspace.bracu.ac.bd/xmlui/handle/10361/9357'},
    {'id':15, 'title': 'Phytochemicals as Potential Anticancer Drugs: Time to Ponder Nature’s Bounty', 'link': 'https://www.hindawi.com/journals/bmri/2020/8602879/'},
    {'id':16, 'title': 'The Powerful Healing Effect of Traditional Medicine for The Treatment of Certain Chronic Diseases: One of The Means To Better Defeat Covid-19 ', 'link': 'http://jbarbiomed.com/index.php/home/article/view/57'},
    {'id':17, 'title': 'Bioinformatics-assisted, integrated omics studies on medicinal plants ', 'link': 'https://academic.oup.com/bib/article-abstract/21/6/1857/5627745'},
    {'id':18, 'title': 'Biological investigations of the methanol extract of Tetrastigma leucostaphylum(Dennst.) Alston ex Mabb. (Vitaceae): In vivoand in vitroapproach', 'link': 'https://www.researchgate.net/profile/N_U_Laam/publication/342183980_Biological_investigations_of_the_methanol_extract_of_Tetrastigma_leucostaphylum_Dennst_Alston_ex_Mabb_Vitaceae_In_vivo_and_in_vitro_approach/links/5ee7f0c9a6fdcc73be7d3910/Biological-investigations-of-the-methanol-extract-of-Tetrastigma-leucostaphylum-Dennst-Alston-ex-Mabb-Vitaceae-In-vivo-and-in-vitro-approach.pdf'},
    {'id':19, 'title': 'Analgesic, Antidiarrheal and Antidepressant Activities of Anethum sowa Linn. in Swiss-Albino Mice Model ', 'link': 'https://www.banglajol.info/index.php/BPJ/article/view/37899'}
                    ]
    return publications