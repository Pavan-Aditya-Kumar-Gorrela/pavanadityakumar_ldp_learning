from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from database.db import Base
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from bookModel import BookModel
    from models.author_profile_Model import AuthorProfileModel

class AuthorModel(Base):
    __tablename__ = "authors"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    books: Mapped[list["BookModel"]] = relationship(back_populates='author')
    profile: Mapped["AuthorProfileModel | None"] = relationship(
        "AuthorProfileModel",
        back_populates="author",
        uselist=False,
        cascade="all, delete-orphan"
    )