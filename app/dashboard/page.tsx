"use client";

import { motion } from "framer-motion";
import { BarChart3, Users, Briefcase, TrendingUp } from "lucide-react";

export default function DashboardHome() {
  const stats = [
    {
      icon: <Users size={28} className="text-pink-500" />,
      title: "Active Clients",
      value: "42",
      desc: "Companies partnered this quarter",
      color: "from-pink-500/30 to-red-500/30",
    },
    {
      icon: <Briefcase size={28} className="text-blue-500" />,
      title: "Projects",
      value: "128",
      desc: "Ongoing MedTech projects",
      color: "from-blue-500/30 to-indigo-500/30",
    },
    {
      icon: <BarChart3 size={28} className="text-green-400" />,
      title: "Training Sessions",
      value: "16",
      desc: "Completed this month",
      color: "from-green-400/30 to-emerald-600/30",
    },
    {
      icon: <TrendingUp size={28} className="text-yellow-400" />,
      title: "Growth",
      value: "+18%",
      desc: "Quarterly increase in client reach",
      color: "from-yellow-400/30 to-orange-500/30",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-950 via-red-950/40 to-black text-white">
      {/* Animated background gradient shimmer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 3 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,0,100,0.2),transparent_60%)] blur-3xl"
      />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12 text-center pt-10 drop-shadow-xl"
      >
        MeDevice Dashboard
      </motion.h1>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 25px rgba(255,255,255,0.2)",
            }}
            className={`rounded-2xl p-6 backdrop-blur-xl bg-gradient-to-br ${item.color} border border-white/10 shadow-lg hover:shadow-red-500/20 transition-all duration-500 relative overflow-hidden group`}
          >
            {/* Glow pulse */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-40 transition duration-500"></div>

            <div className="flex flex-col items-center text-center space-y-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="mb-2"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-4xl font-extrabold tracking-tight animate-glow">
                {item.value}
              </p>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-6xl mx-auto mt-20 mb-16 bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl"
      >
        <h2 className="text-2xl font-semibold text-red-400 mb-4">
          Latest Activity
        </h2>
        <ul className="divide-y divide-white/10 text-gray-200">
          <li className="py-3 flex justify-between items-center hover:text-white transition">
            <span>✅ Regulatory Audit Completed for MedPlus Inc.</span>
            <span className="text-sm text-gray-400">2 days ago</span>
          </li>
          <li className="py-3 flex justify-between items-center hover:text-white transition">
            <span>🚀 New project launched — “AI Compliance Tracker”</span>
            <span className="text-sm text-gray-400">4 days ago</span>
          </li>
          <li className="py-3 flex justify-between items-center hover:text-white transition">
            <span>📊 Training report shared with FDA team</span>
            <span className="text-sm text-gray-400">1 week ago</span>
          </li>
          <li className="py-3 flex justify-between items-center hover:text-white transition">
            <span>👥 New consultants onboarded</span>
            <span className="text-sm text-gray-400">2 weeks ago</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
