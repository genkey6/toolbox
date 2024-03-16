from server.api.graphql.schema import schema
from server.api.healthz import healthz
from starlette.applications import Starlette
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from starlette.routing import Route
from strawberry.asgi import GraphQL

graphql_app: GraphQL = GraphQL(schema)

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

app = Starlette(
    routes=routes,
    middleware=middleware,
)
