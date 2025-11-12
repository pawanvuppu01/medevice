"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare } from "lucide-react";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/contact", { cache: "no-store" });
        const data = await res.json();
        if (data.success) {
          setMessages(data.data);
        } else {
          console.error("❌ Failed to fetch messages:", data);
        }
      } catch (err) {
        console.error("🔥 Network error while fetching messages:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8 border border-slate-200"
      >
        <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          📬 Messages Inbox
        </h1>

        {loading ? (
          <p className="text-center text-slate-500">Loading messages...</p>
        ) : messages.length === 0 ? (
          <p className="text-center text-slate-500">No messages yet.</p>
        ) : (
          <div className="space-y-6">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-blue-50 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-center mb-3">
                  <h2 className="font-semibold text-lg text-blue-800">
                    {msg.fullName}
                  </h2>
                  <span className="text-sm text-slate-500">
                    {new Date(msg.createdAt).toLocaleString()}
                  </span>
                </div>

                <div className="space-y-2 text-slate-700">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-700" /> {msg.email}
                  </p>
                  {msg.phone && (
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-700" /> {msg.phone}
                    </p>
                  )}
                  <p className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-700" />{" "}
                    <span className="font-medium">{msg.service}</span>
                  </p>
                </div>

                <p className="mt-4 text-slate-800 bg-white p-4 rounded-xl border border-slate-200 whitespace-pre-wrap">
                  {msg.message}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </main>
  );
}
