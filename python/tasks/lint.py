from invoke import task


@task
def lint(ctx, target="."):
    print("[invoke] Running pflake8 linter...")
    ctx.run(f"pflake8 {target}")
