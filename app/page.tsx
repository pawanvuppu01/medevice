"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ClientList from "@/components/ClientList";

export default function HomePage() {
  const services = [
    {
      title: "Consulting",
      desc: "Strategic guidance to achieve regulatory excellence, design control optimization, and seamless market readiness.",
      img: "/images/consulting.jpg",
      link: "/consulting",
    },
    {
      title: "Staffing & Recruiting",
      desc: "We connect MedTech leaders with top-tier engineering, validation, and quality assurance professionals worldwide.",
      img: "/images/staffing.jpg",
      link: "/staffing",
    },
    {
      title: "Training Programs",
      desc: "Upskill your teams with practical, AI-driven workshops in quality, regulatory, and design control disciplines.",
      img: "/images/training.jpg",
      link: "/training",
    },
  ];

  return (
    <main className="bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-100">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <Image
          src="/images/hero-banner.jpg"
          alt="AI-driven MedTech Innovation"
          fill
          priority
          className="object-cover brightness-[0.4]"
        />
        <div className="relative z-10 px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent leading-tight"
          >
            Revolutionizing Medical Device Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto"
          >
            MeDevice empowers MedTech organizations with AI-driven consulting, regulatory strategy, and workforce solutions for next-gen healthcare.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-10 flex justify-center gap-6"
          >
            <Link
              href="/consulting"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition-all"
            >
              Explore Solutions
            </Link>
            <Link
              href="/contact"
              className="border border-red-500 text-red-400 hover:text-white hover:bg-red-600/30 px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 bg-black/30 backdrop-blur-lg text-center border-t border-gray-800">
        <h2 className="text-4xl font-bold text-red-400 mb-8">Who We Are</h2>
        <p className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
          <strong>MeDevice</strong> combines regulatory science, AI, and engineering excellence to help medical device companies bring innovations to market faster, safer, and smarter.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-28 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-center">
        <h2 className="text-4xl font-bold text-red-400 mb-14">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.07 }}
              className="bg-white/10 border border-gray-700/40 rounded-3xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={s.img}
                alt={s.title}
                width={600}
                height={400}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-red-400 mb-3">{s.title}</h3>
                <p className="text-gray-300 mb-4">{s.desc}</p>
                <Link href={s.link} className="text-red-500 font-semibold underline hover:text-red-300 transition">
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-950 to-black text-center border-t border-gray-800">
        <h2 className="text-4xl font-bold text-red-400 mb-10">Our Collaborators & Clients</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          Partnering with the most innovative MedTech companies worldwide.
        </p>
        <ClientList />
      </section>

      {/* CTA SECTION */}
      <section className="py-24 text-center bg-gradient-to-r from-red-700 to-pink-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your MedTech Journey?</h2>
        <p className="max-w-3xl mx-auto text-pink-100 mb-8 text-lg">
          Let’s build the future of healthcare innovation — powered by intelligence, compliance, and purpose.
        </p>
        <Link
          href="/contact"
          className="bg-white text-red-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:scale-110 hover:bg-gray-100 transition-all"
        >
          Partner With Us
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 text-sm bg-black border-t border-gray-800">
        © {new Date().getFullYear()} MeDevice Inc. | Crafted with ❤️ and AI
      </footer>
    </main>
  );
}
