from pydantic import BaseModel, Field, ConfigDict


class AwardCreate(BaseModel):
    name: str = Field(
        min_length=2,
        max_length=150
    )
    year: int | None = Field(
        default=None,
        ge=1
    )


class AwardResponse(BaseModel):
    id: int
    name: str
    year: int | None

    model_config = ConfigDict(
        from_attributes=True
    )


class BookAwardResponse(BaseModel):
    id: int
    title: str
    author_id: int

    model_config = ConfigDict(
        from_attributes=True
    )
