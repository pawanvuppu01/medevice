"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="overflow-hidden text-slate-800 bg-white selection:bg-blue-200 selection:text-blue-900">
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center py-40 px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-blue-900 tracking-tight">
            MeDevice: Elevating{" "}
            <span className="text-blue-600 italic">Medical Innovation</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-light leading-relaxed">
            Where advanced engineering meets ethical precision. MeDevice
            empowers global MedTech pioneers to design, validate, and launch
            transformative technologies that enhance human life.
          </p>
          <div className="mt-10 flex justify-center gap-5">
            <Link
              href="/consulting"
              className="bg-blue-700 text-white font-semibold px-10 py-4 rounded-full hover:bg-blue-800 transition-all shadow-md hover:scale-105"
            >
              Explore Consulting
            </Link>
            <Link
              href="/contact"
              className="border border-blue-700 text-blue-700 font-semibold px-10 py-4 rounded-full hover:bg-blue-700 hover:text-white transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-banner.jpg"
            alt="MeDevice Hero"
            fill
            priority
            className="object-cover brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-slate-100/90" />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-10"
        >
          Redefining Compliance Through Intelligence
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto text-lg text-slate-700 leading-relaxed font-light"
        >
          Since 2019, MeDevice has evolved into a strategic partner for global
          medical-device organizations, guiding them through design, testing,
          and certification with precision and clarity. Our multidisciplinary
          experts connect regulatory science, human-centered design, and
          AI-driven validation to streamline product lifecycles. Every solution
          we craft reflects our core belief that innovation and compliance must
          co-exist seamlessly to serve human well-being. <br />
          <br />
          We collaborate with manufacturers, startups, and research labs to
          bring life-saving technologies from concept to market faster — without
          compromising safety or integrity. From initial risk analysis to
          post-market surveillance, MeDevice ensures every device meets the
          highest global standards.
        </motion.p>
      </section>

      {/* MISSION + VALUES */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-slate-50">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-blue-800 mb-10"
        >
          Our Mission & Core Values
        </motion.h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Our Mission
            </h3>
            <p className="text-slate-700 leading-relaxed font-light">
              To empower medical-device innovators with intelligent frameworks
              and world-class expertise that accelerate regulatory readiness and
              global market adoption. MeDevice transforms compliance from a
              bottleneck into a strategic advantage.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Our Values
            </h3>
            <ul className="text-slate-700 leading-relaxed space-y-3 list-disc list-inside font-light">
              <li>
                <strong>Integrity:</strong> We adhere to the highest standards
                of ethics and transparency in every engagement.
              </li>
              <li>
                <strong>Innovation:</strong> We fuse human expertise with
                digital intelligence to revolutionize compliance systems.
              </li>
              <li>
                <strong>Precision:</strong> Every deliverable undergoes rigorous
                review to ensure safety and consistency.
              </li>
              <li>
                <strong>Partnership:</strong> Our client relationships are built
                on trust, respect, and long-term collaboration.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* GLOBAL IMPACT */}
      <section className="py-28 px-6 bg-gradient-to-r from-blue-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-800 mb-10"
        >
          Global Reach, Local Expertise
        </motion.h2>
        <p className="max-w-5xl mx-auto text-lg text-slate-700 leading-relaxed font-light mb-10">
          MeDevice operates across the U.S., Europe, and Asia—bridging the
          global MedTech ecosystem. With teams in San Francisco, Berlin,
          Bangalore, and Tokyo, we deliver region-specific insights backed by
          international standards. This cross-border synergy enables our clients
          to anticipate regulatory shifts and stay ahead in a rapidly evolving
          marketplace.
        </p>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["350+", "Projects Delivered"],
            ["45+", "Expert Consultants"],
            ["15", "Countries Served"],
            ["100%", "Client Retention"],
          ].map(([n, t], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 bg-white shadow-lg rounded-2xl border border-slate-200 hover:shadow-xl transition-all"
            >
              <h3 className="text-4xl font-bold text-blue-700">{n}</h3>
              <p className="text-slate-600 mt-2 font-medium">{t}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI ASSISTANT SECTION */}
      <section className="relative py-32 bg-gradient-to-b from-white to-blue-50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-10 shadow-xl"
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-6">
            Meet the MeDevice AI Consultant
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-8 font-light">
            Your personalized digital expert for MedTech compliance.  
            Get insights on regulatory pathways, documentation standards, and
            device validation processes — all through intelligent conversation.  
            This assistant understands the complexity of global standards and
            provides structured, data-driven guidance to help you prepare for
            audits, certifications, and quality submissions.
          </p>
          <div className="w-full flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <input
              type="text"
              placeholder="Ask about FDA, MDR, ISO, or device design..."
              className="flex-1 px-6 py-4 rounded-full border border-slate-300 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-blue-700 text-white px-10 py-4 rounded-full hover:bg-blue-800 font-semibold transition-all">
              Ask Assistant
            </button>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-blue-700 to-blue-900 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Partner with MeDevice for the Future of Healthcare
        </h2>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg mb-10 font-light">
          Together, we can accelerate safe innovation — combining human insight,
          machine intelligence, and medical precision. Join hundreds of device
          makers who trust MeDevice to make their vision a reality.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:bg-blue-100 hover:scale-105 transition-all"
        >
          Get in Touch
        </Link>
      </section>

      <footer className="py-10 text-center text-slate-500 text-sm bg-white border-t border-slate-200">
        © {new Date().getFullYear()} MeDevice Inc. | Empowering MedTech Through AI
      </footer>
    </main>
  );
}
