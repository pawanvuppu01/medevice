"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaNetworkWired,
  FaCloud,
  FaMicrochip,
  FaRobot,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
});

export default function IntegratedSolutionsPage() {
  const pillars = [
    {
      title: "AI & Predictive Analytics",
      desc: "Use machine learning to optimize device performance, predict failures, and personalize patient care.",
      icon: <FaRobot className="text-pink-500 text-4xl mb-3" />,
    },
    {
      title: "IoT Device Connectivity",
      desc: "Enable real-time monitoring through secure IoT integrations and remote telemetry dashboards.",
      icon: <FaNetworkWired className="text-pink-500 text-4xl mb-3" />,
    },
    {
      title: "Cloud Infrastructure",
      desc: "Deploy scalable and HIPAA-compliant architectures using Azure, AWS, or GCP for device data management.",
      icon: <FaCloud className="text-pink-500 text-4xl mb-3" />,
    },
    {
      title: "Embedded Systems",
      desc: "Design microcontroller-based devices with low-latency performance and medical-grade reliability.",
      icon: <FaMicrochip className="text-pink-500 text-4xl mb-3" />,
    },
    {
      title: "Cybersecurity & Compliance",
      desc: "Ensure device security and regulatory readiness through end-to-end encryption and FDA cybersecurity frameworks.",
      icon: <FaShieldAlt className="text-pink-500 text-4xl mb-3" />,
    },
    {
      title: "Data Visualization & Insights",
      desc: "Transform device and clinical data into actionable insights using Power BI, Tableau, and custom dashboards.",
      icon: <FaChartLine className="text-pink-500 text-4xl mb-3" />,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-200 overflow-hidden">
      {/* 🎬 HERO SECTION */}
      <section className="relative h-[75vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555617117-08a69f0d6c52?auto=format&fit=crop&w=2400&q=90"
          alt="Integrated Solutions"
          fill
          priority
          className="object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-pink-500 to-red-400 mb-6">
            Integrated Solutions
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Connecting innovation, intelligence, and compliance — MeDevice integrates end-to-end technology ecosystems that power next-generation healthcare.
          </p>
        </motion.div>
      </section>

      {/* 💡 SOLUTION PILLARS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-600"
        >
          Our Core Technology Pillars
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white/5 backdrop-blur-xl border border-pink-600/30 p-8 rounded-2xl shadow-lg hover:shadow-pink-500/40 transition-all text-center"
            >
              <div className="flex justify-center">{p.icon}</div>
              <h3 className="text-2xl font-bold text-pink-400 mb-2">{p.title}</h3>
              <p className="text-gray-300 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧭 PROCESS FLOW */}
      <section className="relative py-24 bg-gradient-to-r from-red-900 via-red-800 to-red-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091870627-3fba0f1c16d3?auto=format&fit=crop&w=2400&q=90')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-center mb-16"
          >
            Our Integration Process
          </motion.h2>

          <div className="relative border-l border-white/30 ml-4 pl-8 space-y-12">
            {[
              "Requirements & Architecture Design",
              "API Integration & Cloud Connectivity",
              "System Validation & Compliance Testing",
              "Deployment, Monitoring & Optimization",
            ].map((step, i) => (
              <motion.div
                key={step}
                variants={fadeUp(i * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-6 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-pink-600 to-red-600 shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-2">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 CTA SECTION */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-28 text-center bg-gradient-to-r from-black via-gray-950 to-black text-white"
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6 text-pink-500">
            Partner for Digital Transformation
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            From connected devices to cloud AI — MeDevice delivers the integrated backbone that powers medical innovation worldwide.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1 }}
            className="inline-block bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-pink-500/40 transition-all"
          >
            Request a Consultation
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}