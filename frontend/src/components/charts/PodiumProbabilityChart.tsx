"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { podiumProbabilityData } from "@/data/telemetry";

export default function PodiumProbabilityChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glass-card p-6"
    >
      <h3 className="mb-6 text-lg font-semibold tracking-wide text-slate-200">
        Podium Probability
      </h3>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={podiumProbabilityData}>
            <CartesianGrid stroke="rgba(148, 163, 184, 0.1)" />

            <XAxis
              dataKey="driver"
              stroke="#94a3b8"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />

            <YAxis
              stroke="#94a3b8"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              domain={[0, 100]}
            />

            <Tooltip
              contentStyle={{
                background: "rgba(15, 23, 42, 0.95)",
                border: "1px solid rgba(139, 92, 246, 0.2)",
                borderRadius: "12px",
              }}
            />

            <Bar
              dataKey="probability"
              fill="#8b5cf6"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}