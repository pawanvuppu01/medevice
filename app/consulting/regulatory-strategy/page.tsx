"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle, FaGlobe, FaShieldAlt, FaClipboardList } from "react-icons/fa";

/* Motion Variants */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
});

export default function RegulatoryStrategyPage() {
  const steps = [
    {
      title: "Regulatory Intelligence",
      desc: "Stay ahead of evolving FDA, EU MDR, and global regulatory changes through continuous intelligence tracking.",
      icon: <FaGlobe className="text-red-600 text-3xl" />,
    },
    {
      title: "Gap Assessment & Strategy",
      desc: "Identify compliance gaps, align with ISO 13485, and establish a clear, risk-based regulatory roadmap.",
      icon: <FaClipboardList className="text-red-600 text-3xl" />,
    },
    {
      title: "Submission Management",
      desc: "Prepare and manage 510(k), PMA, CE Technical Files, and other global submissions with precision and clarity.",
      icon: <FaCheckCircle className="text-red-600 text-3xl" />,
    },
    {
      title: "Audit Readiness",
      desc: "Ensure your teams are prepared for FDA, ISO, and Notified Body audits with end-to-end readiness assessments.",
      icon: <FaShieldAlt className="text-red-600 text-3xl" />,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 overflow-hidden">
      {/* 🧭 Hero Section */}
      <section className="relative h-[70vh] flex flex-col justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1581091215367-59ab6d6037e7?auto=format&fit=crop&w=2400&q=90"
          alt="Regulatory Consulting"
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
            Regulatory Strategy & Compliance
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed">
            Navigate the complex global regulatory landscape with MeDevice’s proven framework for FDA, CE, and ISO compliance success.
          </p>
        </motion.div>
      </section>

      {/* 🩺 Timeline Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-pink-600"
        >
          Our Regulatory Pathway
        </motion.h2>

        <div className="relative border-l-4 border-red-600 ml-4 space-y-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp(i * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative pl-10"
            >
              <div className="absolute -left-6 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border-2 border-red-600">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-red-800 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🌍 Global Expertise Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580281657521-80dbd69f3073?auto=format&fit=crop&w=2400&q=90')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8"
          >
            Global MedTech Compliance Expertise
          </motion.h2>
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-gray-100 text-lg leading-relaxed mb-10"
          >
            Our consultants operate across FDA, European MDR/IVDR, Health Canada, and Asia-Pacific frameworks — ensuring seamless submissions and global market access.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1 }}
            className="inline-block bg-white text-red-700 font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-all"
          >
            Schedule a Consultation
          </motion.a>
        </div>
      </section>
    </main>
  );
}