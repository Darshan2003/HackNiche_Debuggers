from pydantic import BaseModel
from fastapi import Form

class User(BaseModel):
    username : str = Form(...)
    password : str = Form(...)
    token : str = Form(...)