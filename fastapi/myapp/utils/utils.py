from enum import Enum
from pydantic import BaseModel
from typing import Optional, Generic, TypeVar

class CategoryType(str,Enum):
    BIOGRAPHY = "biography"
    NOVEL = "novel"
    OTHER = "other"


DataType = TypeVar("DataType")
class APIResponse(BaseModel, Generic[DataType]):
    status: str = "Success"
    message: str
    data: Optional[DataType] = None