import fastapi
import fastapi.security as security
from pymongo import ASCENDING
from src.establish_db_connection import database
import passlib.hash as _hash
import jwt
from src.models.usermodel import User
from fastapi import HTTPException

JWT_SECRET = "myjwtsecret" #place in env file

oauth2schema = security.OAuth2PasswordBearer(tokenUrl="/api/authentication/token")

collection = database.Users

collection.create_index([("username", ASCENDING)], unique=True)

def create_user(user):
    try:
        user["password"] = _hash.bcrypt.hash(user["password"])
        document = user
        result = collection.insert_one(document)
        return result
    except Exception:
        return "duplicate"


def authenticate_user(username: str, password: str):
    document = collection.find_one({"username":username},{"_id":0})
    if document == None:
        return "invalid credentials"

    result = _hash.bcrypt.verify(password, document["password"])

    del document["password"]
    if result:
        return document

    return "invalid credentials"


async def create_token(user):
    try:
        token = jwt.encode(user, JWT_SECRET)
        return dict(access_token=token, token_type="bearer")
    except Exception:
        return "invalid credentials"



async def get_current_user(token: str = fastapi.Depends(oauth2schema)):
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
        print(payload)
        user = database.query(User).get(payload["id"])
    except:
        raise HTTPException(
            status_code=401, detail="Invalid Email or Password"
        )


    




    
