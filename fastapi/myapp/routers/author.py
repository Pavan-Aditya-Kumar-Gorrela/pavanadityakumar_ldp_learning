from typing import Annotated

from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    Path,
    status
)

from sqlalchemy.orm import Session
from database.db import get_db
from schemas.authorSchema import (
    AuthorCreate,
    AuthorResponse
)
from schemas.bookSchema import BookResponse
from utils.utils import APIResponse

from services.authorService import (
    create_author,
    get_author,
    get_authors,
    get_author_books
)


router = APIRouter(
    prefix="/authors",
    tags=["Authors"]
)

@router.post("",response_model=APIResponse[AuthorResponse],status_code=status.HTTP_201_CREATED)
def create_author_route(author_data: AuthorCreate,db: Session = Depends(get_db)):
    author = create_author(db,author_data)
    return APIResponse(
        message="Author successfully created.",
        data=author
    )


@router.get("",response_model=APIResponse[list[AuthorResponse]])
def retrieve_authors(db: Session = Depends(get_db)):
    authors = get_authors(db)
    return APIResponse(
        message=f"Successfully retrieved {len(authors)} author(s).",
        data=authors
    )


@router.get("/{author_id}",response_model=APIResponse[AuthorResponse])
def retrieve_author(author_id: Annotated[int,Path(gt=0,description="Unique Author ID")],db: Session = Depends(get_db)):
    author = get_author(db,author_id)
    if not author:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Author not found"
        )
    return APIResponse(
        message=f"Successfully found author {author_id}.",
        data=author
    )


# ONE-TO-MANY
@router.get("/{author_id}/books",response_model=APIResponse[list[BookResponse]])
def retrieve_author_books(author_id: Annotated[int,Path(gt=0,description="Unique Author ID")],db: Session = Depends(get_db)):
    books = get_author_books(db,author_id)
    if books is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Author not found"
        )
    return APIResponse(
        message=f"Successfully retrieved books for author {author_id}.",
        data=books
    )