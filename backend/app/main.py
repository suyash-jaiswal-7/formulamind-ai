from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="FormulaMind AI API",
    version="1.0.0"
)

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "FormulaMind AI Backend Running"
    }


@app.get("/api/strategy")
def get_strategy():
    return {
        "action": "Pit in the Next 2 Laps",
        "confidence": 89,
        "reasoning": (
            "Tire degradation is accelerating and lap times have increased "
            "by 1.9 seconds over the current stint. The undercut threat "
            "from trailing cars is high, making an early pit stop "
            "strategically advantageous."
        ),
        "what_if": (
            "If a Safety Car is deployed within the next two laps, "
            "pit immediately to gain a reduced time-loss advantage."
        )
    }