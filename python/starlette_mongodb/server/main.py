from server.api.graphql.schema import schema
from server.api.healthz import healthz
from server.database.mongodb import init_mongodb
from starlette.applications import Starlette
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from starlette.routing import Route
from strawberry.asgi import GraphQL

graphql_app = GraphQL(schema)

routes = [
    Route("/graphql", graphql_app),
    Route("/healthz", healthz),
]

middleware = [
    Middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:3000"],
        allow_headers=["*"],
        allow_methods=["POST", "GET", "OPTIONS"],
    ),
]

app = Starlette(routes=routes, middleware=middleware, on_startup=[init_mongodb])
