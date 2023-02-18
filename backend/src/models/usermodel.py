from pydantic import BaseModel
from fastapi import Form

class User(BaseModel):
    username : str = Form(...)
    lastname : str = Form(...)
    password : str = Form(...)
    email : str = Form(...)
