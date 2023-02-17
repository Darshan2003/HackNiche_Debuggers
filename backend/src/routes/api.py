from fastapi import APIRouter
from src.endpoints import (authentication_endp)

router = APIRouter()
router.include_router(authentication_endp.router)






