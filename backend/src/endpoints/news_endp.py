from fastapi import HTTPException, APIRouter
from newsdataapi import NewsDataApiClient
from typing import Optional
import boto3
import json
router = APIRouter(
    prefix="/api/news",
    tags=["news"],
    responses={404: {"description": "Not found"}},
)


s3 = boto3.resource(
    service_name='s3',
    aws_access_key_id="AKIA2G3Y2NI4WR46QCWY",
    aws_secret_access_key="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"
)

# S3_BUCKET_NAME = "news-data-debuggers"
# bucket = s3.Bucket(S3_BUCKET_NAME)



@router.get("/get_category_news")
async def get_category_news(category=None):
    
    response = []
    content_object = s3.Object('news-data-debuggers', 'news/category.json')
    file_content = content_object.get()['Body'].read().decode('utf-8')
    json_content = json.loads(file_content)
    
    if category != None:
        for ele in json_content["data"]:
            if category in ele["category"]:
                response.append(ele)
        return response
    
    else:
        return json_content["data"]
    


    