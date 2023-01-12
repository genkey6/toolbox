from enum import Enum

import strawberry


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


@strawberry.federation.type(keys=["id"], shareable=True)
class Animal:
    id: strawberry.ID
    name: str

    @classmethod
    def resolve_reference(cls, id: strawberry.ID) -> "Animal":
        return find_animal_by_id(id)


animals = [
    Animal(id=strawberry.ID("1"), name="パンダ"),
    Animal(id=strawberry.ID("2"), name="ホッキョクグマ"),
    Animal(id=strawberry.ID("3"), name="ペンギン"),
]


def find_animal_by_id(id: strawberry.ID) -> Animal:
    return list(filter(lambda animal: animal.id == id, animals))[0]


@strawberry.federation.type(keys=["id"])
class Zoo:
    id: strawberry.ID
    name: str
    area: Area
    animals: list[Animal] = strawberry.field(default_factory=list)

    @classmethod
    def resolve_reference(cls, id: strawberry.ID) -> "Zoo":
        return find_zoo_by_id(id)


zoos = [
    Zoo(
        id=strawberry.ID("1"),
        name="上野動物園",
        area=Area.KANTO,
        animals=[Animal(id=strawberry.ID("1"), name="パンダ")],
    ),
    Zoo(
        id=strawberry.ID("2"),
        name="旭山動物園",
        area=Area.TOHOKU,
        animals=[Animal(id=strawberry.ID("2"), name="ホッキョクグマ")],
    ),
    Zoo(
        id=strawberry.ID("3"),
        name="アドベンチャーワールド",
        area=Area.KINKI,
        animals=[Animal(id=strawberry.ID("3"), name="パンダ")],
    ),
]


def find_zoo_by_id(id: strawberry.ID) -> Zoo:
    return list(filter(lambda zoo: zoo.id == id, zoos))[0]


@strawberry.input
class AnimalInput:
    id: str
    name: str


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
                animals=[Animal(id=strawberry.ID(animal.id), name=animal.name) for animal in zoo.animals],
            )
        )
        return zoos


schema = strawberry.federation.Schema(query=Query, mutation=Mutation, enable_federation_2=True)
