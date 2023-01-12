import os

from invoke import task


@task
def graphql(ctx):
    print("[invoke] Generating GraphQL schema...")
    ctx.run(
        f"poetry run strawberry export-schema server.api.graphql.schema > \
         {os.path.dirname(__file__)}/../server/api/graphql/schema.graphqls"
    )
