from datetime import datetime
from pydantic import (
    BaseModel,
    ConfigDict,
    Field,
    field_validator,
    model_validator
)
from utils.utils import CategoryType


# ==============================================================================
# PYDANTIC MODELS (Data Validation)
# ==============================================================================

class BookBase(BaseModel):
    title: str = Field(
        min_length=1,
        max_length=100
    )
    author_id: int = Field(
        gt=0
    )
    price: float = Field(
        gt=0,
        description="Book price must be greater than zero"
    )
    genres: list[str] = Field(
        min_length=2
    )
    category : CategoryType
    is_available: bool
    description: str | None = Field(
        default=None,
        max_length=500
    )
    pages: int
    isbn: str

    @field_validator("title")
    @classmethod
    def remove_extra_spaces(cls, val: str) -> str:
        val = val.strip()
        if not val:
            raise ValueError("Value Required")
        return val


class BookCreate(BookBase):
    pass

class BookPut(BookBase):
    pass

class BookUpdate(BaseModel):

    title: str | None = Field(
        default=None,
        min_length=1,
        max_length=100
    )

    author_id: int | None = Field(
        default=None,
        gt=0
    )

    price: float | None = Field(
        default=None,
        gt=0
    )

    genres: list[str]| None = Field(
        default=None,
        min_length=2
    )

    category: CategoryType = Field(
        default=CategoryType.OTHER
    )

    is_available: bool = Field(
        default= False
    )

    description: str | None = Field(
        default=None,
        max_length=500
    )


class BookResponse(BaseModel):
    id: int
    title: str
    author_id: int
    price : float
    genres: list[str]
    category: CategoryType
    is_available: bool
    description: str
    created_at: datetime
    model_config = ConfigDict(from_attributes=True)

