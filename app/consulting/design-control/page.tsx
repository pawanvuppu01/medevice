"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCogs, FaClipboardCheck, FaDraftingCompass, FaVials, FaRocket } from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
});

export default function DesignControlPage() {
  const phases = [
    {
      icon: <FaDraftingCompass className="text-red-600 text-4xl mb-3" />,
      title: "Concept & Feasibility",
      desc: "We begin by transforming clinical ideas into viable product concepts — assessing technical, regulatory, and market feasibility with precision.",
    },
    {
      icon: <FaCogs className="text-red-600 text-4xl mb-3" />,
      title: "Design & Development",
      desc: "Our experts establish design inputs, risk analyses, and system architecture while maintaining traceability and regulatory alignment.",
    },
    {
      icon: <FaVials className="text-red-600 text-4xl mb-3" />,
      title: "Verification & Validation",
      desc: "We execute robust test plans to confirm design outputs meet intended use and perform rigorous usability evaluations for reliability.",
    },
    {
      icon: <FaClipboardCheck className="text-red-600 text-4xl mb-3" />,
      title: "Design Transfer & Release",
      desc: "Our team ensures a compliant handoff from development to manufacturing — integrating DHF, DMR, and regulatory documentation seamlessly.",
    },
    {
      icon: <FaRocket className="text-red-600 text-4xl mb-3" />,
      title: "Post-Market Feedback Loop",
      desc: "Through data analytics and user insights, we refine performance and feed learnings back into future design cycles for continuous improvement.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 overflow-hidden">
      {/* 🎬 HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1581092334534-7b8f57f11603?auto=format&fit=crop&w=2400&q=90"
          alt="Design Control"
          fill
          className="object-cover brightness-[0.55]"
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
            Design Control & Product Development
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed">
            From clinical concept to market-ready device — MeDevice ensures every step of your design journey meets regulatory excellence and patient safety.
          </p>
        </motion.div>
      </section>

      {/* 🔄 DESIGN PROCESS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-pink-600"
        >
          Our Design Control Lifecycle
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.title}
              variants={fadeUp(i * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all text-center"
            >
              <div className="flex justify-center">{phase.icon}</div>
              <h3 className="text-2xl font-bold text-red-800 mb-2">
                {phase.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🩺 CTA SECTION */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-28 text-center bg-gradient-to-r from-red-700 via-pink-600 to-red-700 text-white"
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6">
            Let’s Build Your Next Medical Breakthrough
          </h2>
          <p className="text-gray-100 mb-10 text-lg">
            Partner with MeDevice for end-to-end product development — where
            innovation, compliance, and patient safety intersect.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1 }}
            className="inline-block bg-white text-red-700 font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-all"
          >
            Get Started Today
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}