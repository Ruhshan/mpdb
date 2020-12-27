from pydantic.main import BaseModel


class ActiveCompound(BaseModel):
    pmid: str
    ac: str
