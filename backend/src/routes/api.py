from fastapi import APIRouter
from src.endpoints import (authentication_endp, news_endp, personalization_endp)

router = APIRouter()
router.include_router(authentication_endp.router)
router.include_router(news_endp.router)
router.include_router(personalization_endp.router)








