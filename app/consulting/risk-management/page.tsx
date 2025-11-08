"use client";
import { motion } from "framer-motion";

export default function RiskManagementPage() {
  return (
    <section className="section-alt">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-brandBlue mb-6"
        >
          Risk Management & Compliance
        </motion.h1>
        <p className="text-lg text-textMuted mb-12">
          We help MedTech companies anticipate, quantify, and mitigate design and
          post-market risks using data-driven insights.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="card-title">Design Risk Analysis</h3>
            <p>Perform FMEA and hazard analysis using AI-driven decision matrices.</p>
          </div>
          <div className="card">
            <h3 className="card-title">Post-Market Surveillance</h3>
            <p>Establish proactive monitoring frameworks for product safety and reliability.</p>
          </div>
        </div>

        <div className="mt-12">
          <a href="/contact" className="btn-primary">Get a Risk Assessment</a>
        </div>
      </div>
    </section>
  );
}
