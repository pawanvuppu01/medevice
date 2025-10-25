"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const services = [
    {
      title: "Consulting",
      desc: "Regulatory and design-control expertise to transform compliance challenges into innovation advantages.",
      img: "https://images.unsplash.com/photo-1581091012184-7c4c1cde53a8?auto=format&fit=crop&w=2400&q=90",
      link: "/consulting",
    },
    {
      title: "Staffing & Recruiting",
      desc: "Connecting MedTech leaders with top-tier engineering and regulatory talent worldwide.",
      img: "https://images.unsplash.com/photo-1606207554724-8344e1b86dff?auto=format&fit=crop&w=2400&q=90",
      link: "/staffing",
    },
    {
      title: "Training Programs",
      desc: "Empowering teams with regulatory, risk management, and AI-driven design knowledge.",
      img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=2400&q=90",
      link: "/training",
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* ✅ Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=2400&q=90"
          alt="MedTech Innovation Background"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />

        <div className="relative z-10 px-6 max-w-4xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-extrabold mb-4"
          >
            Innovation for Life
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            MeDevice bridges technology and healthcare — accelerating compliance, innovation, and patient safety through world-class consulting, staffing, and training.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <Link
              href="/consulting"
              className="bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ✅ About Section */}
      <section className="py-20 text-center bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-red-900 mb-6"
        >
          Who We Are
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-lg text-gray-700"
        >
          At <strong>MeDevice</strong>, we empower medical device innovators to design, validate, and deploy
          technologies that improve lives. Our multidisciplinary experts combine regulatory precision, technical
          insight, and AI-driven strategy to deliver results that matter.
        </motion.p>
      </section>

      {/* ✅ Services Section */}
      <section className="py-24 bg-gray-100 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-red-900 mb-12"
        >
          Our Core Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
          {services.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(200,0,0,0.15)",
              }}
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
                <h3 className="text-2xl font-semibold text-red-800 mb-3">{s.title}</h3>
                <p className="text-gray-700 mb-4">{s.desc}</p>
                <Link
                  href={s.link}
                  className="text-red-700 font-semibold underline hover:text-red-800 transition"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-pink-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Partner with MeDevice?</h2>
        <p className="max-w-2xl mx-auto text-gray-100 mb-8">
          Let’s shape the future of healthcare together — from consulting and staffing to innovation and compliance.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-red-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
