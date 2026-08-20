from pydantic import (
    BaseModel,
    Field,
    ConfigDict
)


class AuthorProfileCreate(BaseModel):
    bio: str | None = Field(
        default=None,
        max_length=500
    )
    country: str = Field(
        min_length=2,
        max_length=100
    )
    website: str | None = Field(
        default=None,
        max_length=200
    )
    author_id: int = Field(
        gt=0
    )


class AuthorProfileResponse(BaseModel):
    id: int
    bio: str | None
    country: str
    website: str | None
    author_id: int
    model_config = ConfigDict(
        from_attributes=True
    )