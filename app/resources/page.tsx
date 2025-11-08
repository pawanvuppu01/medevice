"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ResourcesPage() {
  const resources = [
    {
      title: "AI in Medical Device Validation",
      desc: "Discover how machine learning algorithms and digital twins are transforming validation cycles — reducing testing time while enhancing traceability and quality outcomes.",
      img: "/images/resources/ai-validation.jpg",
      link: "/blog/ai-validation",
    },
    {
      title: "Human Factors & Usability in MedTech",
      desc: "Explore how user-centered design improves patient safety, regulatory acceptance, and post-market performance.",
      img: "/images/resources/human-factors.jpg",
      link: "/blog/human-factors",
    },
    {
      title: "Cloud-Enabled Compliance Frameworks",
      desc: "Learn how our integrated cloud model enables secure, compliant, and automated management of regulatory documentation across multiple jurisdictions.",
      img: "/images/resources/cloud-compliance.jpg",
      link: "/blog/cloud-compliance",
    },
  ];

  const downloads = [
    {
      title: "Regulatory Readiness Checklist",
      file: "/downloads/regulatory-readiness.pdf",
    },
    {
      title: "MedTech AI Compliance Whitepaper",
      file: "/downloads/ai-compliance.pdf",
    },
    {
      title: "Digital Validation Process Guide",
      file: "/downloads/digital-validation.pdf",
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
            Knowledge <span className="italic text-blue-600">Hub</span>
          </h1>
          <p className="mt-8 text-xl text-slate-700 font-light max-w-3xl mx-auto">
            A curated space where innovation meets insight —  
            explore the latest MedTech research, AI breakthroughs, and compliance frameworks
            that are shaping tomorrow’s healthcare.
          </p>
        </motion.div>

        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/resources/resources-banner.jpg"
            alt="Resources Banner"
            fill
            priority
            className="object-cover brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-slate-100/80" />
        </div>
      </section>

      {/* ===== ARTICLES ===== */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-10"
        >
          Featured Insights & Research
        </motion.h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {resources.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white border border-slate-200 rounded-3xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={400}
                className="object-cover w-full h-52"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-700 font-light leading-relaxed mb-4">
                  {item.desc}
                </p>
                <Link
                  href={item.link}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== DOWNLOADS ===== */}
      <section className="py-24 px-6 bg-gradient-to-r from-white via-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-800 mb-10"
        >
          Downloadable Resources
        </motion.h2>
        <p className="max-w-4xl mx-auto text-lg text-slate-700 font-light leading-relaxed mb-12">
          Access our detailed guides and industry resources built by MeDevice experts.
          Each document is crafted to help teams accelerate innovation while maintaining
          regulatory integrity.
        </p>
        <div className="max-w-4xl mx-auto space-y-5">
          {downloads.map((file, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex justify-between items-center bg-white border border-slate-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all"
            >
              <p className="text-lg text-slate-700 font-medium">{file.title}</p>
              <a
                href={file.file}
                download
                className="bg-blue-700 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-800 transition-all"
              >
                Download
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== KNOWLEDGE MISSION ===== */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-10"
        >
          Our Commitment to Open Knowledge
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto text-lg text-slate-700 leading-relaxed font-light"
        >
          Knowledge is the bridge between innovation and impact.  
          MeDevice invests deeply in thought leadership — from research on ethical AI
          in diagnostics to frameworks for agile compliance transformation.  
          <br /><br />
          Our Knowledge Hub is designed to empower every MedTech professional —
          from engineers and regulators to product managers and clinical leaders —
          with actionable insights, case studies, and playbooks.
          <br /><br />
          Each piece is peer-reviewed and curated by domain experts.  
          Our mission is to accelerate the evolution of safer, smarter medical technology,
          one article and one idea at a time.
        </motion.p>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-28 text-center bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <h2 className="text-4xl font-bold mb-4">Share Knowledge, Build Impact</h2>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg mb-10 font-light">
          Have insights or research to share?  
          Partner with MeDevice to publish, collaborate, or feature your MedTech innovations
          in our growing ecosystem.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:bg-blue-100 hover:scale-105 transition-all"
        >
          Submit Your Article
        </Link>
      </section>

      <footer className="py-10 text-center text-slate-500 text-sm bg-white border-t border-slate-200">
        © {new Date().getFullYear()} MeDevice Inc. | Empowering MedTech Through AI
      </footer>
    </main>
  );
}
