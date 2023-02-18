import fastapi
import fastapi.security as _security
from fastapi import HTTPException, APIRouter
from src.models.usermodel import User
from src.database.userdb import (
    create_user,
    authenticate_user,
    create_token,
    get_current_user
    )


router = APIRouter(
    prefix="/api/authentication",
    tags=["authentication"],
    responses={404: {"description": "Not found"}},
)

@router.post("/register")
async def post_user(user:User):
    result = create_user(user.dict())
    if(result == "duplicate"):
        return {"SUCCESS":"FALSE"}
    else:
        return {"SUCCESS":"TRUE"} 
        
         

@router.get("/authenticate")
def auth_user(email:str, password:str):
    if(authenticate_user(email, password)):
        return {"SUCCESS":"TRUE"}
    return {"SUCCESS":"TRUE"}

@router.post("/login")
async def generate_token(form_data: _security.OAuth2PasswordRequestForm = fastapi.Depends()):
    user = authenticate_user(form_data.username, form_data.password)

    if not user:
        raise fastapi.HTTPException(status_code=401, detail="Invalid Credentials")

    return await create_token(user)


@router.get("/users/me", response_model= User)
def get_user(user: User = fastapi.Depends(get_current_user)):
    return user
