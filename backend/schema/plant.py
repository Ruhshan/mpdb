from pydantic import BaseModel


class Plant(BaseModel):
    id: int
    scientificName: str
    author: str
    familyName: str
    localName: str
    utilizedPart: str
    ailment: str
    activeCompound: str
    pmid: str