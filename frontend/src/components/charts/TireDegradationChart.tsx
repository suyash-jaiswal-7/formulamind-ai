"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { tireDegradationData } from "@/data/telemetry";

export default function TireDegradationChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="glass-card p-6"
    >
      <h3 className="mb-6 text-lg font-semibold tracking-wide text-slate-200">
        Tire Degradation
      </h3>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={tireDegradationData}>
            <CartesianGrid stroke="rgba(148, 163, 184, 0.1)" />

            <XAxis
              dataKey="lap"
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
                border: "1px solid rgba(255, 0, 60, 0.2)",
                borderRadius: "12px",
              }}
            />

            <Area
              type="monotone"
              dataKey="health"
              stroke="#ff003c"
              fill="#ff003c"
              fillOpacity={0.18}
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}