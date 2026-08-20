from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from database.db import Base
from models.book_awardModel import book_award_table
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from models.bookModel import BookModel

class AwardModel(Base):
    __tablename__ = "awards"

    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True
    )

    name: Mapped[str] = mapped_column(
        String(150),
        nullable=False,
        unique=True
    )

    year: Mapped[int | None] = mapped_column(
        nullable=True
    )

    books: Mapped[list["BookModel"]] = relationship(
        "BookModel",
        secondary=book_award_table,
        back_populates="awards"
    )
