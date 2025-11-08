"use client";
import { motion } from "framer-motion";

export default function AIMedTechPage() {
  return (
    <section className="section-alt">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-brandBlue mb-6"
        >
          AI & MedTech Innovation
        </motion.h1>
        <p className="text-lg text-textMuted mb-12">
          Empowering medical device development through artificial intelligence and
          predictive compliance modeling.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="card">
            <h3 className="card-title">Predictive Compliance</h3>
            <p>
              Integrate AI-driven compliance checks early in your device lifecycle
              to reduce time-to-approval.
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Data Integrity</h3>
            <p>
              Ensure FDA-ready datasets and secure pipelines for validation and
              reporting.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a href="/contact" className="btn-primary">Consult Our Experts</a>
        </div>
      </div>
    </section>
  );
}
