"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1601046152860-7e0568b8c2e7?auto=format&fit=crop&w=2400&q=90"
          alt="Contact background"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="relative z-10 px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-4"
          >
            Let’s Build the Future of MedTech Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-gray-200"
          >
            Contact MeDevice to discuss consulting, staffing, training, or collaboration opportunities.
          </motion.p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-8 text-red-900">Get In Touch</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-red-700"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-red-700"
            />
            <textarea
              placeholder="Your Message"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border border-gray-300 p-3 rounded-md h-32 focus:ring-2 focus:ring-red-700"
            />
            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>

          {/* Success Popup */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 bg-green-100 text-green-800 p-4 rounded-lg shadow"
            >
              ✅ Message sent successfully! Our team will reach out shortly.
            </motion.div>
          )}

          {/* Contact Links */}
          <div className="mt-12 text-center space-y-3">
            <a
              href="https://www.google.com/maps/place/123+Innovation+Drive,+San+Jose,+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-red-700 transition"
            >
              📍 123 Innovation Drive, San Jose, CA
            </a>
            <a
              href="tel:+14085551234"
              className="block text-gray-600 hover:text-red-700 transition"
            >
              📞 +1 (408) 555-1234
            </a>
            <a
              href="mailto:hello@medevice.com"
              className="block text-gray-600 hover:text-red-700 transition"
            >
              ✉ hello@medevice.com
            </a>
            <a
              href="https://wa.me/14085551234"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-pink-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Collaborate with MeDevice</h2>
        <p className="max-w-2xl mx-auto text-gray-100 mb-8">
          Whether you’re launching a new product or scaling operations, our experts are ready to support your mission.
        </p>
        <a
          href="mailto:hello@medevice.com"
          className="inline-block bg-white text-red-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          Schedule a Consultation
        </a>
      </section>
    </main>
  );
}
