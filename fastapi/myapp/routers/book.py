from typing import Annotated, Literal
from fastapi import (
    APIRouter,
    Query,
    Depends,
    HTTPException,
    status,
    Path
)
from sqlalchemy.orm import Session
from database.db import get_db
from schemas.authorSchema import AuthorResponse
from schemas.awardSchema import AwardResponse
from schemas.bookSchema import (
    BookCreate,
    BookUpdate,
    BookResponse,
    CategoryType,
    BookPut
)
from utils.utils import APIResponse
from services.bookService import (
    create_book,
    get_book,
    get_books,
    get_by_author,
    get_by_category,
    get_by_price,
    get_by_availability,
    get_by_genre,
    get_book_author,
    update_book_put,
    update_book,
    delete_book,
    get_by_query
)
from services.awardService import (
    add_award_to_book,
    remove_award_from_book,
    get_book_awards,
    get_award
)



router = APIRouter(prefix="/books",tags=["Books"])


# -------------------------
# CREATE
# -------------------------

@router.post("",response_model=APIResponse[BookResponse],status_code=status.HTTP_201_CREATED)
def create(book_data: BookCreate,db: Session = Depends(get_db)):
    new_book = create_book(db,book_data)

    return APIResponse(
        message="Book successfully created and added to the library!",
        data=new_book
    )


# -------------------------
# READ ALL
# -------------------------

@router.get("",response_model=APIResponse[list[BookResponse]])
def retrieve(db: Session = Depends(get_db)):
    books = get_books(db)
    return APIResponse(
        message=f"Successfully retrieved {len(books)} book(s).",
        data=books
    )


# -------------------------
# READ ONE
# -------------------------

@router.get("/{book_id}",response_model=APIResponse[BookResponse])
def retrieve_by_id(book_id: Annotated[int,Path(gt=0,description="Unique Book ID")],db: Session = Depends(get_db)):
    book = get_book(db,book_id)

    if not book:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Book not found"
        )

    return APIResponse(
        message=f"Successfully found book {book_id}.",
        data=book
    )


# -------------------------
# BOOK → AUTHOR
# MANY-TO-ONE
# -------------------------

@router.get("/{book_id}/author",response_model=APIResponse[AuthorResponse])
def retrieve_book_author(book_id: Annotated[int,Path(gt=0)],db: Session = Depends(get_db)):
    author = get_book_author(db,book_id)

    if author is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Book not found"
        )

    return APIResponse(
        message=f"Successfully retrieved author for book {book_id}.",
        data=author
    )


# -------------------------
# FILTER BY AUTHOR
# -------------------------

@router.get("/author/{author_id}",response_model=APIResponse[list[BookResponse]])
def retrieve_by_author(author_id: Annotated[int,Path(gt=0,description="Author ID")],db: Session = Depends(get_db)):
    books = get_by_author(db,author_id)

    return APIResponse(
        message=f"Successfully retrieved {len(books)} book(s).",
        data=books
    )


# -------------------------
# FILTER BY AVAILABILITY
# -------------------------

@router.get("/available/{is_available}",response_model=APIResponse[list[BookResponse]])
def retrieve_by_availability(is_available: Annotated[bool,Path()],db: Session = Depends(get_db)):
    books = get_by_availability(db,is_available)

    return APIResponse(
        message=f"Successfully retrieved {len(books)} book(s).",
        data=books
    )


# -------------------------
# FILTER BY CATEGORY
# -------------------------

@router.get("/category/{category}",response_model=APIResponse[list[BookResponse]])
def retrieve_by_category(category: Annotated[CategoryType,Path()],db: Session = Depends(get_db)):
    books = get_by_category(db,category)

    return APIResponse(
        message=f"Successfully retrieved {len(books)} book(s).",
        data=books
    )


# -------------------------
# FILTER BY PRICE
# -------------------------

@router.get("/price/{price}",response_model=APIResponse[list[BookResponse]])
def retrieve_by_price(price: Annotated[float,Path(gt=0)],db: Session = Depends(get_db)):
    books = get_by_price(db,price)

    return APIResponse(
        message=f"Successfully retrieved {len(books)} book(s).",
        data=books
    )


# -------------------------
# FILTER BY AUTHOR + GENRE
# -------------------------

