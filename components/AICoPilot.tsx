"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Mic,
  Send,
  Loader2,
  Volume2,
  Sun,
  Moon,
  User
} from "lucide-react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";

export default function AICoPilot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "👋 Hi Pawan! I'm your AI Co-Pilot. You can talk or type — I'll even speak back!" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const { speak, speaking, cancel, voices } = useSpeechSynthesis();
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  // ✅ Scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // ✅ Update input from voice
  useEffect(() => {
    if (transcript && listening) {
      setInput(transcript);
    }
  }, [transcript, listening]);

  // ✅ Handle AI and actions
  const handleAIResponse = async (userMessage: string) => {
    const lower = userMessage.toLowerCase();
    setIsTyping(true);

    try {
      // Simple command recognition before API call
      if (lower.includes("profile")) {
        window.location.href = "/dashboard/profile";
        setMessages((m) => [...m, { sender: "ai", text: "🔍 Opening your profile page..." }]);
        speak({ text: "Opening your profile page..." });
        setIsTyping(false);
        return;
      }

      if (lower.includes("dark")) {
        document.documentElement.classList.toggle("dark");
        setMessages((m) => [...m, { sender: "ai", text: "🌙 Switched theme mode!" }]);
        speak({ text: "Switched theme mode!" });
        setIsTyping(false);
        return;
      }

      if (lower.includes("training")) {
        window.location.href = "/training";
        setMessages((m) => [...m, { sender: "ai", text: "📚 Redirecting to training sessions..." }]);
        speak({ text: "Redirecting to training sessions..." });
        setIsTyping(false);
        return;
      }

      // Otherwise, call OpenAI
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMessage }),
      });

      const data = await res.json();
      const reply = data.reply || "Sorry, I couldn’t generate a response right now.";

      setMessages((m) => [...m, { sender: "ai", text: reply }]);
      speak({ text: reply, voice: voices.find((v) => v.name.includes("Female") || v.name.includes("Google")) });
    } catch (err) {
      setMessages((m) => [...m, { sender: "ai", text: "⚠️ Something went wrong, please try again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = (e: any) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newMsg = { sender: "user", text: input.trim() };
    setMessages((m) => [...m, newMsg]);
    handleAIResponse(input);
    setInput("");
    resetTranscript();
  };

  const handleMic = () => {
    if (listening) SpeechRecognition.stopListening();
    else SpeechRecognition.startListening({ continuous: true });
  };

  return (
    <>
      {/* Floating Orb */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-xl flex items-center justify-center relative"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          <span className="absolute inset-0 rounded-full bg-red-500/40 blur-lg animate-pulse -z-10"></span>
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-96 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl text-white flex flex-col"
          >
            <h3 className="text-lg font-semibold text-red-400 mb-2">🎙️ AI Co-Pilot Voice</h3>

            <div className="flex-1 overflow-y-auto scrollbar-hide space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`px-3 py-2 rounded-lg max-w-[80%] text-sm ${
                    msg.sender === "user"
                      ? "ml-auto bg-red-700 text-white"
                      : "bg-white/10 text-gray-100"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}

              {isTyping && (
                <div className="text-gray-400 text-sm flex items-center gap-2">
                  <Loader2 className="animate-spin" size={16} /> AI is processing…
                </div>
              )}
              {speaking && <p className="text-xs text-pink-400 animate-pulse">🔊 AI speaking...</p>}
              <div ref={chatEndRef}></div>
            </div>

            <form onSubmit={handleSend} className="mt-3 flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask or speak..."
                className="flex-1 p-2 rounded-lg bg-white/10 border border-gray-700 text-sm"
              />
              <button
                type="button"
                onClick={handleMic}
                className={`p-2 rounded-lg transition ${
                  listening ? "bg-green-600" : "bg-red-700 hover:bg-red-800"
                }`}
              >
                <Mic size={18} />
              </button>
              <button
                type="submit"
                className="p-2 bg-red-700 hover:bg-red-800 text-white rounded-lg transition"
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
