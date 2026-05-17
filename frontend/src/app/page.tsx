import DashboardShell from "@/components/layout/DashboardShell";
import StrategyCard from "@/components/strategy/StrategyCard";
import LapTimeChart from "@/components/charts/LapTimeChart";
import TireDegradationChart from "@/components/charts/TireDegradationChart";
import PodiumProbabilityChart from "@/components/charts/PodiumProbabilityChart";
import RiskAssessmentPanel from "@/components/charts/RiskAssessmentPanel";
import { strategyRecommendation } from "@/data/strategy";

export default function Home() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        {/* Header */}
        <header>
          <h1 className="neon-text text-4xl font-bold md:text-6xl">
            Race Control Center
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Real-time telemetry analysis, predictive insights, and AI-powered
            Formula 1 strategy recommendations.
          </p>
        </header>

        {/* KPI Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Current Lap", "40 / 78"],
            ["Tire Health", "44%"],
            ["Podium Probability", "92%"],
            ["Pit Window", "Lap 47–50"],
          ].map(([label, value]) => (
            <div key={label} className="glass-card p-6">
              <p className="text-sm uppercase tracking-widest text-slate-400">
                {label}
              </p>
              <p className="mt-4 text-3xl font-bold">{value}</p>
            </div>
          ))}
        </div>

        {/* AI Strategy Recommendation */}
        <StrategyCard strategy={strategyRecommendation} />

        {/* Main Analytics Grid */}
        <div className="grid gap-8 xl:grid-cols-2">
          <LapTimeChart />
          <TireDegradationChart />
          <PodiumProbabilityChart />
          <RiskAssessmentPanel />
        </div>
      </div>
    </DashboardShell>
  );
}