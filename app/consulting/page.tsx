"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ConsultingPage() {
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
            Consulting <span className="italic text-blue-600">Excellence</span>
          </h1>
          <p className="mt-8 text-xl text-slate-700 font-light max-w-3xl mx-auto">
            MeDevice’s consulting division helps MedTech innovators navigate
            global regulations, build scalable systems, and accelerate their
            journey from prototype to patient-ready solutions.
          </p>
        </motion.div>

        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/consulting-banner.jpg"
            alt="Consulting Banner"
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
          Strategic MedTech Consulting
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto text-lg text-slate-700 leading-relaxed font-light"
        >
          At MeDevice, we go beyond compliance. We design transformation.  
          Our consulting services align technology, process, and governance to
          ensure your innovations reach markets faster, safer, and stronger.  
          We specialize in quality system development, design controls,
          regulatory submissions, and clinical readiness.
          <br />
          <br />
          Whether you are a startup building your first device or an enterprise
          scaling globally, our advisory approach combines cross-disciplinary
          insight with industry-leading digital tools.
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
          What We Deliver
        </motion.h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-left">
          {[
            {
              title: "Regulatory Strategy & Submissions",
              desc: "End-to-end planning for FDA, EU MDR, and international certifications — from pre-submission to clearance.",
            },
            {
              title: "Design Control Systems",
              desc: "Comprehensive risk management and traceability matrices to align design and documentation with ISO 13485.",
            },
            {
              title: "AI-Integrated Compliance Tools",
              desc: "We build custom AI validation engines to automate documentation, predictive quality tracking, and CAPA review.",
            },
            {
              title: "Post-Market Intelligence",
              desc: "Continuous surveillance solutions to detect, assess, and report device performance in real-world settings.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-700 font-light leading-relaxed">
                {service.desc}
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
          Why Choose MeDevice Consulting?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto text-lg text-slate-700 leading-relaxed font-light"
        >
          Our methodology is built on measurable results. Each engagement is
          data-driven, auditable, and fully transparent.  
          From documentation digitization to lifecycle validation, MeDevice
          stands at the forefront of innovation in compliance consulting.  
          We believe in sustainability, scalability, and trust.
          <br />
          <br />
          Our clients see measurable improvements in product release times,
          inspection readiness, and cross-functional collaboration. We don’t
          just help you meet regulations — we help you lead them.
        </motion.p>
      </section>

      <section className="py-28 text-center bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Elevate Your MedTech Strategy?
        </h2>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg mb-10 font-light">
          Let MeDevice guide your organization with next-generation consulting
          that transforms compliance into competitive advantage.
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
