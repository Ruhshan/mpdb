from pydantic import BaseModel


class Plant(BaseModel):
    scientificName: str
    familyName: str
    localName: str
    utilizedPart: str
    ailment: str
    activeCompound: str
    pmid: str