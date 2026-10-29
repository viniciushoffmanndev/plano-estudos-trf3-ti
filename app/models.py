from sqlalchemy import Boolean, Column, DateTime, Integer, String

from app.database import Base


class Topic(Base):
    __tablename__ = "topics"

    id = Column(Integer, primary_key=True, index=True)
    area = Column(String(100), index=True, nullable=False)  # Nova coluna!
    category = Column(String(255), index=True, nullable=False)
    title = Column(String(500), nullable=False)
    is_completed = Column(Boolean, default=False)
    completed_at = Column(DateTime(timezone=True), nullable=True)
