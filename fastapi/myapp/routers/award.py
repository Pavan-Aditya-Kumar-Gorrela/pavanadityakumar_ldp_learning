from typing import Annotated

from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    Path,
    status
)
from sqlalchemy.orm import Session

from database.db import get_db
from models.awardModel import AwardModel
from schemas.awardSchema import (
    AwardCreate,
    AwardResponse,
    BookAwardResponse
)
from utils.utils import APIResponse

from services.awardService import (
    create_award,
    get_award,
    get_awards,
    delete_award,
    get_award_books
)


router = APIRouter(
    prefix="/awards",
    tags=["Awards"]
)


# ==========================================================
# AWARD CRUD
# ==========================================================

@router.post(
    "",
    response_model=APIResponse[AwardResponse],
    status_code=status.HTTP_201_CREATED
)
def create_award_route(
    award_data: AwardCreate,
    db: Session = Depends(get_db)
):
    existing_award = (
        db.query(AwardModel)
        .filter(AwardModel.name == award_data.name)
        .first()
    )

    if existing_award:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Award already exists"
        )

    award = create_award(db, award_data)

    return APIResponse(
        message="Award successfully created.",
        data=award
    )


@router.get(
    "",
    response_model=APIResponse[list[AwardResponse]]
)
def retrieve_awards(db: Session = Depends(get_db)):
    awards = get_awards(db)

    return APIResponse(
        message=f"Successfully retrieved {len(awards)} award(s).",
        data=awards
    )


@router.get(
    "/{award_id}",
    response_model=APIResponse[AwardResponse]
)
def retrieve_award(
    award_id: Annotated[int, Path(gt=0)],
    db: Session = Depends(get_db)
):
    award = get_award(db, award_id)

    if not award:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Award not found"
        )

    return APIResponse(
        message=f"Successfully found award {award_id}.",
        data=award
    )


@router.delete("/{award_id}")
def delete_award_route(
    award_id: Annotated[int, Path(gt=0)],
    db: Session = Depends(get_db)
):
    award = get_award(db, award_id)

    if not award:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Award not found"
        )

    delete_award(db, award)

    return APIResponse(
        message="Award successfully deleted.",
        data=None
    )


# ==========================================================
# MANY-TO-MANY: AWARD -> BOOKS
# ==========================================================

@router.get(
    "/{award_id}/books",
    response_model=APIResponse[list[BookAwardResponse]]
)
def retrieve_award_books(
    award_id: Annotated[int, Path(gt=0)],
    db: Session = Depends(get_db)
):
    books = get_award_books(db, award_id)

    if books is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Award not found"
        )

    return APIResponse(
        message=f"Successfully retrieved books for award {award_id}.",
        data=books
    )
