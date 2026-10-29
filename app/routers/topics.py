from datetime import UTC, datetime
from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import models, schemas
from app.database import get_db

router = APIRouter(prefix="/api/topics", tags=["topics"])

# Criamos um "tipo" injetável usando Annotated. Isso resolve o erro B008 do Ruff.
SessionDep = Annotated[Session, Depends(get_db)]


@router.get("/", response_model=list[schemas.TopicResponse])
def get_topics(db: SessionDep):
    return db.query(models.Topic).all()


@router.put("/{topic_id}/toggle", response_model=schemas.TopicResponse)
def toggle_topic(topic_id: int, payload: schemas.TopicUpdate, db: SessionDep):
    topic = db.query(models.Topic).filter(models.Topic.id == topic_id).first()
    if not topic:
        raise HTTPException(status_code=404, detail="Topic not found")

    topic.is_completed = payload.is_completed
    topic.completed_at = datetime.now(UTC) if payload.is_completed else None

    db.commit()
    db.refresh(topic)
    return topic
