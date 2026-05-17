export const strategyRecommendation = {
  action: "Pit in the Next 2 Laps",
  confidence: 89,
  explanation:
    "Tire degradation is accelerating and lap times have increased by 2.9 seconds over the current stint. The undercut threat from trailing cars is high, making an early pit stop strategically advantageous.",
  whatIf:
    "If a Safety Car is deployed within the next two laps, pit immediately to gain a reduced time-loss advantage.",
};

export type StrategyRecommendation = typeof strategyRecommendation;