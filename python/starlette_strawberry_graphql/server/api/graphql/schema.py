from enum import Enum

import strawberry


@strawberry.type
class Classis:
    name: str


@strawberry.type
class Animal:
    name: str
    classis: Classis


@strawberry.enum
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


@strawberry.type
class Zoo:
    name: str
    area: Area
    animals: list[Animal] = strawberry.field(default_factory=list)


@strawberry.input
class ClassisInput:
    name: str


@strawberry.input
class AnimalInput:
    name: str
    classis: ClassisInput


@strawberry.input
class ZooInput:
    name: str
    area: Area
    animals: list[AnimalInput] = strawberry.field(default_factory=list)


# use inmemory list instead of a database
zoos = [
    Zoo(
        name="上野動物園",
        area=Area.KANTO,
        animals=[Animal(name="パンダ", classis=Classis(name="哺乳綱"))],
    )
]


@strawberry.type
class Query:
    @strawberry.field
    def zoos(self) -> list[Zoo]:
        return zoos


@strawberry.type
class Mutation:
    @strawberry.mutation
    def register_zoo(self, zoo: ZooInput) -> list[Zoo]:
        zoos.append(
            Zoo(
                name=zoo.name,
                area=zoo.area,
                animals=[Animal(name=animal.name, classis=Classis(name=animal.classis.name)) for animal in zoo.animals],
            )
        )
        return zoos


schema = strawberry.Schema(query=Query, mutation=Mutation)
