"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import InfoModal from "@/components/InfoModal";

export default function ConsultingPage() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      title: "Regulatory Strategy & Compliance",
      desc: `Our consulting team provides end-to-end guidance on FDA, EMA, and global regulatory pathways. 
      From premarket submissions to postmarket surveillance, we ensure your product remains compliant and audit-ready.`,
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=2000&q=80",
    },
    {
      title: "Design Controls & Risk Management",
      desc: `We implement world-class design-control systems to ensure every product decision is traceable, 
      validated, and aligned with ISO 13485, IEC 62304, and MDR standards. 
      Our risk-based approach reduces time-to-market and ensures patient safety.`,
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80",
    },
    {
      title: "AI-Driven Product Development",
      desc: `Harness the power of AI and data analytics for predictive device validation, 
      simulation-based design, and automated compliance reporting. 
      We integrate innovation with intelligence for next-generation medical devices.`,
      img: "https://images.unsplash.com/photo-1628595351029-57baf2b8e8a8?auto=format&fit=crop&w=2000&q=80",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581092334534-7b8f57f11603?auto=format&fit=crop&w=2400&q=90"
          alt="Medical consulting innovation"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="relative z-10 px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-4"
          >
            Transforming MedTech Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-gray-200"
          >
            Expert regulatory guidance, risk-based design systems, and AI-powered strategy to bring medical devices from concept to compliance.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12 text-red-900">Our Consulting Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {services.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(200,0,0,0.2)",
              }}
              onClick={() => setSelectedService(s)}
              className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <Image
                src={s.img}
                alt={s.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-red-800 mb-2">{s.title}</h3>
                <p className="text-gray-700 text-sm">{s.desc.substring(0, 100)}...</p>
                <p className="text-red-700 font-semibold mt-3 underline">Learn More →</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal Popup */}
      <InfoModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ""}
        description={selectedService?.desc || ""}
        image={selectedService?.img}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-pink-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Accelerate Your Regulatory Success?</h2>
        <p className="max-w-2xl mx-auto text-gray-100 mb-8">
          Partner with MeDevice for strategic consulting that transforms compliance challenges into competitive advantages.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-red-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          Contact Our Experts
        </a>
      </section>
    </main>
  );
}
