"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setFeedback("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setFeedback(`❌ ${data.error}`);
      }
    } catch (err) {
      setFeedback("❌ Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-100 p-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-red-500 text-center mb-8"
      >
        Contact Us
      </motion.h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white/10 p-8 rounded-2xl border border-gray-700 shadow-lg"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="p-3 rounded-lg bg-black/40 border border-gray-600 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="p-3 rounded-lg bg-black/40 border border-gray-600 text-white"
          />
        </div>
        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          className="p-3 mt-4 rounded-lg bg-black/40 border border-gray-600 text-white w-full h-40"
        />
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {feedback && (
        <p className="text-center mt-6 text-sm text-gray-300">{feedback}</p>
      )}

      <footer className="mt-16 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MeDevice Inc. | All rights reserved.
      </footer>
    </main>
  );
}