"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function CareersPage() {
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      title: "AI Research Engineer",
      type: "Full-Time",
      location: "San Francisco, CA / Remote",
      desc: "Work on next-gen AI models for regulatory intelligence, MedTech optimization, and document automation.",
    },
    {
      title: "Regulatory Data Analyst",
      type: "Full-Time",
      location: "Hyderabad, India / Hybrid",
      desc: "Analyze global medical compliance datasets to train AI systems and optimize audit readiness.",
    },
    {
      title: "Frontend Developer (Next.js + Tailwind)",
      type: "Full-Time",
      location: "Remote",
      desc: "Build interactive and accessible healthcare dashboards, powered by real-time analytics and 3D data visualization.",
    },
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("📝 Application Submitted:", form);
    setSubmitted(true);
  }

  return (
    <main className="bg-gradient-to-b from-black via-gray-950 to-black text-gray-100 min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative h-[85vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <Image
          src="/images/careers-banner.jpg"
          alt="Careers at MeDevice"
          fill
          priority
          className="object-cover brightness-[0.45]"
        />
        <div className="relative z-10 px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent"
          >
            Join the MeDevice Movement
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto"
          >
            Be part of a global AI-driven mission transforming healthcare technology.
          </motion.p>
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="py-24 border-t border-gray-800 bg-black/40 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-red-400 text-center mb-14">
          Current Openings
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 border border-gray-700 rounded-3xl p-6 hover:bg-white/10 transition-all shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-red-400 mb-2">
                {job.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2">{job.type}</p>
              <p className="text-sm text-gray-400 mb-3">{job.location}</p>
              <p className="text-gray-300 mb-4">{job.desc}</p>
              <button
                onClick={() => setForm({ ...form, role: job.title })}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-5 rounded-full text-sm font-semibold transition-all"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CULTURE ================= */}
      <section className="py-24 border-t border-gray-800 bg-gradient-to-b from-gray-950 to-black text-center">
        <h2 className="text-4xl font-bold text-red-400 mb-10">
          Life at MeDevice
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-lg">
          We blend science, creativity, and purpose. Every engineer, analyst, and innovator here shares a mission — to make technology empathetic, compliant, and global.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
          {[
            { title: "Hybrid Work Model", icon: "🌍", desc: "Flexible remote and in-office options for balance and innovation." },
            { title: "Continuous Learning", icon: "📚", desc: "Upskilling programs with AI, Cloud, and Regulatory Bootcamps." },
            { title: "Inclusive Culture", icon: "🤝", desc: "We celebrate diversity, equity, and the spirit of collaboration." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/5 border border-gray-700 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-red-400 mb-1">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= APPLICATION FORM ================= */}
      <section className="py-24 border-t border-gray-800 bg-black/40 backdrop-blur-md">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-400 mb-8">
            Submit Your Application
          </h2>
          <p className="text-gray-400 mb-10">
            Tell us why you’re passionate about transforming MedTech with AI.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white/5 border border-gray-700 p-8 rounded-2xl text-left"
            >
              <div>
                <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Position</label>
                <input
                  type="text"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  placeholder="AI Research Engineer"
                  className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-gray-100"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-xl transition"
              >
                Send Application
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-600/20 border border-green-500/40 p-6 rounded-xl text-green-300 mt-8"
            >
              ✅ Thank you! Your application has been received. Our HR team will reach out soon.
            </motion.div>
          )}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-gradient-to-r from-red-700 to-pink-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Shape the Future with MeDevice</h2>
        <p className="max-w-3xl mx-auto text-pink-100 mb-8 text-lg">
          Whether you’re an engineer, analyst, or innovator — your next big breakthrough starts here.
        </p>
        <a
          href="/contact"
          className="bg-white text-red-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:scale-110 hover:bg-gray-100 transition-all"
        >
          Contact HR
        </a>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm bg-black border-t border-gray-800">
        © {new Date().getFullYear()} MeDevice Inc. | Innovate. Inspire. Impact.
      </footer>
    </main>
  );
}