@router.get("/author/{author_id}/genre/{genre}",response_model=APIResponse[list[BookResponse]])
def retrieve_by_genre(author_id: Annotated[int,Path(gt=0)],genre: Annotated[str,Path(min_length=2)],db: Session = Depends(get_db)):
    books = get_by_genre(db,author_id,genre)

    return APIResponse(
        message="Successfully retrieved matching books.",
        data=books
    )


# -------------------------
# PUT
# -------------------------

@router.put("/{book_id}",response_model=APIResponse[BookResponse])
def update_put(book_id: int,book_data: BookPut,db: Session = Depends(get_db)):
    book = get_book(db,book_id)

    if not book:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Book not found"
        )

    updated_book = update_book_put(db,book,book_data)

    return APIResponse(
        message=f"Book {book_id} successfully replaced.",
        data=updated_book
    )


# -------------------------
# PATCH
# -------------------------

@router.patch("/{book_id}",response_model=APIResponse[BookResponse])
def update(book_id: int,book_data: BookUpdate,db: Session = Depends(get_db)):
    book = get_book(db, book_id)

    if not book:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Book not found"
        )
    updated_book = update_book(db, book,book_data)

    return APIResponse(
        message=f"Book {book_id} successfully updated.",
        data=updated_book
    )


# -------------------------
# DELETE
# -------------------------

@router.delete("/{book_id}")
def delete(book_id: int,db: Session = Depends(get_db)):
    book = get_book(db,book_id)

    if not book:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND
        )

    delete_book(db,book)
    return APIResponse(
        message=f"Book {book_id} successfully deleted.",
        data=None
    )


# -------------------------
# QUERY PARAMETERS
# -------------------------

@router.get("/search/filter",response_model=APIResponse[list[BookResponse]])
def search_query(
    search: Annotated[str | None,Query(min_length=2,max_length=100)] = None,
    author_id: Annotated[int | None,Query(gt=0)] = None,
    min_price: Annotated[float | None,Query(gt=0)] = None,
    max_price: Annotated[float | None,Query(gt=0)] = None,
    genre: Annotated[str | None,Query(min_length=2)] = None,
    category: Annotated[CategoryType | None,Query()] = None,
    is_available: Annotated[bool | None,Query()] = None,
    sort_by: Annotated[Literal["id", "price", "title"],Query()] = "id",
    order: Annotated[Literal["asc", "desc"],Query()] = "asc",
    page: Annotated[int,Query(ge=1)] = 1,
    limit: Annotated[int,Query(ge=1, le=100)] = 10,
    db: Session = Depends(get_db)):

    books = get_by_query(db,search,author_id,min_price,max_price,genre,category,is_available,page,limit,sort_by,order)

    return APIResponse(
        message=f"Successfully fetched {len(books)} book(s).",
        data=books
    )



# ==========================================================
# MANY-TO-MANY: BOOK <-> AWARD
# ==========================================================

@router.post(
    "/{book_id}/awards/{award_id}",
    response_model=APIResponse[AwardResponse]
)
def add_book_award(
    book_id: Annotated[int, Path(gt=0)],
    award_id: Annotated[int, Path(gt=0)],
    db: Session = Depends(get_db)
):
    book = get_book(db, book_id)

    if not book:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Book not found"
        )

    award = get_award(db, award_id)

    if not award:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Award not found"
        )

    add_award_to_book(db, book, award)

    return APIResponse(
        message=f"Award {award_id} successfully added to book {book_id}.",
        data=award
    )


@router.get(
    "/{book_id}/awards",
    response_model=APIResponse[list[AwardResponse]]
)
def retrieve_book_awards(
    book_id: Annotated[int, Path(gt=0)],
    db: Session = Depends(get_db)
):
    awards = get_book_awards(db, book_id)

    if awards is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Book not found"
        )

    return APIResponse(
        message=f"Successfully retrieved awards for book {book_id}.",
        data=awards
    )


@router.delete(
    "/{book_id}/awards/{award_id}",
    response_model=APIResponse[AwardResponse]
)
def remove_book_award(
    book_id: Annotated[int, Path(gt=0)],
    award_id: Annotated[int, Path(gt=0)],
    db: Session = Depends(get_db)
):
    book = get_book(db, book_id)

    if not book:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Book not found"
        )

    award = get_award(db, award_id)

    if not award:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Award not found"
        )

    if award not in book.awards:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Award is not associated with this book"
        )

    remove_award_from_book(db, book, award)

    return APIResponse(
        message=f"Award {award_id} removed from book {book_id}.",
        data=award
    )
