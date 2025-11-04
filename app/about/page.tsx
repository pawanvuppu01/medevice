"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const milestones = [
    {
      year: "2019",
      title: "Founded with Purpose",
      desc: "Born from a vision to bridge compliance and creativity in the MedTech landscape.",
    },
    {
      year: "2021",
      title: "AI-Integrated Consulting Launched",
      desc: "Introduced predictive compliance modeling and automated documentation systems.",
    },
    {
      year: "2023",
      title: "Global Expansion",
      desc: "Established offices in the U.S. and India, partnering with 20+ MedTech innovators worldwide.",
    },
    {
      year: "2025",
      title: "Next-Gen MedDevice Cloud",
      desc: "Currently building an AI-powered platform to revolutionize device validation, training, and market readiness.",
    },
  ];

  const leadership = [
    {
      name: "Pawan Vuppu",
      role: "Founder & Chief Innovation Officer",
      img: "/images/team-pawan.jpg",
      desc: "Drives MeDevice’s ecosystem — fusing MedTech strategy with AI-driven development and compliance architecture.",
    },
    {
      name: "Ananya Rao",
      role: "Head of Regulatory Science",
      img: "/images/team-ananya.jpg",
      desc: "Leads the development of evidence-based frameworks for AI/ML-enabled medical devices.",
    },
    {
      name: "Raj Mehta",
      role: "Director of Global Partnerships",
      img: "/images/team-raj.jpg",
      desc: "Strengthens alliances across healthcare tech, manufacturing, and R&D organizations worldwide.",
    },
  ];

  const locations = [
    { region: "USA", offices: "San Francisco, Boston" },
    { region: "Europe", offices: "Berlin, Dublin" },
    { region: "India", offices: "Hyderabad, Bangalore" },
    { region: "Japan", offices: "Tokyo" },
  ];

  return (
    <main className="bg-gradient-to-b from-black via-gray-950 to-black text-gray-100 min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <Image
          src="/images/heroes/hero-about.jpg"
          alt="About MeDevice"
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
            Shaping the Future of MedTech Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto"
          >
            MeDevice is redefining how medical device companies innovate,
            validate, and launch — blending regulatory science with artificial
            intelligence and human expertise.
          </motion.p>
        </div>
      </section>

      {/* ================= OUR MISSION ================= */}
      <section className="py-24 border-t border-gray-800 bg-black/40 backdrop-blur-md text-center">
        <h2 className="text-4xl font-bold text-red-400 mb-8">Our Mission & Vision</h2>
        <div className="max-w-5xl mx-auto text-lg text-gray-300 leading-relaxed space-y-8 px-6">
          <p>
            <strong>Mission:</strong> To empower MedTech innovators through intelligent
            systems, expert collaboration, and AI-driven regulatory insights —
            accelerating safe and compliant healthcare breakthroughs.
          </p>
          <p>
            <strong>Vision:</strong> A world where innovation and compliance coexist
            seamlessly — every life-saving device built with speed, transparency,
            and trust.
          </p>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="py-24 border-t border-gray-800 bg-gradient-to-b from-gray-950 to-black">
        <h2 className="text-4xl font-bold text-red-400 text-center mb-14">
          Our Journey
        </h2>
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative border-l-4 border-red-500 pl-6 hover:pl-8 transition-all"
            >
              <h3 className="text-2xl font-bold text-red-400">{m.year}</h3>
              <p className="text-xl font-semibold mt-1">{m.title}</p>
              <p className="text-gray-400 mt-2">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="py-24 border-t border-gray-800 bg-black/30 backdrop-blur-md text-center">
        <h2 className="text-4xl font-bold text-red-400 mb-14">
          Leadership & Innovation Team
        </h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-8">
          {leadership.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 border border-gray-700 rounded-3xl p-6 hover:bg-white/10 transition-all"
            >
              <Image
                src={m.img}
                alt={m.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 border border-red-400 object-cover"
              />
              <h3 className="text-xl font-semibold text-red-400">{m.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{m.role}</p>
              <p className="text-sm text-gray-300">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= GLOBAL FOOTPRINT ================= */}
      <section className="py-24 border-t border-gray-800 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-center">
        <h2 className="text-4xl font-bold text-red-400 mb-8">Global Footprint</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-10 text-lg">
          MeDevice operates across North America, Europe, and Asia, delivering
          precision consulting, staffing, and digital training solutions to
          MedTech enterprises worldwide.
        </p>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-8">
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/5 border border-gray-700 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <h3 className="text-xl font-semibold text-red-400">
                {loc.region}
              </h3>
              <p className="text-sm text-gray-300 mt-2">{loc.offices}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-gradient-to-r from-red-700 to-pink-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Join the MeDevice Movement</h2>
        <p className="max-w-3xl mx-auto text-pink-100 mb-8 text-lg">
          Together, we can build the next generation of intelligent medical
          devices — compliant, connected, and human-centered.
        </p>
        <Link
          href="/contact"
          className="bg-white text-red-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:scale-110 hover:bg-gray-100 transition-all"
        >
          Get in Touch
        </Link>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm bg-black border-t border-gray-800">
        © {new Date().getFullYear()} MeDevice Inc. | Empowering MedTech Through AI
      </footer>
    </main>
  );
}
