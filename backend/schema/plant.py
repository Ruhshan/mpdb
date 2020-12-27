from pydantic import BaseModel
from typing import List

from backend.schema.activeCompound import ActiveCompound


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
    pmAcList: List[ActiveCompound]