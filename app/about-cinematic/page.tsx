"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FaHeartbeat, FaMedal, FaRocket } from "react-icons/fa";

/**
 * Type-safe fade-up animation with proper easing array
 */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier curve
    },
  },
};

export default function AboutCinematic() {
  return (
    <main className="relative min-h-screen bg-black text-gray-100 overflow-hidden">
      {/* 🌌 3D STARFIELD HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <Canvas
          className="absolute inset-0"
          camera={{ position: [0, 0, 1] }}
          style={{ zIndex: 0 }}
        >
          <Stars
            radius={120}
            depth={70}
            count={6000}
            factor={4}
            saturation={0}
            fade
            speed={0.8}
          />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-red-900/30 to-black/80" />

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-red-500 via-pink-400 to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,0,0,0.7)]"
        >
          About MeDevice
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 mt-6 max-w-2xl text-gray-300 text-lg md:text-2xl"
        >
          Innovating healthcare through precision, empathy, and AI-driven design.
        </motion.p>

        <motion.a
          href="/services"
          whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(255,0,0,0.7)" }}
          className="relative z-10 mt-10 inline-block bg-gradient-to-r from-red-700 via-pink-600 to-red-500 text-white px-10 py-4 rounded-full font-semibold tracking-wide transition-all"
        >
          Explore Solutions
        </motion.a>
      </section>

      {/* 💎 PURPOSE / VISION / MISSION */}
      <section className="relative py-32 bg-gradient-to-b from-black via-red-950 to-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <FaHeartbeat size={50} className="text-pink-400" />,
              title: "Purpose",
              text: "Empowering medical innovation through engineering, compliance, and design excellence.",
            },
            {
              icon: <FaMedal size={50} className="text-pink-400" />,
              title: "Vision",
              text: "To shape a safer, smarter, and sustainable medical ecosystem through innovation.",
            },
            {
              icon: <FaRocket size={50} className="text-pink-400" />,
              title: "Mission",
              text: "Building life-changing technologies that merge empathy, science, and precision.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(255,0,128,0.4)",
              }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center shadow-xl transition-all"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-pink-300">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🌈 DIFFERENTIATORS */}
      <section className="relative py-32 bg-gradient-to-r from-red-800 via-black to-red-800">
        <Image
          src="https://images.unsplash.com/photo-1581092334534-7b8f57f11603?auto=format&fit=crop&w=2400&q=90"
          alt="innovation background"
          fill
          className="object-cover opacity-10"
        />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-400 to-red-400 mb-10"
          >
            What Makes Us Different
          </motion.h2>

          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Integrity & transparency in every partnership.",
              "Adaptive strategies for global compliance.",
              "Innovation powered by empathy & science.",
              "Cross-disciplinary excellence in design & QA.",
              "Long-term partnerships built on trust.",
              "Commitment to ethical, patient-focused outcomes.",
            ].map((text, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md shadow hover:shadow-xl transition-all text-gray-300"
              >
                {text}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* 🚀 CALL TO ACTION */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-40 bg-gradient-to-r from-pink-600 via-red-700 to-red-900 text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-white mb-6">
            Let’s Build the Future of Healthcare
          </h2>
          <p className="text-gray-200 mb-10 text-lg">
            Partner with MeDevice to design safer, smarter, and more ethical medical technologies.
          </p>
          <motion.a
            href="/contact"
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 15px rgba(255,255,255,0.8)",
              boxShadow: "0 0 40px rgba(255,255,255,0.5)",
            }}
            className="inline-block bg-white text-red-900 font-bold px-10 py-4 rounded-full shadow-lg transition"
          >
            Contact Our Team
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}
