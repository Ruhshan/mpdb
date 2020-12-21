from fastapi import FastAPI
import uvicorn
from starlette.middleware.cors import CORSMiddleware
from backend.core.config import settings

from backend.routers import plants as plant_router
from backend.routers import  misc as misc_router

app = FastAPI()

app = FastAPI(
    title=settings.PROJECT_NAME)

# Set all CORS enabled origins
if settings.BACKEND_CORS_ORIGINS:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

app.include_router(plant_router.router, prefix=settings.API_V1_STR+"/plant")
app.include_router(misc_router.router, prefix=settings.API_V1_STR+"/misc")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8090)
