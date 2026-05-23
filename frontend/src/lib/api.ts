export interface StrategyResponse {
  action: string;
  confidence: number;
  reasoning: string;
  what_if: string;
}

export async function fetchStrategy(): Promise<StrategyResponse> {
  const response = await fetch("http://127.0.0.1:8000/api/strategy", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch strategy data");
  }

  return response.json();
}