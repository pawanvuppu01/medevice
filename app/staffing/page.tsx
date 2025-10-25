"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import InfoModal from "@/components/InfoModal";

export default function StaffingPage() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const staffingOptions = [
    {
      title: "Elite Talent Acquisition",
      desc: `Our recruitment specialists connect you with elite professionals 
      who understand the precision and regulatory rigor of medical-device development. 
      We help build teams that innovate safely and scale globally.`,
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2400&q=90",
    },
    {
      title: "Project-Based Staffing Solutions",
      desc: `Accelerate product timelines with on-demand experts for R&D, manufacturing, and compliance. 
      Our project staffing models reduce hiring complexity while ensuring regulatory consistency.`,
      img: "https://images.unsplash.com/photo-1618213837799-1a0d7c1dbb8d?auto=format&fit=crop&w=2400&q=90",
    },
    {
      title: "Leadership & Executive Recruitment",
      desc: `From Directors to CTOs, we identify and place visionary leaders who drive transformation. 
      Our approach blends AI-powered search with human insight for lasting organizational impact.`,
      img: "https://images.unsplash.com/photo-1581092334534-7b8f57f11603?auto=format&fit=crop&w=2400&q=90",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1603415526960-f7e0328d4b8c?auto=format&fit=crop&w=2400&q=90"
          alt="Recruitment and staffing for medtech"
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
            Empowering Teams. Accelerating Innovation.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-gray-200"
          >
            Specialized staffing for MedTech and healthcare innovation — from engineers to executive leaders.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12 text-red-900">Staffing & Recruiting Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {staffingOptions.map((s, index) => (
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

      {/* Info Modal */}
      <InfoModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ""}
        description={selectedService?.desc || ""}
        image={selectedService?.img}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-700 to-red-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Build Your Dream Team?</h2>
        <p className="max-w-2xl mx-auto text-gray-100 mb-8">
          MeDevice specializes in connecting MedTech companies with the right people — fast, compliant, and efficient.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-red-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          Contact Our Recruiters
        </a>
      </section>
    </main>
  );
}
