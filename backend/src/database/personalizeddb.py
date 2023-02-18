from src.establish_db_connection import database
from src.models.personalizedmodel import Personalized
from pymongo import ASCENDING


collection = database.Personalization

collection.create_index([("email", ASCENDING)], unique=True)

def create_personalization(personalized : Personalized):
    try:
        document = personalized.dict()
        result = collection.insert_one(document)
        return result
    except Exception:
        return "duplicate"
    