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


@strawberry.federation.type(keys=["id"])
class Zoo:
    id: strawberry.ID
    name: str
    area: Area
    animals: list[Animal] = strawberry.field(default_factory=list)

    @classmethod
    def resolve_reference(cls, id: strawberry.ID) -> "Zoo":
        return find_zoo_by_id(id)


# use inmemory list instead of a database
zoos = [
    Zoo(
        id=strawberry.ID("1"),
        name="上野動物園",
        area=Area.KANTO,
        animals=[Animal(name="パンダ", classis=Classis(name="哺乳綱"))],
    ),
    Zoo(
        id=strawberry.ID("2"),
        name="旭山動物園",
        area=Area.TOHOKU,
        animals=[Animal(name="ホッキョクグマ", classis=Classis(name="哺乳綱"))],
    ),
    Zoo(
        id=strawberry.ID("3"),
        name="アドベンチャーワールド",
        area=Area.KINKI,
        animals=[Animal(name="パンダ", classis=Classis(name="哺乳綱"))],
    ),
]


def find_zoo_by_id(id: strawberry.ID) -> Zoo:
    return list(filter(lambda zoo: zoo.id == id, zoos))[0]


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
                id=strawberry.ID(str(len(zoos) + 1)),
                name=zoo.name,
                area=zoo.area,
                animals=[Animal(name=animal.name, classis=Classis(name=animal.classis.name)) for animal in zoo.animals],
            )
        )
        return zoos


schema = strawberry.federation.Schema(query=Query, mutation=Mutation, enable_federation_2=True)
