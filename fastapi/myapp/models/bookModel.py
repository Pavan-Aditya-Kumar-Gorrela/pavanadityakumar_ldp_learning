from datetime import datetime
from sqlalchemy import JSON, String, Float, Text, DateTime, Enum, Boolean, ForeignKey, Integer
from sqlalchemy.orm import Mapped , mapped_column, relationship
from database.db import Base
from models.awardModel import AwardModel
from models.book_awardModel import book_award_table
from utils.utils import CategoryType
from models.authorModel import AuthorModel


class BookModel(Base):
    __tablename__ = "books"

    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True
    )


    title: Mapped[str] = mapped_column(
        String,
        nullable=False
    )

    author_id: Mapped[int] = mapped_column(
        ForeignKey("authors.id"),
        nullable=False,
        index=True
    )

    author: Mapped["AuthorModel"] = relationship(back_populates="books")

    awards: Mapped[list["AwardModel"]] = relationship(
        "AwardModel",
        secondary=book_award_table,
        back_populates="books"
    )

    price: Mapped[float] = mapped_column(
        Float,
        nullable=False
    )

    genres: Mapped[list[str]] = mapped_column(
        JSON,
        nullable=False
    )

    category: Mapped[CategoryType] = mapped_column(
        Enum(CategoryType),
        nullable= False
    )

    is_available: Mapped[bool] = mapped_column(
        Boolean,
        nullable=False
    )

    description: Mapped[str|None] = mapped_column(
        Text,
        nullable=True
    )

    pages: Mapped[int] = mapped_column(
        Integer,
        nullable=True
    )

    ISBN: Mapped[str] = mapped_column(
        String,
        nullable=True,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow
    )

