"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Message {
  sender: "user" | "ai";
  text: string;
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "👋 Hi! I’m MeDevice AI Advisor. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Mock AI delay and response
    setTimeout(() => {
      const aiResponses = [
        "Our consulting services integrate AI-driven audits and FDA compliance automation.",
        "We offer personalized MedTech training for regulatory engineers and data analysts.",
        "We help design and validate medical devices with full documentation support.",
        "You can explore our Careers page for open roles or submit your details in Contact.",
      ];
      const reply =
        aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: reply },
      ]);
    }, 1000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/10 border border-gray-700 rounded-2xl p-6 text-left shadow-lg">
      <div className="h-[400px] overflow-y-auto flex flex-col gap-4 mb-4 p-3 rounded-lg bg-black/40 border border-gray-700">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                msg.sender === "user"
                  ? "bg-red-600 text-white rounded-br-none"
                  : "bg-gray-800 text-gray-200 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex gap-3">
        <input
          type="text"
          placeholder="Ask about consulting, training, or careers..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-black/50 border border-gray-700 rounded-full px-4 py-3 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full font-semibold text-sm transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}