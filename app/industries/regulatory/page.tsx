"use client";
import { motion } from "framer-motion";

export default function RegulatoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50 text-slate-800">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/industries/regulatory.jpg"
          alt="Regulatory Affairs"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-xl"
        >
          Regulatory & Quality Systems
        </motion.h1>
      </section>

      <section className="max-w-5xl mx-auto py-24 px-6 space-y-8 text-lg leading-relaxed text-slate-700">
        <p>
          Regulatory compliance is the foundation of safe, reliable MedTech.
          MeDevice guides organizations through complex frameworks such as FDA
          21 CFR 820, EU MDR, and ISO 13485, ensuring every process aligns with
          the latest quality standards.
        </p>

        <p>
          We build and modernize Quality Management Systems, automate CAPA
          tracking, and digitize document control using eQMS and AI
          capabilities. Our consultants help you prepare technical files,
          conduct internal audits, and navigate pre-submission meetings with
          regulatory authorities.
        </p>

        <p>
          By embedding compliance into design and manufacturing, MeDevice turns
          regulation into a catalyst for innovation instead of a bottleneck.
        </p>

        <div className="pt-8">
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition"
          >
            Connect with our Regulatory Experts →
          </a>
        </div>
      </section>
    </main>
  );
}
