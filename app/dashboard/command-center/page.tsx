"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSpeechSynthesis } from "react-speech-kit";
import { Bell, Calendar, Brain, Send } from "lucide-react";

export default function CommandCenter() {
  const [summary, setSummary] = useState("Fetching insights…");
  const [loading, setLoading] = useState(true);
  const [notifs, setNotifs] = useState<string[]>([]);
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/ai-summary");
      const data = await res.json();
      setSummary(data.summary);
      setNotifs(data.alerts);
      setLoading(false);
      speak({ text: "Here’s your current MeDevice status update." });
    })();
  }, [speak]);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-5xl font-bold mb-8 text-center">🧠 AI Command Center</h1>

      {/* Summary Section */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <Brain className="text-red-400" size={28} />
          <h2 className="text-2xl font-semibold">AI Summary</h2>
        </div>
        <p className="text-lg leading-relaxed text-gray-200">
          {loading ? "Analyzing performance..." : summary}
        </p>
      </motion.div>

      {/* Notifications */}
      <motion.div
        className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl mb-10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Bell className="text-yellow-400" size={26} />
          <h2 className="text-2xl font-semibold">Recent Alerts</h2>
        </div>

        <AnimatePresence>
          {notifs.map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-3 p-4 bg-gray-800/60 rounded-lg border border-gray-700 text-sm"
            >
              {n}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Schedule Summary */}
      <motion.div
        className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl text-center"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Calendar className="mx-auto text-green-400 mb-2" size={28} />
        <h2 className="text-2xl font-semibold mb-3">Schedule Weekly AI Report</h2>
        <p className="text-gray-300 mb-6">
          Click below to instruct MeDevice AI to generate & email weekly summaries of your operations.
        </p>
        <button
          onClick={() => {
            speak({ text: "Scheduling AI summary for next Monday at 9 A.M." });
            alert("✅ AI Report scheduled for next Monday 9 AM!");
          }}
          className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl font-semibold hover:scale-105 transition flex items-center gap-2 mx-auto"
        >
          <Send size={18} /> Schedule AI Email
        </button>
      </motion.div>
    </motion.div>
  );
}
