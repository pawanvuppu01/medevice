"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function StaffingPage() {
  return (
    <main className="bg-gradient-to-b from-black via-gray-950 to-black text-gray-100 min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <Image
          src="/images/staffing-banner.jpg"
          alt="Staffing and Recruiting for MedTech"
          fill
          priority
          className="object-cover brightness-[0.45]"
        />
        <div className="relative z-10 px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent leading-tight"
          >
            Global MedTech Talent — Powered by Precision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto"
          >
            We connect MedTech innovators with world-class engineering, regulatory,
            and AI professionals — enabling compliant, scalable, and agile growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex justify-center gap-6"
          >
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition-all"
            >
              Hire Talent
            </Link>
            <Link
              href="/consulting"
              className="border border-red-500 text-red-400 hover:text-white hover:bg-red-600/30 px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              Explore Consulting
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 text-center border-t border-gray-800 bg-black/30 backdrop-blur-lg">
        <h2 className="text-4xl font-bold text-red-400 mb-8">Why MeDevice Staffing?</h2>
        <p className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed mb-12">
          Our staffing and recruiting solutions help medical device manufacturers
          build expert teams fast — while ensuring every placement aligns with
          regulatory requirements, technical depth, and cultural fit.
          We deliver speed and precision in talent acquisition for the global MedTech ecosystem.
        </p>
      </section>

      {/* ================= EXPERTISE AREAS ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-950 via-black to-gray-900 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-red-400 text-center mb-14">
          Specialized Talent We Provide
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-8">
          {[
            {
              title: "Regulatory Affairs & QA Engineers",
              desc: "Experts in FDA, ISO 13485, MDR, and QMS implementation ensuring global compliance.",
              img: "/images/qa-team.jpg",
            },
            {
              title: "AI & Data Science Specialists",
              desc: "Machine learning engineers, bioinformaticians, and AI auditors transforming diagnostics and digital health.",
              img: "/images/ai-team.jpg",
            },
            {
              title: "Product Design & Validation Engineers",
              desc: "Hardware and software validation professionals skilled in V&V, risk analysis, and usability engineering.",
              img: "/images/design-team.jpg",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-gray-700 hover:border-red-500/40 hover:shadow-red-500/30 transition-all group"
            >
              <Image
                src={card.img}
                alt={card.title}
                width={500}
                height={300}
                className="object-cover w-full h-56 opacity-80 group-hover:opacity-100 transition"
              />
              <div className="p-6 bg-black/60 backdrop-blur-lg">
                <h3 className="text-2xl font-bold text-red-400 mb-3">{card.title}</h3>
                <p className="text-gray-300 text-sm">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= GLOBAL NETWORK ================= */}
      <section className="py-24 text-center bg-black/30 border-t border-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-red-400 mb-8"
        >
          Our Global Talent Network
        </motion.h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-12">
          MeDevice maintains a vast database of certified MedTech professionals across
          25+ countries — enabling rapid, compliant placements for R&D, regulatory,
          and AI-driven health product teams.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-8">
          {[
            { country: "USA", count: "1,200+", field: "FDA & Clinical Engineers" },
            { country: "Germany", count: "900+", field: "MDR Specialists" },
            { country: "India", count: "1,500+", field: "AI & Software Validation" },
            { country: "Japan", count: "700+", field: "Device Design Engineers" },
          ].map((region, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/5 border border-gray-700 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <h3 className="text-2xl font-bold text-red-400">{region.country}</h3>
              <p className="text-gray-300 mt-2">{region.field}</p>
              <p className="text-sm text-gray-400 mt-1">{region.count} professionals</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-gradient-to-r from-red-700 to-pink-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Build Your MedTech Dream Team</h2>
        <p className="max-w-3xl mx-auto text-pink-100 mb-8 text-lg">
          Partner with MeDevice to access elite MedTech talent — specialized, vetted, and aligned with your mission.
        </p>
        <Link
          href="/contact"
          className="bg-white text-red-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:scale-110 hover:bg-gray-100 transition-all"
        >
          Start Hiring
        </Link>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm bg-black border-t border-gray-800">
        © {new Date().getFullYear()} MeDevice Inc. | Global MedTech Staffing
      </footer>
    </main>
  );
}