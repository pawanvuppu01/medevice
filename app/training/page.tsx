"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TrainingPage() {
  const trainings = [
    {
      title: "AI-Driven Regulatory Intelligence",
      desc: "Learn how to apply machine learning and natural-language models to automate regulatory tracking, risk classification, and compliance audits across FDA, MDR, and ISO standards.",
      img: "/images/training-ai.jpg",
      duration: "4 Weeks",
      level: "Intermediate",
      link: "/contact",
    },
    {
      title: "Quality Systems & Risk Management",
      desc: "A deep dive into ISO 13485, CAPA systems, root-cause analysis, and risk-based design verification. Gain practical experience building compliant QMS workflows.",
      img: "/images/training-quality.jpg",
      duration: "6 Weeks",
      level: "Advanced",
      link: "/contact",
    },
    {
      title: "Design Control & Human Factors Engineering",
      desc: "Understand the full design-control lifecycle—from user needs and design inputs to validation testing and usability studies—tailored for MedTech innovators.",
      img: "/images/training-design.jpg",
      duration: "5 Weeks",
      level: "Beginner to Advanced",
      link: "/contact",
    },
    {
      title: "Data Integrity & Validation Automation",
      desc: "Master modern tools for CSV, IQ/OQ/PQ validation, and data-integrity automation using AI and cloud-native workflows. Includes real-world case studies.",
      img: "/images/training-validation.jpg",
      duration: "3 Weeks",
      level: "Intermediate",
      link: "/contact",
    },
    {
      title: "Leadership in RegTech and Compliance Innovation",
      desc: "For senior professionals: build leadership capability in digital compliance transformation, regulatory AI governance, and change-management strategy.",
      img: "/images/training-leadership.jpg",
      duration: "8 Weeks",
      level: "Executive",
      link: "/contact",
    },
  ];

  return (
    <main className="bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-100 min-h-screen">
      {/* HERO */}
      <section className="relative h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <Image
          src="/images/training-banner.jpg"
          alt="MeDevice Training Programs"
          fill
          priority
          className="object-cover brightness-[0.4]"
        />
        <div className="relative z-10 px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent leading-tight"
          >
            Transform Your Team with Expert-Led Training
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto"
          >
            Our curated programs empower MedTech professionals to integrate AI, automation, and compliance excellence into every stage of product development.
          </motion.p>
        </div>
      </section>

      {/* TRAINING CARDS */}
      <section className="py-24 bg-black/30 backdrop-blur-lg border-t border-gray-800">
        <h2 className="text-4xl font-bold text-center text-red-400 mb-14">
          Featured Training Tracks
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-8">
          {trainings.map((t, index) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 50px rgba(255,0,0,0.25)",
              }}
              className="bg-white/5 border border-gray-700/50 rounded-3xl overflow-hidden text-left hover:border-red-500/40 transition-all"
            >
              <Image
                src={t.img}
                alt={t.title}
                width={600}
                height={400}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-red-400 mb-3">{t.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{t.desc}</p>
                <div className="flex justify-between text-sm text-gray-400 mb-4">
                  <span>⏱ {t.duration}</span>
                  <span>🎯 {t.level}</span>
                </div>
                <Link
                  href={t.link}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition"
                >
                  Enroll Now →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-red-700 to-pink-600 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Upskill Your MedTech Team?
        </h2>
        <p className="max-w-3xl mx-auto text-pink-100 mb-8 text-lg">
          We offer both live virtual and on-site training sessions designed for regulatory, quality, and engineering teams.
        </p>
        <Link
          href="/contact"
          className="bg-white text-red-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:scale-110 hover:bg-gray-100 transition-all"
        >
          Request Training Proposal
        </Link>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm bg-black border-t border-gray-800">
        © {new Date().getFullYear()} MeDevice Inc. | Building Excellence through Education
      </footer>
    </main>
  );
}