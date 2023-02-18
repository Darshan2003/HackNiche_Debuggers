from fastapi import  APIRouter, HTTPException
from src.models.personalizedmodel import Personalized

from src.database.personalizeddb import(
   create_personalization
)

router = APIRouter(
    prefix="/api/personalization",
    tags=["personalization"],
    responses={404: {"description": "Not found"}},
)


@router.post("/createuserpreference")
async def post_reseller(personalized : Personalized):
    result = create_personalization(personalized)
    if(result == "duplicate"):
        return {"SUCCESS":"FALSE"}
    else:
        return {"SUCCESS":"TRUE"}  