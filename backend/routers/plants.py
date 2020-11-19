from fastapi import APIRouter

router = APIRouter()

@router.get("/query")
async def query_plants():
    return {"plant":"cool"}