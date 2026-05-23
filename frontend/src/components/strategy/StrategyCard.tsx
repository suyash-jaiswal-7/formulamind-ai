"use client";
import { Brain, TrendingUp, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { StrategyResponse } from "@/lib/api";

interface StrategyCardProps {
  strategy: StrategyResponse;
}

export default function StrategyCard({ strategy }: StrategyCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card p-8 space-y-8"
    >
      {/* Header */}
      <div className="flex items-start gap-6">
        <div className="rounded-2xl bg-cyan-500/10 p-5">
          <Brain className="h-10 w-10 text-cyan-400" />
        </div>

        <div>
          <h2 className="neon-text text-3xl font-bold md:text-5xl">
            AI Strategy Recommendation
          </h2>
          <p className="mt-2 text-xl text-slate-400">
            Powered by FormulaMind Intelligence
          </p>
        </div>
      </div>

      {/* Recommended Action */}
      <div className="rounded-3xl border border-cyan-500/30 bg-cyan-500/5 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Recommended Action
        </p>
        <h3 className="mt-4 text-4xl font-bold md:text-6xl">
          {strategy.action}
        </h3>
      </div>

      {/* Confidence Score */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xl">Confidence Score</span>
          <span className="text-3xl font-bold">
            {strategy.confidence}%
          </span>
        </div>

        <div className="h-5 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${strategy.confidence}%` }}
            transition={{ duration: 1.2 }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500"
          />
        </div>
      </div>

      {/* Explanation */}
      <div className="glass-card p-8">
        <div className="mb-6 flex items-center gap-3">
          <TrendingUp className="h-8 w-8 text-cyan-400" />
          <h4 className="text-2xl font-bold">Strategic Explanation</h4>
        </div>
        <p className="text-lg leading-10 text-slate-200">
          {strategy.reasoning}
        </p>
      </div>

      {/* What-If Scenario */}
      <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
        <div className="mb-6 flex items-center gap-3">
          <AlertTriangle className="h-8 w-8 text-red-400" />
          <h4 className="text-2xl font-bold">What-If Scenario</h4>
        </div>
        <p className="text-lg leading-10 text-slate-200">
          {strategy.what_if}
        </p>
      </div>
    </motion.section>
  );
}