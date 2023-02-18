from pydantic import BaseModel
from fastapi import Form

class News(BaseModel):
    title : str = Form(...)
    link : str = Form(...)
    description : str = Form(...)
    image_url : str = Form(...)
    category : str = Form(...)
    country : str = Form(...)
    language : str = Form(...)
    