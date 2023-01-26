from enum import Enum

from beanie import Document
from pydantic import BaseModel, Field


class Classis(BaseModel):
    name: str


class Animal(BaseModel):
    name: str
    classis: Classis


class Area(Enum):
    TOHOKU = "Tohoku"
    KANTO = "Kanto"
    KOSHINETSU = "Koshinetsu"
    HOKURIKU = "Hokuriku"
    TOKAI = "Tokai"
    KINKI = "Kinki"
    CHUGOKU = "Chugoku"
    SHIKOKU = "Shikoku"
    KYUSYU = "Kyushu"


class Zoo(Document):
    # We can override the type of `id` field, but mypy does not follow that.
    # For details, see: https://github.com/roman-right/beanie/issues/336
    id: str  # type:ignore
    name: str
    area: Area
    animals: list[Animal] = Field(default_factory=list)
