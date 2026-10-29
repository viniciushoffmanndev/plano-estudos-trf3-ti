from datetime import datetime

from pydantic import BaseModel


class TopicBase(BaseModel):
    area: str
    category: str
    title: str


class TopicUpdate(BaseModel):
    is_completed: bool


class TopicResponse(TopicBase):
    id: int
    is_completed: bool
    completed_at: datetime | None

    class Config:
        from_attributes = True
