"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "👋 Hello! I’m MeDevice’s AI Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleAIResponse = async (userMessage: string) => {
    setIsTyping(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { sender: "ai", text: data.reply }]);
    } catch {
      setMessages((m) => [...m, { sender: "ai", text: "⚠️ Unable to connect to server." }]);
    }
    setIsTyping(false);
  };

  const handleSend = (e: any) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMsg = { sender: "user", text: input.trim() };
    setMessages([...messages, newMsg]);
    handleAIResponse(input);
    setInput("");
  };

  return (
    <>
      {/* Floating Orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg flex items-center justify-center"
        >
          {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
        </motion.button>
        <motion.span
          className="absolute inset-0 rounded-full bg-red-500 opacity-30 blur-xl animate-pulse"
          style={{ zIndex: -1 }}
        ></motion.span>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 bg-white shadow-2xl rounded-2xl p-4 w-80 border border-gray-200 z-50 flex flex-col"
          >
            <h3 className="text-lg font-semibold text-red-800 mb-2 border-b pb-2">
              🤖 MeDevice AI Assistant
            </h3>

            <div className="flex-1 overflow-y-auto space-y-3 mb-3 max-h-72 scrollbar-hide">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`px-3 py-2 rounded-lg text-sm max-w-[85%] ${
                    msg.sender === "user"
                      ? "ml-auto bg-red-700 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gray-100 text-gray-600 px-3 py-2 rounded-lg w-fit"
                >
                  Typing<span className="animate-pulse">...</span>
                </motion.div>
              )}
              <div ref={chatEndRef}></div>
            </div>

            <form onSubmit={handleSend} className="flex items-center border-t pt-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me something..."
                className="flex-1 border-none outline-none text-sm px-2"
              />
              <button
                type="submit"
                className="p-2 bg-red-700 hover:bg-red-800 text-white rounded-md transition"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
