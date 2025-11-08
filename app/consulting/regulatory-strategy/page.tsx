"use client";
import { motion } from "framer-motion";

export default function RegulatoryStrategyPage() {
  return (
    <section className="section">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-brandBlue mb-6"
        >
          Regulatory Strategy
        </motion.h1>
        <p className="text-lg text-textMuted mb-12">
          Navigate complex medical device regulations across FDA, EMA, and ISO landscapes
          with confidence and clarity.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="card-title">FDA Submissions</h3>
            <p>510(k), PMA, and De Novo pathways designed for your device category.</p>
          </div>
          <div className="card">
            <h3 className="card-title">EU MDR Readiness</h3>
            <p>Ensure CE marking and technical documentation compliance under MDR 2017/745.</p>
          </div>
          <div className="card">
            <h3 className="card-title">Regulatory Intelligence</h3>
            <p>Stay ahead of evolving global regulations with AI-based monitoring tools.</p>
          </div>
        </div>

        <div className="mt-12">
          <a href="/contact" className="btn-primary">Talk to a Regulatory Expert</a>
        </div>
      </div>
    </section>
  );
}
