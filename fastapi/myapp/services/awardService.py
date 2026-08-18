from sqlalchemy.orm import Session

from models.awardModel import AwardModel
from models.bookModel import BookModel
from schemas.awardSchema import AwardCreate


def create_award(db: Session, award_data: AwardCreate):
    award = AwardModel(**award_data.model_dump())

    db.add(award)
    db.commit()
    db.refresh(award)

    return award


def get_award(db: Session, award_id: int):
    return db.get(AwardModel, award_id)


def get_awards(db: Session):
    return db.query(AwardModel).all()


def delete_award(db: Session, award: AwardModel):
    db.delete(award)
    db.commit()


# ==========================================================
# MANY-TO-MANY: BOOK <-> AWARD
# ==========================================================

def add_award_to_book(
    db: Session,
    book: BookModel,
    award: AwardModel
):
    if award not in book.awards:
        book.awards.append(award)
        db.commit()
        db.refresh(book)

    return award


def remove_award_from_book(
    db: Session,
    book: BookModel,
    award: AwardModel
):
    if award in book.awards:
        book.awards.remove(award)
        db.commit()
        db.refresh(book)

    return award


def get_book_awards(db: Session, book_id: int):
    book = db.get(BookModel, book_id)

    if not book:
        return None

    return book.awards


def get_award_books(db: Session, award_id: int):
    award = db.get(AwardModel, award_id)

    if not award:
        return None

    return award.books
