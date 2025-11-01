"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaRobot,
  FaChartLine,
  FaDatabase,
  FaCogs,
  FaProjectDiagram,
  FaHeartbeat,
} from "react-icons/fa";

/* Motion Variants */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
});

export default function AIMedTechPage() {
  const services = [
    {
      icon: <FaRobot className="text-pink-500 text-4xl mb-3" />,
      title: "AI-Powered Design",
      desc: "Integrate machine learning into product design to predict performance, enhance safety, and accelerate R&D timelines.",
    },
    {
      icon: <FaDatabase className="text-pink-500 text-4xl mb-3" />,
      title: "Data-Driven Validation",
      desc: "Validate AI models for FDA readiness using real-world evidence, synthetic data, and advanced statistical techniques.",
    },
    {
      icon: <FaProjectDiagram className="text-pink-500 text-4xl mb-3" />,
      title: "Digital Twins & Simulation",
      desc: "Create virtual replicas of devices for performance simulation, predictive maintenance, and clinical optimization.",
    },
    {
      icon: <FaChartLine className="text-pink-500 text-4xl mb-3" />,
      title: "Predictive Analytics",
      desc: "Leverage AI to forecast product reliability, detect anomalies early, and ensure continuous compliance monitoring.",
    },
    {
      icon: <FaCogs className="text-pink-500 text-4xl mb-3" />,
      title: "Automation & Workflow Integration",
      desc: "Automate risk assessments, report generation, and CAPA tracking using secure cloud-based AI workflows.",
    },
    {
      icon: <FaHeartbeat className="text-pink-500 text-4xl mb-3" />,
      title: "AI in Clinical Insights",
      desc: "Unlock patient-centric insights from device usage and clinical feedback for better outcomes and faster innovation.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-100 overflow-hidden">
      {/* 🎬 HERO SECTION */}
      <section className="relative h-[75vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2400&q=90"
          alt="AI in MedTech"
          fill
          priority
          className="object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-pink-500 to-red-400 mb-6">
            AI in MedTech & Automation
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Harness artificial intelligence to drive innovation, accelerate
            compliance, and personalize patient outcomes — with MeDevice’s
            end-to-end AI consulting.
          </p>
        </motion.div>
      </section>

      {/* 🤖 AI SERVICE GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.h2
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-600"
        >
          AI-Powered MedTech Capabilities
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white/5 backdrop-blur-xl border border-pink-600/30 p-8 rounded-2xl shadow-lg hover:shadow-pink-500/40 transition-all"
            >
              <div className="flex justify-center">{s.icon}</div>
              <h3 className="text-2xl font-bold text-pink-400 mb-2 text-center">
                {s.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-center">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⚙️ AI VISUALIZATION SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-28 text-center bg-gradient-to-r from-red-900 via-pink-800 to-red-700"
      >
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Smarter, Faster, and Safer Innovation
          </h2>
          <p className="text-gray-100 mb-10 text-lg">
            We apply machine learning and real-time analytics to accelerate
            compliance and enhance reliability — all while maintaining
            traceability and transparency for FDA readiness.
          </p>
          <motion.div
            className="relative mx-auto w-52 h-52 rounded-full bg-gradient-to-br from-pink-500 via-red-600 to-red-500 flex items-center justify-center shadow-[0_0_80px_rgba(255,0,120,0.5)]"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-700 via-pink-600 to-red-700 opacity-70 blur-3xl" />
            <p className="text-3xl font-extrabold text-white animate-glow">
              AI ∞
            </p>
          </motion.div>
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
          <h2 className="text-4xl font-extrabold mb-6 text-pink-500">
            Empower Your Devices with Intelligence
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Partner with MeDevice to integrate AI into your MedTech innovations
            — turning data into smarter, safer, and faster outcomes.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1 }}
            className="inline-block bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-pink-400/50 transition-all"
          >
            Schedule an AI Consultation
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}