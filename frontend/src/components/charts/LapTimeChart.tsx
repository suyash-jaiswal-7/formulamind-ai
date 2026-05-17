"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { lapTimeData } from "@/data/telemetry";

export default function LapTimeChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card p-6"
    >
      <h3 className="mb-6 text-lg font-semibold tracking-wide text-slate-200">
        Lap Time Trend
      </h3>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lapTimeData}>
            <CartesianGrid stroke="rgba(148, 163, 184, 0.1)" />

            <XAxis
              dataKey="lap"
              stroke="#94a3b8"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />

            <YAxis
              stroke="#94a3b8"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              domain={["dataMin - 1", "dataMax + 1"]}
            />

            <Tooltip
              contentStyle={{
                background: "rgba(15, 23, 42, 0.95)",
                border: "1px solid rgba(0, 212, 255, 0.2)",
                borderRadius: "12px",
              }}
            />

            <Line
              type="monotone"
              dataKey="time"
              stroke="#00d4ff"
              strokeWidth={3}
              dot={{ r: 4, fill: "#00d4ff" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}