from starlette.requests import Request
from starlette.responses import JSONResponse


def healthz(request: Request) -> JSONResponse:
    return JSONResponse({"status": "OK"})
