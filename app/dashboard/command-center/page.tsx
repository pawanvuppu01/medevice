"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSpeechSynthesis } from "react-speech-kit";
import { Bell, Calendar, Brain, Send } from "lucide-react";

export default function CommandCenter() {
  const { speak, voices } = useSpeechSynthesis();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { id: number; text: string; sender: "user" | "ai" }[]
  >([]);

  const aiReply = (query: string) => {
    const lower = query.toLowerCase();
    if (lower.includes("schedule"))
      return "Your upcoming regulatory meeting is scheduled for tomorrow at 10 AM.";
    if (lower.includes("project"))
      return "Currently, three MedTech projects are in progress: AI Tracker, BioSense, and SmartScan.";
    if (lower.includes("training"))
      return "Your next FDA compliance training is due on November 1st.";
    return "I’m here to assist you with operations, compliance, and planning tasks.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { id: Date.now(), text: input, sender: "user" as const };
    setMessages((prev) => [...prev, newMsg]);

    setTimeout(() => {
      const replyText = aiReply(input);
      const aiMsg = { id: Date.now() + 1, text: replyText, sender: "ai" as const };
      setMessages((prev) => [...prev, aiMsg]);
      speak({ text: replyText, voice: voices[0] });
    }, 800);

    setInput("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-red-800 mb-10 text-center"
      >
        AI Command Center
      </motion.h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Bell size={40} className="text-red-700 mb-4" />,
            title: "Smart Alerts",
            desc: "Stay ahead with instant compliance and deadline notifications.",
          },
          {
            icon: <Calendar size={40} className="text-red-700 mb-4" />,
            title: "Scheduler",
            desc: "Sync and manage your training, audits, and client meetings.",
          },
          {
            icon: <Brain size={40} className="text-red-700 mb-4" />,
            title: "AI Insights",
            desc: "Analyze project data, detect risks, and optimize operations.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center"
          >
            {card.icon}
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-16 bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-semibold text-red-800 mb-6 text-center">
          Ask Your AI Assistant
        </h2>

        <div className="space-y-4 h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 pr-3">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-5 py-3 rounded-2xl max-w-[80%] text-sm shadow ${
                    msg.sender === "user"
                      ? "bg-red-700 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-6 flex gap-3">
          <input
            type="text"
            placeholder="Ask MeDevice AI..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-grow px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-700"
          />
          <button
            onClick={handleSend}
            className="bg-red-700 hover:bg-red-800 text-white px-5 rounded-xl flex items-center justify-center transition"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </main>
  );
}
