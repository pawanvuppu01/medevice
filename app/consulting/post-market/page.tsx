"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGlobe,
  FaClipboardList,
  FaFileMedical,
  FaUsersCog,
  FaSearch,
  FaSync,
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

export default function PostMarketPage() {
  const steps = [
    {
      title: "Data Collection & Signal Detection",
      desc: "Aggregate complaint data, field reports, and vigilance events from global markets to identify early warning signals.",
      icon: <FaSearch className="text-red-600 text-3xl" />,
    },
    {
      title: "Trend Analysis & CAPA Integration",
      desc: "Perform statistical analysis to uncover emerging issues and integrate with Corrective and Preventive Actions (CAPA).",
      icon: <FaSync className="text-red-600 text-3xl" />,
    },
    {
      title: "Regulatory Reporting",
      desc: "Ensure timely MDR and vigilance submissions to FDA, EU MDR, and international regulators with complete traceability.",
      icon: <FaFileMedical className="text-red-600 text-3xl" />,
    },
    {
      title: "Periodic Safety Updates",
      desc: "Prepare and maintain PSURs and PMSRs that reflect real-time safety performance and benefit-risk balance.",
      icon: <FaClipboardList className="text-red-600 text-3xl" />,
    },
    {
      title: "Continuous Improvement",
      desc: "Close the loop with design, manufacturing, and quality teams for preventive risk mitigation and product optimization.",
      icon: <FaUsersCog className="text-red-600 text-3xl" />,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-200 overflow-hidden">
      {/* 🎬 HERO SECTION */}
      <section className="relative h-[75vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581091215367-59ab6cfa7432?auto=format&fit=crop&w=2400&q=90"
          alt="Post Market Surveillance"
          fill
          priority
          className="object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Post-Market Surveillance & Vigilance
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            MeDevice delivers global post-market safety solutions to ensure continuous compliance, early signal detection, and patient protection.
          </p>
        </motion.div>
      </section>

      {/* 🌍 GLOBAL MONITORING SECTION */}
      <section className="relative py-20 text-center bg-gradient-to-br from-red-900 via-red-800 to-red-600">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&fit=crop&w=2400&q=90')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Global Compliance & Vigilance Expertise
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Our experts monitor safety signals across continents — aligning
              with evolving international regulations while maintaining full
              traceability and patient safety.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <FaGlobe className="text-white text-8xl animate-float" />
          </motion.div>
        </div>
      </section>

      {/* 🧩 TIMELINE SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24 relative">
        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 text-red-600"
        >
          Post-Market Excellence Workflow
        </motion.h2>

        <div className="relative border-l border-red-700/60 ml-4 pl-8 space-y-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp(i * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-6 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-red-700 to-pink-600 shadow-lg">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
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
        className="relative py-28 text-center bg-gradient-to-r from-black via-gray-950 to-black text-white"
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6 text-red-600">
            Strengthen Global Vigilance
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Stay compliant and proactive with MeDevice’s post-market consulting
            — ensuring global regulatory harmony and continuous product safety.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1 }}
            className="inline-block bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-pink-500/40 transition-all"
          >
            Partner with Our Vigilance Experts
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}