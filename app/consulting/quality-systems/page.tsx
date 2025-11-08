"use client";
import { motion } from "framer-motion";

export default function QualitySystemsPage() {
  return (
    <section className="section">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-brandBlue mb-6"
        >
          Quality Systems Engineering
        </motion.h1>
        <p className="text-lg text-textMuted mb-12">
          Building compliant, efficient, and resilient QMS frameworks tailored to
          global MedTech standards.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="card-title">ISO 13485 Compliance</h3>
            <p>We design and document QMS processes aligned with ISO 13485:2016.</p>
          </div>
          <div className="card">
            <h3 className="card-title">CAPA Management</h3>
            <p>Automate corrective actions using analytics and digital workflows.</p>
          </div>
          <div className="card">
            <h3 className="card-title">Internal Audits</h3>
            <p>End-to-end audit preparation and readiness with regulatory insights.</p>
          </div>
        </div>

        <div className="mt-12">
          <a href="/contact" className="btn-primary">Request an Audit Review</a>
        </div>
      </div>
    </section>
  );
}
