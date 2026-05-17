from fastapi import FastAPI

app = FastAPI(
    title="FormulaMind AI API",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "FormulaMind AI Backend Running",
        "status": "success"
    }