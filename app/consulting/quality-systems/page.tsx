"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaClipboardCheck,
  FaTools,
  FaUserShield,
  FaRegChartBar,
  FaHandsHelping,
  FaSyncAlt,
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

export default function QualitySystemsPage() {
  const modules = [
    {
      title: "CAPA Management",
      desc: "Identify root causes, implement corrective actions, and track effectiveness through robust CAPA systems aligned with ISO 13485.",
      icon: <FaTools className="text-red-600 text-4xl mb-3" />,
    },
    {
      title: "Internal & Supplier Audits",
      desc: "Perform proactive audits to strengthen compliance, supplier reliability, and manufacturing readiness.",
      icon: <FaUserShield className="text-red-600 text-4xl mb-3" />,
    },
    {
      title: "Document Control & Training",
      desc: "Maintain documentation integrity and train teams for operational excellence under controlled workflows.",
      icon: <FaClipboardCheck className="text-red-600 text-4xl mb-3" />,
    },
    {
      title: "QMS Implementation",
      desc: "Establish and optimize Quality Management Systems that integrate seamlessly across design, production, and post-market phases.",
      icon: <FaRegChartBar className="text-red-600 text-4xl mb-3" />,
    },
    {
      title: "Continuous Improvement",
      desc: "Leverage data-driven insights, KPIs, and trend analysis to enhance performance and regulatory resilience.",
      icon: <FaSyncAlt className="text-red-600 text-4xl mb-3" />,
    },
    {
      title: "Client Partnership",
      desc: "Collaborate with MeDevice experts to build sustainable quality frameworks that evolve with your organization.",
      icon: <FaHandsHelping className="text-red-600 text-4xl mb-3" />,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 overflow-hidden">
      {/* 🎬 HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1581092334651-ddf46b49f9cc?auto=format&fit=crop&w=2400&q=90"
          alt="Quality Systems"
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
            Quality Systems Excellence
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed">
            MeDevice transforms compliance frameworks into continuous improvement ecosystems — ensuring safety, reliability, and regulatory trust.
          </p>
        </motion.div>
      </section>

      {/* 🧩 QUALITY MODULES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-pink-600"
        >
          Our Quality System Modules
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {modules.map((module, i) => (
            <motion.div
              key={module.title}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all text-center"
            >
              <div className="flex justify-center">{module.icon}</div>
              <h3 className="text-2xl font-bold text-red-800 mb-2">
                {module.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{module.desc}</p>
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
            Turn Compliance into Competitive Advantage
          </h2>
          <p className="text-gray-100 mb-10 text-lg">
            Let MeDevice help you evolve from reactive compliance to proactive quality leadership — shaping tomorrow’s MedTech excellence.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1 }}
            className="inline-block bg-white text-red-700 font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-all"
          >
            Talk to a Consultant
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}