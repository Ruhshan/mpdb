from typing import Optional

from pydantic.main import BaseModel


class SearchFields(BaseModel):
    scientificName: Optional[str] = None
    familyName: Optional[str] = None
    localName: Optional[str] = None
    utilizedPart: Optional[str] = None
    ailment: Optional[str] = None
    activeCompound: Optional[str] = None
    pmid: Optional[str] = None