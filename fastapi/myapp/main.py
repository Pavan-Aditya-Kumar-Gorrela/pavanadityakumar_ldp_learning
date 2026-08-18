from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

from database.db import Base, engine

# Import models so SQLAlchemy registers all tables
from models.authorModel import AuthorModel
from models.author_profile_Model import AuthorProfileModel
from models.bookModel import BookModel
from models.awardModel import AwardModel
from models.book_awardModel import book_award_table

from routers.book import router as book_router
from routers.author import router as author_router
from routers.author_profile import router as author_profile_author
from routers.award import router as award_router


Base.metadata.create_all(bind=engine)

app = FastAPI()


@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={
            "status": "error",
            "message": "An unexpected internal server error occurred.",
            "detail": str(exc)
        }
    )


app.include_router(book_router)
app.include_router(author_router)
app.include_router(author_profile_author)
app.include_router(award_router)
