"use client";

import { motion } from "framer-motion";
import { Brain, AlertTriangle, TrendingUp } from "lucide-react";
import type { StrategyRecommendation } from "@/data/strategy";

type StrategyCardProps = {
  strategy: StrategyRecommendation;
};

export default function StrategyCard({ strategy }: StrategyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="glass-card p-8"
    >
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-2xl bg-white/5 p-3">
          <Brain className="h-6 w-6 text-cyan-400" />
        </div>

        <div>
          <h3 className="text-2xl font-semibold">AI Strategy Recommendation</h3>
          <p className="text-sm text-slate-400">
            Powered by FormulaMind Intelligence
          </p>
        </div>
      </div>

      {/* Recommendation */}
      <div className="mb-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
        <p className="mb-2 text-sm uppercase tracking-widest text-cyan-300">
          Recommended Action
        </p>
        <p className="text-3xl font-bold text-white">
          {strategy.action}
        </p>
      </div>

      {/* Confidence */}
      <div className="mb-6">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-slate-300">Confidence Score</span>
          <span className="font-semibold text-white">
            {strategy.confidence}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
            style={{ width: `${strategy.confidence}%` }}
          />
        </div>
      </div>

      {/* Explanation */}
      <div className="mb-6 rounded-2xl bg-white/5 p-5">
        <div className="mb-3 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-cyan-400" />
          <span className="font-semibold">Strategic Explanation</span>
        </div>

        <p className="leading-relaxed text-slate-300">
          {strategy.explanation}
        </p>
      </div>

      {/* What-If Scenario */}
      <div className="rounded-2xl bg-red-500/5 p-5">
        <div className="mb-3 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-400" />
          <span className="font-semibold">What-If Scenario</span>
        </div>

        <p className="text-slate-300">
          {strategy.whatIf}
        </p>
      </div>
    </motion.div>
  );
}