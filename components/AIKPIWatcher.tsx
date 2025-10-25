"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, TrendingDown, Bell, Loader2 } from "lucide-react";
import { useSpeechSynthesis } from "react-speech-kit";

export default function AIKPIWatcher() {
  const [metrics, setMetrics] = useState({
    clients: 44,
    projects: 72,
    training: 12,
  });
  const [alert, setAlert] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { speak, speaking } = useSpeechSynthesis();

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch("/api/ai-kpi");
      const data = await res.json();
      setMetrics(data.metrics);
      setLoading(false);

      if (data.alert) {
        setAlert(data.alert);
        speak({ text: data.alert });
        setTimeout(() => setAlert(null), 8000);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [speak]);

  return (
    <>
      <div className="fixed top-4 right-4 z-50 flex flex-col items-end space-y-2">
        {loading && (
          <div className="bg-gray-900/70 text-gray-200 px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
            <Loader2 className="animate-spin" size={18} /> Monitoring KPIs…
          </div>
        )}

        <AnimatePresence>
          {alert && (
            <motion.div
              key="alert"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`${
                alert.includes("drop")
                  ? "bg-red-700/90"
                  : "bg-green-700/90"
              } text-white px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3`}
            >
              <Bell size={20} />
              <span>{alert}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="fixed bottom-4 left-4 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-xl text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <TrendingUp /> Live KPIs
        </h3>
        <p>👥 Clients: {metrics.clients}</p>
        <p>📁 Projects: {metrics.projects}</p>
        <p>🎓 Training: {metrics.training}</p>
        {speaking && <p className="text-pink-400 animate-pulse text-sm mt-1">🔊 AI Speaking...</p>}
      </motion.div>
    </>
  );
}
