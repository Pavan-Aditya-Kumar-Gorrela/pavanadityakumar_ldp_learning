from sqlalchemy import String,Integer,ForeignKey
from sqlalchemy.orm import Mapped,mapped_column,relationship
from database.db import Base
from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from models.authorModel import AuthorModel


class AuthorProfileModel(Base):

    __tablename__ = "author_profiles"

    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True
    )

    bio: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True
    )

    country: Mapped[str] = mapped_column(
        String(100),
        nullable=False
    )

    website: Mapped[str | None] = mapped_column(
        String(200),
        nullable=True
    )

    # FOREIGN KEY
    author_id: Mapped[int] = mapped_column(
        ForeignKey(
            "authors.id",
            ondelete="CASCADE"
        ),
        unique=True,
        nullable=False
    )

    # ORM relationship
    author: Mapped["AuthorModel"] = relationship(
        "AuthorModel",
        back_populates="profile"
    )