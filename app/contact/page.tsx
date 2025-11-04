"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    } catch {
      setFeedback("❌ Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-100 overflow-hidden">
      {/* 🖼️ HERO SECTION */}
      <section className="relative h-[75vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <Image
          src="/images/contact-banner.jpg"
          alt="Contact MeDevice"
          fill
          priority
          className="object-cover brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-pink-500 to-red-400 mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Have questions or want to collaborate? Reach out — we’re here to help you innovate and grow.
          </p>
        </motion.div>
      </section>

      {/* 📨 CONTACT FORM SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 border-t border-gray-800">
        {/* FORM SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-gray-800 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-red-400 mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="p-3 rounded-lg bg-black/40 border border-gray-700 text-white focus:border-red-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="p-3 rounded-lg bg-black/40 border border-gray-700 text-white focus:border-red-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="p-3 rounded-lg bg-black/40 border border-gray-700 text-white focus:border-red-500 outline-none h-40"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              disabled={loading}
              type="submit"
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-pink-500/30 transition-all"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
          {feedback && (
            <p className="text-center mt-4 text-sm text-gray-300">{feedback}</p>
          )}
        </motion.div>

        {/* CONTACT INFO SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col justify-center space-y-8"
        >
          <h2 className="text-3xl font-bold text-red-400 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-md">
            Our experts are available Monday to Friday, 9 AM – 6 PM PST.  
            Send us a message or visit our office.
          </p>

          <div className="space-y-3 text-gray-300">
            <p>📍 123 Innovation Drive, San Francisco, CA, USA</p>
            <p>📧 info@medeviceusa.com</p>
            <p>📞 +1 (415) 555-1234</p>
          </div>

          {/* 🗺️ LIVE GOOGLE MAP EMBED */}
          <div className="rounded-xl overflow-hidden border border-gray-700 shadow-md h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019473871869!2d-122.402049224212!3d37.79225647198793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c0c6bb1b1%3A0x7e0a6b3d3763b9e9!2s123%20Innovation%20Dr%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1698938156004!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MeDevice Office Map"
            ></iframe>
          </div>
        </motion.div>
      </section>

      {/* 🌇 FOOTER */}
      <footer className="py-10 text-center text-gray-500 text-sm bg-black border-t border-gray-800">
        © {new Date().getFullYear()} MeDevice Inc. | All Rights Reserved
      </footer>
    </main>
  );
}
