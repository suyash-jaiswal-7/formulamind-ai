"use client";

import { BarChart3, Brain, Bot, Home, LineChart } from "lucide-react";

const navItems = [
  { icon: Home, label: "Overview" },
  { icon: Brain, label: "Strategy" },
  { icon: LineChart, label: "Predictions" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Bot, label: "AI Copilot" },
];

export default function Sidebar() {
  return (
    <aside className="glass-card fixed left-4 top-4 bottom-4 z-20 hidden w-72 p-6 lg:flex lg:flex-col">
      <div className="mb-10">
        <h1 className="neon-text text-3xl font-bold">FormulaMind AI</h1>
        <p className="mt-2 text-sm text-slate-400">
          AI Strategy Copilot
        </p>
      </div>

      <nav className="space-y-3">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              <Icon className="h-5 w-5 text-cyan-400" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-400">
        Powered by IBM Granite
      </div>
    </aside>
  );
}