"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import InfoModal from "@/components/InfoModal";

export default function IntegratedSolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState<any>(null);

  const solutions = [
    {
      title: "End-to-End Device Development",
      desc: `We manage every stage of medical-device development — from concept design and prototyping 
      to validation, verification, and post-market maintenance. Our multidisciplinary teams ensure 
      precision, compliance, and scalability for global markets.`,
      img: "https://images.unsplash.com/photo-1581091012184-5c36cdb2fcb1?auto=format&fit=crop&w=2400&q=90",
    },
    {
      title: "Digital Quality Systems & DHF Remediation",
      desc: `MeDevice delivers digital-first QMS solutions built on ISO 13485 and 21 CFR 820 standards. 
      We transform paper-heavy processes into cloud-driven, traceable systems that streamline audits and 
      ensure data integrity across product lifecycles.`,
      img: "https://images.unsplash.com/photo-1603415526960-f7e0328d4b8c?auto=format&fit=crop&w=2400&q=90",
    },
    {
      title: "AI-Integrated Manufacturing & Testing",
      desc: `By integrating AI and predictive analytics into manufacturing, 
      we help organizations reduce validation time, improve yield, 
      and anticipate performance deviations before they occur.`,
      img: "https://images.unsplash.com/photo-1628595351029-57baf2b8e8a8?auto=format&fit=crop&w=2400&q=90",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581092334534-7b8f57f11603?auto=format&fit=crop&w=2400&q=90"
          alt="Integrated medical solutions background"
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
            Integrated Solutions for a Smarter Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-gray-200"
          >
            From concept to commercialization, we unify innovation, compliance, and scalability to
            deliver seamless MedTech excellence.
          </motion.p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12 text-red-900">Our Integrated Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {solutions.map((s, index) => (
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
              onClick={() => setSelectedSolution(s)}
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
        isOpen={!!selectedSolution}
        onClose={() => setSelectedSolution(null)}
        title={selectedSolution?.title || ""}
        description={selectedSolution?.desc || ""}
        image={selectedSolution?.img}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-pink-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your Product Lifecycle?</h2>
        <p className="max-w-2xl mx-auto text-gray-100 mb-8">
          Partner with MeDevice to build future-ready systems that integrate AI, automation, and compliance for next-generation MedTech success.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-red-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          Talk to Our Experts
        </a>
      </section>
    </main>
  );
}
