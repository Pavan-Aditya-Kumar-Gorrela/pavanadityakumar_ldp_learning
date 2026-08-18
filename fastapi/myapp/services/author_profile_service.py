from sqlalchemy.orm import Session

from models.author_profile_Model import AuthorProfileModel
from schemas.author_profile_Schema import AuthorProfileCreate


def create_profile(db: Session,profile_data: AuthorProfileCreate):
    profile = AuthorProfileModel(**profile_data.model_dump())
    db.add(profile)
    db.commit()
    db.refresh(profile)
    return profile


def get_profile(db: Session,profile_id: int):
    return db.get(AuthorProfileModel,profile_id)


def get_profile_by_author(db: Session,author_id: int):
    return (db.query(AuthorProfileModel).filter(AuthorProfileModel.author_id == author_id).first())


def delete_profile(db: Session,profile: AuthorProfileModel):
    db.delete(profile)
    db.commit()