import DashboardShell from "@/components/layout/DashboardShell";

export default function Home() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <header>
          <h1 className="neon-text text-4xl font-bold md:text-6xl">
            Race Control Center
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Real-time telemetry analysis, strategy recommendations,
            and AI-powered race engineering insights.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Current Lap", "40 / 78"],
            ["Tire Health", "84%"],
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
      </div>
    </DashboardShell>
  );
}