from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.routes.api import router as api_router

app = FastAPI()


origins = ['frontend code']

app.add_middleware(
    CORSMiddleware,
    
    allow_origins = origins,
    allow_credentials = True,
    allow_methods=["*"],
    allow_headers=["*"],

)

app.include_router(api_router)
