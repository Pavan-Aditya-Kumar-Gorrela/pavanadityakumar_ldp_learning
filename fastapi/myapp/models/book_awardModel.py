from sqlalchemy import Table, Column, ForeignKey
from database.db import Base

# Association table for the MANY-TO-MANY relationship:
# Book <-> Award
book_award_table = Table(
    "book_awards",
    Base.metadata,
    Column(
        "book_id",
        ForeignKey("books.id", ondelete="CASCADE"),
        primary_key=True
    ),
    Column(
        "award_id",
        ForeignKey("awards.id", ondelete="CASCADE"),
        primary_key=True
    )
)
