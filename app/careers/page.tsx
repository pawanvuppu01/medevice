"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CareersPage() {
  const values = [
    {
      title: "Innovation with Integrity",
      desc: "Every line of code, every compliance framework, and every partnership we build reflects a commitment to ethical innovation. We believe in using technology to make healthcare smarter, safer, and more humane.",
    },
    {
      title: "Collaboration Beyond Borders",
      desc: "Our global team thrives on diversity. With engineers, scientists, and strategists across continents, we blend perspectives to create solutions that serve the world — not just one market.",
    },
    {
      title: "Continuous Growth",
      desc: "At MeDevice, learning never stops. From AI-driven design workshops to regulatory bootcamps, we help you stay on the cutting edge of MedTech and software engineering.",
    },
  ];

  const benefits = [
    "Flexible hybrid work options (US, Europe, India)",
    "Comprehensive healthcare & wellness coverage",
    "Professional training and certification reimbursements",
    "Stock options and performance-based incentives",
    "Global collaboration and travel opportunities",
  ];

  const roles = [
    {
      title: "Regulatory Affairs Specialist",
      location: "San Francisco, CA / Remote",
      desc: "Guide next-generation medical devices through FDA and MDR submissions while collaborating with cross-functional design teams.",
    },
    {
      title: "Full Stack Developer (Next.js + Cloud)",
      location: "Remote / India / Europe",
      desc: "Develop scalable, secure applications that power MeDevice’s global consulting and analytics platform.",
    },
    {
      title: "AI Data Scientist - Healthcare Analytics",
      location: "Boston, MA / Hybrid",
      desc: "Apply deep learning models to post-market surveillance and predictive risk assessment in regulated medical environments.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-slate-800 selection:bg-blue-200 selection:text-blue-900">
      {/* ===== HERO ===== */}
      <section className="relative flex flex-col items-center justify-center text-center py-40 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-blue-900 leading-tight">
            Join the <span className="italic text-blue-600">MeDevice</span> Team
          </h1>
          <p className="mt-8 text-xl text-slate-700 font-light max-w-3xl mx-auto">
            Be part of a mission that’s reshaping medical technology.  
            Work with passionate innovators driving real-world impact through AI,
            engineering, and regulatory excellence.
          </p>
        </motion.div>

        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/careers/careers-banner.jpg"
            alt="Careers Banner"
            fill
            priority
            className="object-cover brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-slate-100/80" />
        </div>
      </section>

      {/* ===== CULTURE & VALUES ===== */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-10"
        >
          Life at MeDevice
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto text-lg text-slate-700 leading-relaxed font-light mb-16"
        >
          At MeDevice, we see every challenge as a chance to create change.  
          Our people are our most valuable technology — combining compassion,
          intellect, and creativity to build solutions that redefine what’s
          possible in MedTech.  
          <br /><br />
          From day one, you’ll collaborate with experts across design, AI,
          regulatory science, and product strategy. Whether working from our
          innovation labs or remotely from home, you’ll help accelerate the
          creation of devices that save lives worldwide.
        </motion.p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-left">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">{val.title}</h3>
              <p className="text-slate-700 font-light leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-24 px-6 bg-gradient-to-r from-white via-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-800 mb-10"
        >
          Why Work With Us
        </motion.h2>
        <p className="max-w-4xl mx-auto text-lg text-slate-700 font-light leading-relaxed mb-12">
          We’re not just building a company — we’re building a legacy of excellence.  
          When you join MeDevice, you join a mission to improve global healthcare.
          We value your wellbeing, growth, and purpose.
        </p>
        <ul className="max-w-3xl mx-auto text-left space-y-4 text-slate-700 font-light">
          {benefits.map((b, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="text-blue-600 text-xl">✔</span>
              <p>{b}</p>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* ===== OPEN ROLES ===== */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-10"
        >
          Current Opportunities
        </motion.h2>
        <div className="max-w-5xl mx-auto space-y-8 text-left">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-semibold text-blue-700">{role.title}</h3>
              <p className="text-slate-500 text-sm mb-2">{role.location}</p>
              <p className="text-slate-700 font-light mb-4">{role.desc}</p>
              <Link
                href="/contact"
                className="bg-blue-700 text-white font-medium px-6 py-2 rounded-full hover:bg-blue-800 transition-all"
              >
                Apply Now
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-28 text-center bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Shape the Future of MedTech With Us
        </h2>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg mb-10 font-light">
          Whether you’re an engineer, scientist, designer, or strategist —  
          MeDevice offers the opportunity to make real, measurable impact.
          Let’s build the future of healthcare, together.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:bg-blue-100 hover:scale-105 transition-all"
        >
          Join Our Team
        </Link>
      </section>

      <footer className="py-10 text-center text-slate-500 text-sm bg-white border-t border-slate-200">
        © {new Date().getFullYear()} MeDevice Inc. | Empowering MedTech Through AI
      </footer>
    </main>
  );
}
