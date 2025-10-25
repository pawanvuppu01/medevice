"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Brain, TrendingUp, BarChart3 } from "lucide-react";

export default function AIDashboard() {
  const [prediction, setPrediction] = useState<string>("Loading AI insights...");

  const data = [
    { month: "Jan", clients: 25, projects: 42, training: 6 },
    { month: "Feb", clients: 31, projects: 53, training: 8 },
    { month: "Mar", clients: 36, projects: 61, training: 9 },
    { month: "Apr", clients: 44, projects: 72, training: 12 },
  ];

  // Fetch AI prediction from API
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/analytics");
      const data = await res.json();
      setPrediction(data.prediction);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-red-500 text-center mb-12"
      >
        <Brain className="inline mr-2" /> AI Analytics Dashboard
      </motion.h1>

      {/* Chart Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10"
      >
        <h2 className="text-2xl font-semibold text-red-400 mb-4 flex items-center gap-2">
          <BarChart3 /> Performance Overview
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="month" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip contentStyle={{ background: "#111", border: "none" }} />
            <Line type="monotone" dataKey="clients" stroke="#ef4444" strokeWidth={2} />
            <Line type="monotone" dataKey="projects" stroke="#f59e0b" strokeWidth={2} />
            <Line type="monotone" dataKey="training" stroke="#22d3ee" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* AI Prediction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10 p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/10"
      >
        <h2 className="text-2xl font-semibold text-red-400 mb-3 flex items-center gap-2">
          <TrendingUp /> AI Forecast
        </h2>
        <p className="text-lg text-gray-200 leading-relaxed">{prediction}</p>
      </motion.div>
    </div>
  );
}
