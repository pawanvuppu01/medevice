"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
  color?: string;
}

export default function StatCard({ title, value, icon, color = "text-red-400" }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-2xl bg-white/5 border border-gray-700 flex items-center gap-4 shadow-lg"
    >
      <div className={`text-3xl ${color}`}>{icon}</div>
      <div>
        <h3 className="text-sm text-gray-400">{title}</h3>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
    </motion.div>
  );
}