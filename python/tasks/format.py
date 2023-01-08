from invoke import task


@task(optional=["check"])
def format(ctx, check=None):
    if check:
        print("[invoke] Running black formatter check...")
        ctx.run("black . --check")
        print("[invoke] Running isort formatter check...")
        ctx.run("isort . -c")
    else:
        print("[invoke] Running black formatter...")
        ctx.run("black .")
        print("[invoke] Running isort formatter...")
        ctx.run("isort .")
