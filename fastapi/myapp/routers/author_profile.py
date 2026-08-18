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
from utils.utils import APIResponse
from schemas.author_profile_Schema import AuthorProfileCreate,AuthorProfileResponse
from services.author_profile_service import (
    create_profile,
    get_profile,
    get_profile_by_author,
    delete_profile
)


router = APIRouter(prefix="/profiles",tags=["Author Profiles"])


# CREATE PROFILE
@router.post("",response_model=APIResponse[AuthorProfileResponse],status_code=status.HTTP_201_CREATED)
def create_author_profile(profile_data: AuthorProfileCreate,db: Session = Depends(get_db)):
    existing_profile = get_profile_by_author(db,profile_data.author_id)
    if existing_profile:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Author already has a profile"
        )

    profile = create_profile(db,profile_data)
    return APIResponse(
        message="Author profile successfully created.",
        data=profile
    )


# GET PROFILE BY ID
@router.get("/{profile_id}",response_model=APIResponse[AuthorProfileResponse])
def retrieve_profile(profile_id: Annotated[int,Path(gt=0)],db: Session = Depends(get_db)):
    profile = get_profile(db,profile_id)
    if not profile:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Profile not found"
        )

    return APIResponse(
        message="Successfully retrieved profile.",
        data=profile
    )


# GET PROFILE BY AUTHOR
@router.get("/author/{author_id}",response_model=APIResponse[AuthorProfileResponse])
def retrieve_author_profile(author_id: Annotated[int,Path(gt=0)],db: Session = Depends(get_db)):
    profile = get_profile_by_author(db,author_id)
    if not profile:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Profile not found for this author"
        )
    return APIResponse(
        message="Successfully retrieved author profile.",
        data=profile
    )


# DELETE PROFILE
@router.delete("/{profile_id}")
def delete_author_profile(profile_id: Annotated[int,Path(gt=0)],db: Session = Depends(get_db)):
    profile = get_profile(db,profile_id)
    if not profile:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Profile not found"
        )
    delete_profile(db,profile)
    return APIResponse(
        message="Profile successfully deleted.",
        data=None
    )