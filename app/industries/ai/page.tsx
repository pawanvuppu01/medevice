"use client";
import { motion } from "framer-motion";

export default function AIIndustryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50 text-slate-800">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/industries/ai.jpg"
          alt="AI in Healthcare"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-xl"
        >
          AI & Data Science in Healthcare
        </motion.h1>
      </section>

      <section className="max-w-5xl mx-auto py-24 px-6 space-y-8 text-lg leading-relaxed text-slate-700">
        <p>
          Artificial intelligence is transforming healthcare by enabling
          real-time insights, predictive diagnosis, and data-driven precision
          medicine. MeDevice helps organizations design, train, and validate AI
          systems that meet strict regulatory and ethical standards.
        </p>

        <p>
          Our expertise covers algorithm transparency, model explainability,
          bias evaluation, and FDA-aligned SaMD validation. We integrate MLOps
          and FAIR data principles to make every AI workflow auditable and
          compliant.
        </p>

        <p>
          Whether you’re building diagnostic imaging models or hospital decision
          support tools, our AI consultants ensure scalability, reliability, and
          patient-centric safety at every step.
        </p>

        <div className="pt-8">
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition"
          >
            Partner with our AI Experts →
          </a>
        </div>
      </section>
    </main>
  );
}
