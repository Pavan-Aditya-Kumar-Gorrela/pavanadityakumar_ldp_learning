from sqlalchemy.orm import Session
from models.authorModel import AuthorModel
from schemas.authorSchema import AuthorCreate

def create_author(db:Session, author_data: AuthorCreate):
    data = author_data.model_dump()
    author = AuthorModel(**data)
    db.add(author)
    db.commit()
    db.refresh(author)
    return author

def get_author(db:Session, author_id: int):
    return db.get(AuthorModel, author_id)

def get_authors(db:Session):
    return db.query(AuthorModel).all()


def get_author_books(db: Session,author_id: int):
    author = db.get(AuthorModel,author_id)
    if not author:
        return None
    return author.books