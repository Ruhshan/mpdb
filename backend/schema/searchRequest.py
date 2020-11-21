from pydantic.main import BaseModel

from backend.schema.searchFields import SearchFields
from typing import Optional


class SearchRequest(BaseModel):
    globalSearch: Optional[str] = None
    itemsPerPage: int
    activePage: int
    # searchFields: SearchFields
