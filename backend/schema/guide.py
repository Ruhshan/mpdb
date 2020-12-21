from pydantic import BaseModel


class Guide(BaseModel):
    id: int
    text: str
    imageUrl: str
    imageCaption: str
