"use client";

import { motion } from "framer-motion";
import { Brain, Zap, BarChart3, Bot, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Strategy Engine",
    description:
      "Generate intelligent pit stop recommendations using telemetry and predictive analytics.",
  },
  {
    icon: BarChart3,
    title: "Race Analytics",
    description:
      "Compare drivers, lap pace, tire degradation, and race performance in real time.",
  },
  {
    icon: Bot,
    title: "IBM Granite Copilot",
    description:
      "Ask natural-language questions and receive race engineer style explanations.",
  },
  {
    icon: Zap,
    title: "Live Predictions",
    description:
      "Forecast podium probabilities, undercut opportunities, and strategic risks.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 md:px-12">
      <div className="grid-pattern fixed inset-0 -z-10 opacity-40" />

      <section className="mx-auto max-w-7xl">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
            Powered by IBM Granite
          </div>

          <h1 className="neon-text mb-6 text-5xl font-bold leading-tight md:text-7xl">
            FormulaMind AI
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-slate-300 md:text-2xl">
            Your AI-powered Formula 1 strategy copilot that analyzes telemetry,
            predicts race outcomes, and explains every decision like a world-class
            race engineer.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
              Launch Dashboard
            </button>

            <button className="glass-card px-8 py-4 font-semibold">
              View Architecture
            </button>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="glass-card p-8"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-white/5 p-4">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-slate-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </section>
      </section>
    </main>
  );
}