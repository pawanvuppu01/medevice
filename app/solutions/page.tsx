"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SolutionsPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800 selection:bg-blue-200 selection:text-blue-900">
      {/* ===== HERO ===== */}
      <section className="relative flex flex-col items-center justify-center text-center py-40 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-blue-900 leading-tight">
            Integrated <span className="italic text-blue-600">Digital Solutions</span>
          </h1>
          <p className="mt-8 text-xl text-slate-700 font-light max-w-3xl mx-auto">
            Transforming the medical-device lifecycle through AI, automation,
            and cloud-native intelligence.
          </p>
        </motion.div>

        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/solutions/solutions-banner.jpg"
            alt="Solutions Banner"
            fill
            priority
            className="object-cover brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-slate-100/80" />
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-10"
        >
          Powering the Future of Connected Healthcare
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto text-lg text-slate-700 leading-relaxed font-light"
        >
          MeDevice’s Integrated Solutions division builds scalable, secure, and
          intelligent platforms for the medical-device ecosystem.  
          From design validation to market release, our tools unify data,
          compliance, and automation into one intelligent framework.
          <br /><br />
          We empower MedTech companies to streamline regulatory processes,
          enhance traceability, and maintain audit-ready systems through AI-driven
          analytics. Each solution is built to adapt — flexible enough for startups,
          powerful enough for global enterprises.
        </motion.p>
      </section>

      {/* ===== PLATFORM PILLARS ===== */}
      <section className="py-24 px-6 bg-gradient-to-r from-white via-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-800 mb-10"
        >
          Platform Pillars
        </motion.h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-left">
          {[
            {
              title: "AI-Driven Documentation",
              desc: "Generate, validate, and version-control design history files automatically using our compliance-focused NLP engine.",
            },
            {
              title: "Regulatory Cloud Engine",
              desc: "Centralized data lake for managing FDA, MDR, and ISO compliance records with automated audit trails and e-signatures.",
            },
            {
              title: "Smart Validation Workflows",
              desc: "Build and execute protocol test cases digitally, with real-time dashboards for verification and validation cycles.",
            },
            {
              title: "Analytics & Dashboards",
              desc: "Visualize device performance, supplier metrics, and quality KPIs in real time using our built-in Power BI–style dashboards.",
            },
          ].map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                {pillar.title}
              </h3>
              <p className="text-slate-700 font-light leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-10"
        >
          Benefits of Our Integrated Ecosystem
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto text-lg text-slate-700 leading-relaxed font-light mb-16"
        >
          Every component of the MeDevice Cloud Platform is designed to enhance
          productivity, compliance, and collaboration.  
          Whether you’re a startup needing structured workflows or an enterprise
          optimizing thousands of device SKUs, our system grows with you.
        </motion.p>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              title: "Unified Data Integrity",
              desc: "Single source of truth across your design, testing, and regulatory systems ensures accuracy and confidence.",
            },
            {
              title: "Accelerated Submissions",
              desc: "Automated generation of submission packages reduces preparation time by up to 60%, ensuring faster approvals.",
            },
            {
              title: "Predictive Insights",
              desc: "Our AI layer learns from your operational data to predict non-conformities and recommend proactive mitigations.",
            },
          ].map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                {benefit.title}
              </h3>
              <p className="text-slate-700 font-light leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== TECHNOLOGY STACK ===== */}
      <section className="py-24 px-6 bg-gradient-to-r from-white via-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-800 mb-10"
        >
          Technology Stack & Integration
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto text-lg text-slate-700 leading-relaxed font-light mb-16"
        >
          Built using modern frameworks and secure architectures, MeDevice
          Cloud integrates seamlessly with AWS, Azure, Salesforce Health Cloud,
          and enterprise ERP systems.  
          Our modular microservices architecture supports real-time analytics,
          multi-tenant security, and zero-downtime updates.
          <br /><br />
          API endpoints allow bidirectional data exchange with PLM and LIMS
          platforms, while encryption and audit logging ensure compliance with
          HIPAA and GDPR.
        </motion.p>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-28 text-center bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Build Your Connected MedTech Future
        </h2>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg mb-10 font-light">
          Join organizations that trust MeDevice to unify innovation and
          compliance in one intelligent ecosystem.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:bg-blue-100 hover:scale-105 transition-all"
        >
          Schedule a Demo
        </Link>
      </section>

      <footer className="py-10 text-center text-slate-500 text-sm bg-white border-t border-slate-200">
        © {new Date().getFullYear()} MeDevice Inc. | Empowering MedTech Through AI
      </footer>
    </main>
  );
}
