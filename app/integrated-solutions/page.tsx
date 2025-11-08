"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Cpu, Network, Brain, Cloud, Workflow, ArrowRight } from "lucide-react";

export default function IntegratedSolutionsPage() {
  const solutions = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      title: "Digital Transformation in MedTech",
      desc: "We design and deploy connected digital ecosystems that unify R&D, regulatory, and manufacturing operations. Our platforms enable real-time data visibility, automation, and analytics across your organization.",
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "AI-Powered Validation Systems",
      desc: "Leverage artificial intelligence to accelerate design validation, quality testing, and compliance reporting. Our frameworks integrate predictive algorithms into device lifecycle management workflows.",
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      title: "Cloud-Native Compliance Platforms",
      desc: "We architect secure, scalable cloud infrastructures built for regulated industries. Our GxP-ready environments simplify documentation, audit trails, and data integrity validation.",
    },
    {
      icon: <Network className="w-8 h-8 text-blue-600" />,
      title: "Interoperability & Data Integration",
      desc: "Achieve seamless data flow between systems like ERP, MES, QMS, and PLM. Our engineers build integration layers that connect device telemetry, clinical systems, and supply chain intelligence.",
    },
    {
      icon: <Workflow className="w-8 h-8 text-blue-600" />,
      title: "Workflow Automation & DevOps",
      desc: "We implement CI/CD pipelines, Infrastructure-as-Code, and automated testing for medical software. Reduce manual overhead, minimize risk, and achieve rapid, compliant releases.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50 text-slate-800">
      {/* ================= HERO ================= */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/solutions/integrated-bg.jpg"
          alt="Integrated Solutions"
          fill
          priority
          className="object-cover brightness-[0.55]"
        />
        <div className="relative z-10 max-w-4xl text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-xl"
          >
            Integrated Solutions for a Smarter MedTech Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-slate-100 mt-6 leading-relaxed"
          >
            MeDevice transforms how MedTech enterprises design, build, and
            manage digital systems — combining AI, cloud, and data intelligence
            to create connected, compliant, and future-ready organizations.
          </motion.p>
        </div>
      </section>

      {/* ================= SOLUTION OVERVIEW ================= */}
      <section className="py-24 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-800 mb-8"
        >
          Our Core Digital Integration Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-slate-600 text-lg mb-14 leading-relaxed"
        >
          Our integrated solutions go beyond technology deployment — they create
          synergy between innovation, compliance, and operational excellence.
          Whether you’re modernizing legacy systems or launching an intelligent
          cloud platform, we design ecosystems that scale seamlessly with your
          vision.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-left"
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                {s.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Empowering MedTech Through Connected Intelligence
            </h2>
            <p className="text-blue-100 leading-relaxed mb-6">
              Every successful MedTech product relies on synchronized systems —
              from R&D to manufacturing to compliance. MeDevice builds digital
              bridges that connect every stage of your product lifecycle,
              ensuring quality, speed, and visibility.
            </p>
            <ul className="space-y-3 text-blue-100">
              <li>✅ Real-time monitoring and predictive analytics</li>
              <li>✅ Automated document workflows and audit readiness</li>
              <li>✅ GxP-compliant data exchange and reporting pipelines</li>
              <li>✅ Cloud migration strategies for regulated environments</li>
              <li>✅ Cross-functional team enablement through unified data</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/solutions/integration-illustration.jpg"
              alt="Integration Illustration"
              width={600}
              height={400}
              className="rounded-3xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-800 mb-6"
        >
          Let’s Build Your Connected Ecosystem
        </motion.h2>
        <p className="max-w-3xl mx-auto text-slate-600 text-lg mb-8">
          Partner with MeDevice to develop an integrated, intelligent
          infrastructure that streamlines compliance, boosts innovation, and
          accelerates time-to-market.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition-all"
        >
          Get in Touch <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </main>
  );
}
