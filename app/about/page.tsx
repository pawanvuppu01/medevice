"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
            About <span className="italic text-blue-600">MeDevice</span>
          </h1>
          <p className="mt-8 text-xl text-slate-700 font-light max-w-3xl mx-auto">
            A trusted partner in medical-device transformation — where
            innovation, compliance, and human impact converge.
          </p>
        </motion.div>
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/heroes/hero-about.jpg"
            alt="About Hero"
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
          Who We Are
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto text-lg text-slate-700 leading-relaxed font-light"
        >
          MeDevice was founded with a simple but powerful purpose — to empower
          medical innovators with tools, expertise, and strategy that bring
          compliant and life-changing technologies to the global market.
          <br />
          <br />
          Our journey began in 2019 when a small team of biomedical engineers,
          regulatory specialists, and software architects realized that the
          medical-device industry was evolving faster than the frameworks that
          governed it. The need for a bridge between innovation and compliance
          was urgent — and MeDevice was born.
          <br />
          <br />
          Today, we serve clients across 15 countries, supporting every stage
          of device development — from concept design to clinical validation and
          market release. Our solutions merge AI-assisted analytics with
          evidence-based regulatory guidance, reducing timelines and ensuring
          uncompromising quality.
        </motion.p>
      </section>

      <section className="py-24 bg-gradient-to-r from-white via-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-800 mb-10"
        >
          Our Evolution
        </motion.h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 text-left">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              From Vision to Global Impact
            </h3>
            <p className="text-slate-700 font-light leading-relaxed">
              What began as a two-person consultancy in 2019 has evolved into a
              multinational MedTech accelerator. By leveraging emerging
              technologies like machine learning, computer vision, and data
              traceability, we’ve turned compliance into a catalyst for
              innovation.
              <br />
              <br />
              Our collaborations with global manufacturers and research
              institutions have delivered groundbreaking results — from smart
              prosthetics to AI-powered diagnostics that redefine accessibility
              in healthcare.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Our Leadership
            </h3>
            <p className="text-slate-700 font-light leading-relaxed">
              MeDevice’s leadership brings together decades of expertise across
              MedTech engineering, AI, and quality management.  
              <strong> Pawan Vuppu</strong>, our Founder & Chief Innovation
              Officer, leads the global transformation of compliance
              architecture through digital intelligence.  
              Alongside him, experts from biomedical, mechanical, and data
              science backgrounds drive innovation that merges human insight
              with algorithmic precision.
            </p>
          </motion.div>
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
          Innovation Meets Responsibility
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto text-lg text-slate-700 leading-relaxed font-light"
        >
          Every innovation carries responsibility — to patients, to clinicians,
          and to society. At MeDevice, our commitment to safety and compliance
          is not a box to tick; it’s the foundation of everything we build.
          <br />
          <br />
          Through ethical AI design, transparent reporting, and
          cross-disciplinary collaboration, we ensure that every product we
          touch aligns with international standards such as ISO 13485, EU MDR,
          and FDA 21 CFR Part 820.
        </motion.p>
      </section>

      <section className="py-28 text-center bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Join Us in Shaping the Future of MedTech
        </h2>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg mb-10 font-light">
          We invite innovators, engineers, and researchers to be part of our
          global ecosystem. Together, we can create medical solutions that
          elevate lives and empower humanity.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:bg-blue-100 hover:scale-105 transition-all"
        >
          Get in Touch
        </Link>
      </section>

      <footer className="py-10 text-center text-slate-500 text-sm bg-white border-t border-slate-200">
        © {new Date().getFullYear()} MeDevice Inc. | Empowering MedTech Through AI
      </footer>
    </main>
  );
}
