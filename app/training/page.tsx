"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import InfoModal from "@/components/InfoModal";

export default function TrainingPage() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const trainings = [
    {
      title: "Regulatory & Quality Masterclass",
      desc: `Deep-dive into global medical-device regulations (FDA, EU MDR, ISO 13485). 
      Designed for engineers, QA specialists, and compliance officers who want to master 
      audit-ready documentation and digital QMS tools.`,
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=2400&q=90",
    },
    {
      title: "Design Controls & Risk Management Bootcamp",
      desc: `Hands-on training for design control implementation, FMEA, 
      and risk-based validation. Participants build a working design-control matrix 
      aligned with industry standards and real-world use cases.`,
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2400&q=90",
    },
    {
      title: "AI & Data Science for MedTech Professionals",
      desc: `Learn how artificial intelligence and analytics accelerate product validation, 
      predictive maintenance, and patient-safety insights. 
      Delivered by MeDevice’s AI engineering and regulatory teams.`,
      img: "https://images.unsplash.com/photo-1628595351029-57baf2b8e8a8?auto=format&fit=crop&w=2400&q=90",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1601046152860-7e0568b8c2e7?auto=format&fit=crop&w=2400&q=90"
          alt="Training and learning background"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="relative z-10 px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-4"
          >
            Empower Your Team Through Knowledge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-gray-200"
          >
            Build competence, confidence, and compliance with MeDevice’s world-class training programs.
          </motion.p>
        </div>
      </section>

      {/* Training Grid */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12 text-red-900">Our Training Programs</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {trainings.map((t, index) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(200,0,0,0.2)",
              }}
              onClick={() => setSelectedCourse(t)}
              className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <Image
                src={t.img}
                alt={t.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-red-800 mb-2">{t.title}</h3>
                <p className="text-gray-700 text-sm">{t.desc.substring(0, 100)}...</p>
                <p className="text-red-700 font-semibold mt-3 underline">Learn More →</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info Modal */}
      <InfoModal
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        title={selectedCourse?.title || ""}
        description={selectedCourse?.desc || ""}
        image={selectedCourse?.img}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-pink-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Upskill Your Workforce?</h2>
        <p className="max-w-2xl mx-auto text-gray-100 mb-8">
          Join hundreds of MedTech professionals who trust MeDevice for training that blends regulatory depth with modern innovation.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-red-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          Enroll Now
        </a>
      </section>
    </main>
  );
}
