from pydantic import BaseModel
from fastapi import Form


class Personalized(BaseModel):
    email: str = Form(...)
    preference : list = Form(default=[])
