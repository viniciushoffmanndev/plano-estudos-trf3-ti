from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles

from app.database import Base, engine
from app.routers import topics

# Criar tabelas
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Plano de Estudos TRF3")


# Middleware OWASP - Headers de Segurança
@app.middleware("http")
async def add_security_headers(request: Request, call_next):
    response = await call_next(request)
    response.headers["Content-Security-Policy"] = (
        "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self';"
    )
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    response.headers["Strict-Transport-Security"] = (
        "max-age=31536000; includeSubDomains"
    )
    return response


app.include_router(topics.router)

# Servir Frontend
app.mount("/", StaticFiles(directory="app/static", html=True), name="static")
