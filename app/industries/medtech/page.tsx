"use client";
import { motion } from "framer-motion";

export default function MedTechPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-slate-100 text-slate-800">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/industries/medtech.jpg"
          alt="MedTech Industry"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-xl"
        >
          MedTech Innovation
        </motion.h1>
      </section>

      <section className="max-w-5xl mx-auto py-24 px-6 space-y-8 text-lg leading-relaxed text-slate-700">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          MeDevice empowers medical device innovators to bring next-generation
          healthcare technologies to life — faster, safer, and smarter. We help
          bridge the gap between research and real-world deployment through a
          balanced approach to design control, validation, and regulatory
          compliance.
        </motion.p>

        <p>
          Our MedTech services include end-to-end product development, risk
          management (ISO 14971), human factors engineering (IEC 62366), and
          system integration. We collaborate with device manufacturers,
          hospitals, and start-ups to ensure patient safety while accelerating
          innovation.
        </p>

        <p>
          From AI-enabled surgical robotics to wearable biosensors and digital
          therapeutics, we enable MedTech breakthroughs that save lives.
        </p>

        <div className="pt-8">
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition"
          >
            Talk to our MedTech Experts →
          </a>
        </div>
      </section>
    </main>
  );
}
