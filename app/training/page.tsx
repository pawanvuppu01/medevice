"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TrainingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800 selection:bg-blue-200 selection:text-blue-900">
      <section className="relative flex flex-col items-center justify-center text-center py-40 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-blue-900 leading-tight">
            MeDevice <span className="italic text-blue-600">Training & Certification</span>
          </h1>
          <p className="mt-8 text-xl text-slate-700 font-light max-w-3xl mx-auto">
            Empowering professionals and organizations through digital education, 
            real-world compliance labs, and AI-driven upskilling.
          </p>
        </motion.div>

        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/training/training-banner.jpg"
            alt="Training Banner"
            fill
            priority
            className="object-cover brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-slate-100/80" />
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-10"
        >
          Learn. Certify. Lead.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto text-lg text-slate-700 leading-relaxed font-light"
        >
          MeDevice Training provides structured learning designed by experts 
          who live and breathe MedTech compliance, design, and AI.  
          From engineers to executives, our programs transform complex regulations 
          into practical, actionable skills.  
          <br /><br />
          Our certification pathways are recognized across the industry, 
          offering deep dives into FDA QSR, ISO 13485, EU MDR, and AI validation frameworks. 
          Each session blends interactive labs, virtual simulations, 
          and mentorship from domain specialists.
        </motion.p>
      </section>

      <section className="py-24 px-6 bg-gradient-to-r from-white via-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-800 mb-10"
        >
          Core Training Modules
        </motion.h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-left">
          {[
            {
              title: "Regulatory Foundations",
              desc: "Comprehensive overview of global medical-device regulations, risk management, and product lifecycle control.",
            },
            {
              title: "Design Control Systems",
              desc: "Step-by-step workshops on document traceability, validation testing, and quality engineering fundamentals.",
            },
            {
              title: "AI & Digital Health Compliance",
              desc: "Understand FDA’s Good Machine Learning Practice, ethical data use, and algorithm verification in clinical environments.",
            },
            {
              title: "Internal Auditor Certification",
              desc: "Train to conduct ISO-compliant audits and CAPA reviews within your own organization using modern digital tools.",
            },
          ].map((module, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                {module.title}
              </h3>
              <p className="text-slate-700 font-light leading-relaxed">
                {module.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-10"
        >
          Why MeDevice Training?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto text-lg text-slate-700 leading-relaxed font-light"
        >
          Our programs are tailored to your role and responsibility — whether you 
          are in R&D, QA/RA, manufacturing, or leadership.  
          Each learner experiences interactive assessments, 
          case studies from real FDA inspections, and live feedback from experts.  
          <br /><br />
          In a world where compliance expectations evolve faster than product cycles, 
          continuous learning is not an option — it’s a necessity.  
          MeDevice equips professionals with future-ready capabilities to adapt, 
          innovate, and lead confidently.
        </motion.p>
      </section>

      <section className="py-28 text-center bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <h2 className="text-4xl font-bold mb-4">Begin Your Certification Journey</h2>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg mb-10 font-light">
          Join thousands of learners who have advanced their MedTech careers 
          through MeDevice’s certified programs.  
          Your next breakthrough begins here.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:bg-blue-100 hover:scale-105 transition-all"
        >
          Enroll Now
        </Link>
      </section>

      <footer className="py-10 text-center text-slate-500 text-sm bg-white border-t border-slate-200">
        © {new Date().getFullYear()} MeDevice Inc. | Empowering MedTech Through AI
      </footer>
    </main>
  );
}
