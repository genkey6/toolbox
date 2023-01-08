from invoke import task


@task
def server(ctx):
    ctx.run(
        "poetry run uvicorn \
        --port 8080 \
        --reload \
        server.main:app",
        pty=True,
    )
