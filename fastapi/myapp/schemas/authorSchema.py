from pydantic import BaseModel, Field, ConfigDict

class AuthorCreate(BaseModel):
    name:str = Field(min_length=2, max_length=100)

class AuthorResponse(BaseModel):
    id: int
    name: str

    model_config = ConfigDict(from_attributes=True)