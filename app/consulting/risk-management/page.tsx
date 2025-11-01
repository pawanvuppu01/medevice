"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaShieldAlt, FaExclamationTriangle, FaHeartbeat, FaBrain, FaChartLine } from "react-icons/fa";

/* Motion Variants */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
});

export default function RiskManagementPage() {
  const domains = [
    {
      title: "Hazard Identification",
      desc: "We conduct systematic analysis to identify hazards, potential harms, and use errors across all product lifecycle stages.",
      icon: <FaExclamationTriangle className="text-red-500 text-4xl mb-3" />,
    },
    {
      title: "Risk Analysis (FMEA/Fault Tree)",
      desc: "Quantify and prioritize risks using advanced FMEA and fault-tree methodologies tailored to medical device standards.",
      icon: <FaBrain className="text-red-500 text-4xl mb-3" />,
    },
    {
      title: "Risk Evaluation & Control",
      desc: "Establish objective criteria for risk acceptability and implement effective control measures with full traceability.",
      icon: <FaShieldAlt className="text-red-500 text-4xl mb-3" />,
    },
    {
      title: "Residual Risk Assessment",
      desc: "Ensure remaining risks are acceptable, supported by quantitative justification and benefit-risk analysis.",
      icon: <FaHeartbeat className="text-red-500 text-4xl mb-3" />,
    },
    {
      title: "Continuous Monitoring",
      desc: "Track field data, complaints, and post-market signals with real-time dashboards and automated risk reassessment.",
      icon: <FaChartLine className="text-red-500 text-4xl mb-3" />,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-200 overflow-hidden">
      {/* 🎬 HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1605902711622-cfb43c4437e1?auto=format&fit=crop&w=2400&q=90"
          alt="Risk Management"
          fill
          className="object-cover brightness-[0.45]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Risk & Reliability Management
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            MeDevice helps you anticipate, assess, and mitigate risk — ensuring regulatory compliance, product safety, and patient trust.
          </p>
        </motion.div>
      </section>

      {/* 🧩 RISK DOMAINS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 text-red-500"
        >
          Our Risk Management Framework
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {domains.map((d, i) => (
            <motion.div
              key={d.title}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group glass p-8 rounded-2xl shadow-lg border border-red-900/40 hover:shadow-red-700/30 hover:-translate-y-2 transition-all text-center"
            >
              <div className="flex justify-center">{d.icon}</div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">{d.title}</h3>
              <p className="text-gray-300 leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⚙️ RISK SCORE SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-28 text-center bg-gradient-to-r from-red-900 via-red-700 to-pink-700"
      >
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Quantify, Visualize, and Control Risk
          </h2>
          <p className="text-gray-100 mb-10 text-lg">
            Our proprietary tools visualize risk exposure and mitigation effectiveness — empowering decision-making backed by data.
          </p>
          <motion.div
            className="relative mx-auto w-48 h-48 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-[0_0_60px_rgba(255,0,90,0.4)]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <p className="text-4xl font-extrabold text-white animate-glow">95%</p>
          </motion.div>
          <p className="text-gray-300 mt-6 italic">
            “Typical MeDevice client risk reduction score within 6 months.”
          </p>
        </div>
      </motion.section>

      {/* 🩺 CTA SECTION */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-28 text-center bg-gradient-to-r from-black via-gray-950 to-black text-white"
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6 text-red-500">
            Minimize Risk. Maximize Safety.
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Partner with MeDevice to implement ISO 14971-aligned risk management frameworks that protect patients, products, and your reputation.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1 }}
            className="inline-block bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all"
          >
            Connect with Our Experts
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}