"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Ventura MedTech — AI-Driven Cardio Diagnostics",
      img: "/images/case-ventura.jpg",
      summary:
        "Developed predictive AI algorithms and automated FDA documentation pipelines for early heart disease detection.",
      impact: [
        "Reduced regulatory submission time by 40%",
        "Increased diagnostic accuracy to 96.2%",
        "Achieved ISO 13485 certification in under 3 months",
      ],
      tech: ["TensorFlow", "Azure AI", "Next.js", "PostgreSQL", "FastAPI"],
      link: "/contact",
    },
    {
      title: "StanfordChem — Digital Marketing for Materials Innovation",
      img: "/images/case-stanfordchem.jpg",
      summary:
        "Built a chemical product marketing platform integrating CRM automation, client analytics, and global e-commerce reach.",
      impact: [
        "Boosted online conversions by 120%",
        "Enabled 10,000+ active B2B accounts",
        "Scaled hosting on Vercel with edge caching for 2.1M monthly views",
      ],
      tech: ["Next.js", "Supabase", "Stripe API", "Tailwind", "Node.js"],
      link: "/contact",
    },
    {
      title: "EarthVision Health — 3D Visualization for AI Diagnostics",
      img: "/images/case-earthvision.jpg",
      summary:
        "Developed an interactive globe-based 3D data visualization platform to track medical trends using satellite and AI insights.",
      impact: [
        "Processed 2TB of geospatial health data in real-time",
        "Deployed cross-region AI models with latency under 100ms",
        "Partnered with WHO and AI Labs for data-driven healthcare mapping",
      ],
      tech: ["Three.js", "Python AI API", "Next.js", "WebGL", "Cloudflare"],
      link: "/contact",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-black via-gray-950 to-black text-gray-100 min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <Image
          src="/images/case-banner.jpg"
          alt="MeDevice Case Studies"
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
            Proven Impact Through Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto"
          >
            Explore how MeDevice helps MedTech and scientific enterprises harness AI,
            compliance, and design to achieve measurable success.
          </motion.p>
        </div>
      </section>

      {/* ================= CASE STUDY CARDS ================= */}
      <section className="py-24 border-t border-gray-800 bg-black/40 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-red-400 text-center mb-14">
          Featured Case Studies
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
          {caseStudies.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 border border-gray-700 rounded-3xl overflow-hidden hover:shadow-red-500/30 hover:border-red-500/40 transition-all"
            >
              <Image
                src={c.img}
                alt={c.title}
                width={600}
                height={400}
                className="w-full h-56 object-cover opacity-90 hover:opacity-100 transition"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-red-400 mb-3">
                  {c.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{c.summary}</p>

                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-3">
                  {c.impact.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {c.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 bg-red-500/20 border border-red-500/40 text-red-300 text-xs rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={c.link}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full text-sm font-semibold transition-all"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= RESULTS CTA ================= */}
      <section className="py-24 text-center bg-gradient-to-r from-red-700 to-pink-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Your Success Story Starts Here</h2>
        <p className="max-w-3xl mx-auto text-pink-100 mb-8 text-lg">
          Let’s collaborate to craft solutions that drive measurable outcomes,
          global impact, and patient safety — powered by MeDevice.
        </p>
        <Link
          href="/contact"
          className="bg-white text-red-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:scale-110 hover:bg-gray-100 transition-all"
        >
          Start Your Project
        </Link>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm bg-black border-t border-gray-800">
        © {new Date().getFullYear()} MeDevice Inc. | Real Projects, Real Impact
      </footer>
    </main>
  );
}