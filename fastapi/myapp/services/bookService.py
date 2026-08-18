from sqlalchemy.orm import Session
from sqlalchemy import asc, desc

from models.bookModel import (
    BookModel,
    CategoryType
)

from schemas.bookSchema import (
    BookCreate,
    BookUpdate,
    BookPut
)


def create_book(db: Session,book_data: BookCreate):
    data = book_data.model_dump()
    book = BookModel( **data)
    db.add(book)
    db.commit()
    db.refresh(book)
    return book


def get_book(db: Session,book_id: int):
    return db.get(BookModel,book_id)

def get_book_author(db: Session,book_id: int):
    book = db.get(BookModel,book_id)
    if not book:
        return None
    return book.author


def get_books(db: Session):
    return db.query(BookModel).all()


def get_by_author(db: Session,author_id: int):
    return (db.query(BookModel).filter(BookModel.author_id == author_id).all())



def get_by_category(db: Session,category: CategoryType):
    return (db.query(BookModel).filter(BookModel.category == category).all())


def get_by_price(db: Session,price: float):
    return (db.query(BookModel).filter(BookModel.price <= price).all())


def get_by_availability(db: Session,is_available: bool):
    return (db.query(BookModel).filter(BookModel.is_available == is_available).all())


def get_by_genre(db: Session,author_id: int,genre: str):

    return (
        db.query(BookModel)
        .filter(BookModel.author_id == author_id).filter(BookModel.genres.contains(genre)).all()
    )


def update_book_put(db: Session,book: BookModel,book_data: BookPut):
    updated_data = book_data.model_dump()
    for field, val in updated_data.items():
        setattr(book,field,val)
    db.commit()
    db.refresh(book)
    return book


def update_book(db: Session,book: BookModel,book_data: BookUpdate):
    updates = book_data.model_dump(exclude_unset=True)
    for field, val in updates.items():
        setattr(book,field,val)
    db.commit()
    db.refresh(book)
    return book


def delete_book(db: Session,book: BookModel):
    db.delete(book)
    db.commit()




def get_by_query(
    db: Session,
    search: str | None,
    author_id: int | None,
    min_price: float | None,
    max_price: float | None,
    genre: str | None,
    category: CategoryType | None,
    is_available: bool | None,
    page: int,
    limit: int,
    sort_by: str = "id",
    order: str = "asc"
):

    query = db.query(BookModel)
    if search is not None:
        search_pattern = f"%{search}%"
        query = query.filter(
            BookModel.title.contains(
                search_pattern
            )
        )

    if author_id is not None:
        query = query.filter(
            BookModel.author_id == author_id
        )

    if min_price is not None:
        query = query.filter(
            BookModel.price >= min_price
        )

    if max_price is not None:
        query = query.filter(
            BookModel.price <= max_price
        )

    if genre is not None:
        query = query.filter(
            BookModel.genres.contains(
                genre
            )
        )

    if category is not None:
        query = query.filter(
            BookModel.category == category
        )

    if is_available is not None:
        query = query.filter(
            BookModel.is_available == is_available
        )

    column_attr = getattr(
        BookModel,
        sort_by,
        BookModel.id
    )

    if order == "desc":
        query = query.order_by(
            desc(column_attr)
        )

    else:
        query = query.order_by(
            asc(column_attr)
        )

    offset = (page - 1) * limit
    query = (
        query
        .offset(offset)
        .limit(limit)
    )

    return query.all()