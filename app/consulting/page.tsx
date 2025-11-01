"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ConsultingPage() {
  return (
    <main className="bg-gradient-to-b from-black via-gray-950 to-black text-gray-100 min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <Image
          src="/images/consulting-banner.jpg"
          alt="MedTech Consulting Banner"
          fill
          priority
          className="object-cover brightness-[0.45]"
        />
        <div className="relative z-10 px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent leading-tight"
          >
            Expert Consulting for Medical Device Success
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto"
          >
            From concept validation to post-market compliance, MeDevice Consulting
            delivers strategic and technical excellence to bring your MedTech innovation to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex justify-center gap-6"
          >
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition-all"
            >
              Book a Consultation
            </Link>
            <Link
              href="/training"
              className="border border-red-500 text-red-400 hover:text-white hover:bg-red-600/30 px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              Explore Training
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 text-center border-t border-gray-800 bg-black/30 backdrop-blur-lg">
        <h2 className="text-4xl font-bold text-red-400 mb-8">What We Do</h2>
        <p className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed mb-12">
          Our consultants blend deep regulatory knowledge, quality system design, and AI-driven analytics
          to support every stage of the medical device lifecycle.
          Whether you are developing your first Class II device or scaling global submissions,
          MeDevice offers the expertise and technology to ensure success.
        </p>
      </section>

      {/* ================= SERVICE CARDS ================= */}
      <section className="py-20 bg-gradient-to-br from-gray-950 via-black to-gray-900 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-red-400 text-center mb-14">
          Core Consulting Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-8">
          {[
            {
              title: "Regulatory Strategy & Submissions",
              desc: "Prepare flawless 510(k), CE Mark, or ISO submissions with AI-assisted document generation and validation.",
              img: "/images/regulatory.jpg",
            },
            {
              title: "Design Control Systems",
              desc: "Implement compliant design processes that meet FDA QSR 820 and ISO 13485 standards with traceable documentation.",
              img: "/images/design-control.jpg",
            },
            {
              title: "Risk Management & Validation",
              desc: "Accelerate verification and validation cycles through digital QMS integration and automated test documentation.",
              img: "/images/validation.jpg",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-gray-700 hover:border-red-500/40 hover:shadow-red-500/30 transition-all group"
            >
              <Image
                src={card.img}
                alt={card.title}
                width={500}
                height={300}
                className="object-cover w-full h-56 opacity-80 group-hover:opacity-100 transition"
              />
              <div className="p-6 bg-black/60 backdrop-blur-lg">
                <h3 className="text-2xl font-bold text-red-400 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="py-24 text-center bg-black/30 border-t border-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-red-400 mb-8"
        >
          Our Proven Consulting Process
        </motion.h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
          {[
            { step: "1", title: "Discovery", text: "Deep-dive workshops to align clinical, technical, and business goals." },
            { step: "2", title: "Strategy", text: "Design a roadmap for regulatory success using AI-assisted predictive models." },
            { step: "3", title: "Execution", text: "Implement documentation, testing, and validation workflows seamlessly." },
            { step: "4", title: "Compliance", text: "Maintain continuous improvement and market readiness with post-launch support." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 border border-gray-700 p-6 rounded-2xl hover:bg-white/10 transition-all"
            >
              <p className="text-5xl font-bold text-red-500 mb-3">{item.step}</p>
              <h3 className="text-xl font-semibold text-red-400 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-gradient-to-r from-red-700 to-pink-600 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Let’s Design the Future of Healthcare, Together.
        </h2>
        <p className="max-w-3xl mx-auto text-pink-100 mb-8 text-lg">
          Partner with MeDevice Consulting to transform complex regulatory challenges into pathways for growth.
        </p>
        <Link
          href="/contact"
          className="bg-white text-red-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:scale-110 hover:bg-gray-100 transition-all"
        >
          Start Your Project
        </Link>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm bg-black border-t border-gray-800">
        © {new Date().getFullYear()} MeDevice Inc. | Precision-Driven Consulting
      </footer>
    </main>
  );
}