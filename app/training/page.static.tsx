"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaBrain,
  FaUserGraduate,
  FaClipboardCheck,
  FaRobot,
  FaChartBar,
  FaHandsHelping,
} from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
});

export default function TrainingPage() {
  const courses = [
    {
      title: "Regulatory Affairs Masterclass",
      desc: "Deep dive into FDA, MDR, and ISO regulations to fast-track your compliance expertise.",
      icon: <FaClipboardCheck className="text-red-600 text-4xl mb-3" />,
    },
    {
      title: "AI in Medical Devices",
      desc: "Understand AI/ML model validation, data ethics, and FDA approval strategies for AI-enabled devices.",
      icon: <FaRobot className="text-red-600 text-4xl mb-3" />,
    },
    {
      title: "Quality Management & CAPA",
      desc: "Build proficiency in ISO 13485, CAPA systems, and risk-based QMS implementation.",
      icon: <FaChartBar className="text-red-600 text-4xl mb-3" />,
    },
    {
      title: "Human Factors & Usability",
      desc: "Learn human-centered design principles for safer, user-friendly medical devices.",
      icon: <FaUserGraduate className="text-red-600 text-4xl mb-3" />,
    },
    {
      title: "Clinical Data & Post-Market",
      desc: "Analyze PMS and clinical data for better device lifecycle management and compliance.",
      icon: <FaBrain className="text-red-600 text-4xl mb-3" />,
    },
    {
      title: "Corporate Team Training",
      desc: "Customized, on-site or virtual sessions designed for MedTech companies.",
      icon: <FaHandsHelping className="text-red-600 text-4xl mb-3" />,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-200 overflow-hidden">
      {/* 🎬 HERO SECTION */}
      <section className="relative h-[75vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581092334961-9a26f0d6c3da?auto=format&fit=crop&w=2400&q=90"
          alt="Training Programs"
          fill
          priority
          className="object-cover brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 max-w-3xl"
        >
          <h1 className="text-6xl font-extrabold text-white mb-4">
            Training & Development
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Empower your teams with the latest MedTech skills — from regulatory mastery to AI innovation.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            Enroll Now
          </motion.a>
        </motion.div>
      </section>

      {/* 🎓 COURSE GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 text-red-600"
        >
          Explore Our Training Programs
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-red-800/30 hover:shadow-red-500/30 hover:-translate-y-2 transition-all text-center"
            >
              <div className="flex justify-center">{c.icon}</div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">{c.title}</h3>
              <p className="text-gray-300 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧠 LEARNING JOURNEY */}
      <section className="relative py-24 bg-gradient-to-r from-red-900 via-red-800 to-red-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553484771-0c7cb7b8a4d4?auto=format&fit=crop&w=2400&q=90')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-center mb-16"
          >
            The MeDevice Learning Journey
          </motion.h2>

          <div className="relative border-l border-white/30 ml-4 pl-8 space-y-12">
            {[
              "Assess Team Skill Gaps",
              "Design Custom Learning Plan",
              "Deliver Interactive Sessions",
              "Evaluate Knowledge Outcomes",
              "Certify and Report Progress",
              "Support Continuous Growth",
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

      {/* 🚀 CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-28 text-center bg-gradient-to-r from-black via-gray-950 to-black text-white"
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6 text-red-500">
            Upskill Your MedTech Workforce
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Empower your team to stay ahead in compliance, innovation, and AI-driven healthcare technology.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1 }}
            className="inline-block bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-pink-500/40 transition-all"
          >
            Get a Training Quote
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}