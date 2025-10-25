"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHeartbeat, FaMedal, FaUsers, FaRocket } from "react-icons/fa";

export default function AboutCinematic() {
  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 1, ease: "easeOut" },
    }),
  };

  return (
    <main className="relative min-h-screen text-gray-100 bg-black overflow-hidden">
      {/* 🎬 HERO PARALLAX SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center">
        {/* 3D Starfield Background */}
        <Canvas className="absolute inset-0" camera={{ position: [0, 0, 1] }}>
          <Stars radius={100} depth={50} count={4000} factor={4} saturation={0} fade speed={1} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-red-900/30" />

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-red-500 via-pink-400 to-white bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,0,0,0.6)]"
        >
          About MeDevice
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 text-lg md:text-2xl max-w-3xl mt-6 text-gray-300"
        >
          Engineering the future of medical technology — where precision meets compassion.
        </motion.p>

        <motion.a
          href="/services"
          whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(255,0,0,0.7)" }}
          className="relative z-10 mt-12 inline-block bg-gradient-to-r from-red-700 via-pink-600 to-red-500 text-white px-10 py-4 rounded-full font-semibold tracking-wide transition-all"
        >
          Explore Solutions
        </motion.a>
      </section>

      {/* 💎 GLASS PURPOSE / VISION / MISSION */}
      <section className="relative py-32 bg-gradient-to-b from-black via-red-950 to-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <FaHeartbeat size={48} className="text-pink-400" />,
              title: "Purpose",
              text: "Empowering healthcare innovation through the fusion of engineering, compliance, and design excellence.",
            },
            {
              icon: <FaMedal size={48} className="text-pink-400" />,
              title: "Vision",
              text: "To redefine medical device development globally with precision, ethics, and impact.",
            },
            {
              icon: <FaRocket size={48} className="text-pink-400" />,
              title: "Mission",
              text: "Delivering smarter, safer, and compliant innovations that elevate human health.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i * 0.2}
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

      {/* 🌈 DIFFERENTIATORS SECTION */}
      <section className="relative py-32 bg-gradient-to-r from-red-800 via-black to-red-800">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1580281657521-80dbd69f3073?auto=format&fit=crop&w=2400&q=90"
            alt="background"
            fill
            className="object-cover"
          />
        </div>
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
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              "Integrity and transparency in every partnership.",
              "Adaptive strategies for global compliance.",
              "Innovation powered by empathy and science.",
              "Cross-disciplinary excellence in design and quality.",
              "Long-term partnerships built on trust.",
              "Commitment to ethical, patient-focused outcomes.",
            ].map((text, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md shadow hover:shadow-xl transition-all text-gray-300"
              >
                {text}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* 👥 LEADERSHIP GRID */}
      <section className="py-32 bg-black text-center">
        <h2 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
          Leadership Team
        </h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
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
              whileHover={{
                scale: 1.05,
                rotateY: 6,
                boxShadow: "0 0 30px rgba(255,0,128,0.3)",
              }}
              className="relative bg-white/5 rounded-2xl overflow-hidden shadow-xl backdrop-blur-lg border border-white/10"
            >
              <div className="relative h-80">
                <Image src={leader.img} alt={leader.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-400">{leader.name}</h3>
                <p className="text-gray-400">{leader.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🚀 CTA */}
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
