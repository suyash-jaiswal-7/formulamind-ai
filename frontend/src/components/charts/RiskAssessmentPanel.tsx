"use client";

import { motion } from "framer-motion";

const risks = [
  { label: "Tire Wear Risk", value: 84, color: "bg-red-500" },
  { label: "Weather Uncertainty", value: 62, color: "bg-cyan-500" },
  { label: "Undercut Threat", value: 71, color: "bg-purple-500" },
  { label: "Fuel Margin", value: 48, color: "bg-emerald-500" },
];

export default function RiskAssessmentPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="glass-card p-6"
    >
      <h3 className="mb-6 text-lg font-semibold tracking-wide text-slate-200">
        Strategic Risk Assessment
      </h3>

      <div className="space-y-5">
        {risks.map((risk) => (
          <div key={risk.label}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-slate-300">{risk.label}</span>
              <span className="text-sm font-semibold text-white">
                {risk.value}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full rounded-full ${risk.color}`}
                style={{ width: `${risk.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}