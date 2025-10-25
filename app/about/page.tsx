"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaHeartbeat, FaMedal, FaUsers, FaRocket } from "react-icons/fa";

export default function AboutPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: "easeOut" },
    }),
  };

  const sectionHeader = (title: string, subtitle?: string) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-500 to-pink-500 drop-shadow-sm">
        {title}
      </h2>
      {subtitle && <p className="text-gray-600 mt-2 text-lg">{subtitle}</p>}
    </motion.div>
  );

  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 overflow-hidden">
      {/* 🎬 HERO SECTION */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1581092334534-7b8f57f11603?auto=format&fit=crop&w=2400&q=90"
          alt="About Background"
          fill
          priority
          className="object-cover brightness-[0.6]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70"
        />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 px-6 max-w-4xl"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
            Shaping the Future of Medical Innovation
          </h1>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
            At MeDevice, we unite technology and humanity — transforming
            innovative ideas into devices that improve and save lives worldwide.
          </p>
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-10 bg-gradient-to-r from-red-700 via-red-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            Explore Our Solutions
          </motion.a>
        </motion.div>
      </section>

      {/* 💎 PURPOSE / VISION / MISSION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        {sectionHeader("Purpose, Vision & Mission", "Our Core Principles")}
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {[
            {
              icon: <FaHeartbeat size={42} className="text-red-700" />,
              title: "Purpose",
              text: "To empower healthcare innovation by connecting design, compliance, and engineering excellence with patient outcomes.",
            },
            {
              icon: <FaMedal size={42} className="text-red-700" />,
              title: "Vision",
              text: "To be the global standard in medical device consulting, driving safer, smarter, and more ethical innovation.",
            },
            {
              icon: <FaRocket size={42} className="text-red-700" />,
              title: "Mission",
              text: "To help companies accelerate product development, streamline regulatory readiness, and deliver transformative technologies to market.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i * 0.2}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all border border-gray-200"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-red-900 mb-3 text-center">
                {item.title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 DIFFERENTIATORS */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-600 text-white py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580281657521-80dbd69f3073?auto=format&fit=crop&w=2400&q=90')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          {sectionHeader("What Makes Us Different")}
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
          >
            {[
              "Integrity and transparency in every project.",
              "Cross-disciplinary experts in design, quality, and regulatory.",
              "Adaptive strategies for evolving healthcare standards.",
              "Client partnerships built on trust and accountability.",
              "Passion for saving and improving lives with technology.",
              "Global reach, local insight, and personal connection.",
            ].map((point, i) => (
              <li
                key={i}
                className="p-6 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-all border border-white/20"
              >
                <FaUsers className="inline text-pink-400 mr-3" /> {point}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* 👥 LEADERSHIP */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        {sectionHeader("Leadership Team", "The minds driving innovation")}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              name: "Chuck Ventura",
              role: "Chief Executive Officer",
              img: "https://images.unsplash.com/photo-1603415526960-f7e0328d4b8c?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Aileen Rohde",
              role: "Account Manager",
              img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Chris Bishof",
              role: "Director of Engineering",
              img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80",
            },
          ].map((leader, i) => (
            <motion.div
              key={leader.name}
              custom={i * 0.3}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 3 }}
              className="relative group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-72">
                <Image
                  src={leader.img}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-red-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-gray-600">{leader.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🚀 CALL TO ACTION */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative overflow-hidden py-28 text-center"
      >
        <Image
          src="https://images.unsplash.com/photo-1581092334534-7b8f57f11603?auto=format&fit=crop&w=2400&q=90"
          alt="Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-red-900 mb-6">
            Let’s Build the Future of Healthcare
          </h2>
          <p className="text-gray-700 mb-10 text-lg">
            Partner with MeDevice to revolutionize medical innovation — through
            collaboration, precision, and passion for life.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-red-700 via-pink-600 to-red-500 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition"
          >
            Contact Our Experts
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}
