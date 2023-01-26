import strawberry
from server.database.model import Animal, Area, Classis, Zoo

# https://github.com/strawberry-graphql/strawberry/issues/1598
strawberry.enum(Area)


@strawberry.experimental.pydantic.type(model=Classis, all_fields=True)
class ClassisType:
    pass


@strawberry.experimental.pydantic.type(model=Animal, all_fields=True)
class AnimalType:
    pass


@strawberry.experimental.pydantic.type(model=Zoo, all_fields=True)
class ZooType:
    pass


@strawberry.experimental.pydantic.input(model=Classis, all_fields=True)
class ClassisInput:
    pass


@strawberry.experimental.pydantic.input(model=Animal, all_fields=True)
class AnimalInput:
    pass


@strawberry.experimental.pydantic.input(model=Zoo, all_fields=True)
class ZooInput:
    pass


@strawberry.type
class Query:
    @strawberry.field
    async def zoos(self) -> list[ZooType]:
        zoos = await Zoo.find().to_list()
        return [ZooType.from_pydantic(zoo) for zoo in zoos]


@strawberry.type
class Mutation:
    @strawberry.mutation
    async def register_zoo(self, zoo: ZooInput) -> list[ZooType]:
        await Zoo.insert_one(ZooInput.to_pydantic(zoo))
        zoos = await Zoo.find().to_list()
        return [ZooType.from_pydantic(zoo) for zoo in zoos]


schema = strawberry.Schema(query=Query, mutation=Mutation)
