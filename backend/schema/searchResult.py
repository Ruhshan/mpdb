from pydantic import BaseModel
from typing import List
from .plant import Plant

class SearchResult(BaseModel):
    hits: int
    plants: List[Plant]
