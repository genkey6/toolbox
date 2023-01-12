from invoke import task


@task
def server(ctx):
    ctx.run(
        "poetry run uvicorn \
        --port 4002 \
        --reload \
        server.main:app",
        pty=True,
    )
