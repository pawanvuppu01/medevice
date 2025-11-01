"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      title: "AI in MedTech: How Predictive Analytics is Saving Lives",
      img: "/images/blog-ai-medtech.jpg",
      date: "Oct 15, 2025",
      author: "Dr. Pawan Vuppu",
      tag: "AI & Data",
      summary:
        "Artificial Intelligence is transforming patient safety and innovation pipelines. Learn how predictive modeling helps pre-approve device safety profiles before human testing.",
      link: "/blog/ai-medtech",
    },
    {
      title: "Regulatory 4.0: Smarter Compliance through Automation",
      img: "/images/blog-regulatory.jpg",
      date: "Sep 28, 2025",
      author: "Ananya Rao",
      tag: "Compliance",
      summary:
        "Discover how MeDevice integrates AI-driven audit systems with real-time FDA and EU MDR updates — eliminating manual errors and accelerating approvals.",
      link: "/blog/regulatory-automation",
    },
    {
      title: "Designing Trust: UI/UX for Medical Device Interfaces",
      img: "/images/blog-ux.jpg",
      date: "Aug 5, 2025",
      author: "Raj Mehta",
      tag: "Design & Usability",
      summary:
        "Good design saves lives. Learn our approach to accessible, high-contrast, clinician-first interface design that meets FDA human factors guidelines.",
      link: "/blog/design-trust",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-black via-gray-950 to-black text-gray-100 min-h-screen">
      {/* ========== HERO SECTION ========== */}
      <section className="relative h-[85vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <Image
          src="/images/blog-banner.jpg"
          alt="MeDevice Insights"
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
            MeDevice Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto"
          >
            Explore articles, AI research, and compliance breakthroughs shaping
            the future of medical technology.
          </motion.p>
        </div>
      </section>

      {/* ========== FEATURED POSTS ========== */}
      <section className="py-24 border-t border-gray-800 bg-black/40 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-red-400 text-center mb-14">
          Featured Articles
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 border border-gray-700 rounded-3xl overflow-hidden hover:border-red-500/40 hover:shadow-red-500/20 transition-all"
            >
              <Image
                src={post.img}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-56 object-cover opacity-90 hover:opacity-100 transition"
              />
              <div className="p-6">
                <span className="inline-block bg-red-500/20 border border-red-400/40 text-red-300 text-xs px-3 py-1 rounded-full mb-2">
                  {post.tag}
                </span>
                <h3 className="text-2xl font-semibold text-red-400 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  {post.date} • {post.author}
                </p>
                <p className="text-gray-300 text-sm mb-4">{post.summary}</p>
                <Link
                  href={post.link}
                  className="text-red-400 font-semibold text-sm hover:text-red-300 transition underline"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== AI HIGHLIGHT SECTION ========== */}
      <section className="py-24 border-t border-gray-800 bg-gradient-to-r from-red-800 via-pink-700 to-red-800 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">AI Insights & Research</h2>
        <p className="max-w-3xl mx-auto text-pink-100 text-lg mb-10">
          MeDevice Labs continuously pushes the frontier of AI in healthcare —
          from predictive safety models to federated patient data systems.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          {["Federated AI", "Digital Twin Modeling", "Neural Regulatory Systems", "Smart Labeling"].map(
            (topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/10 border border-white/30 px-6 py-3 rounded-full text-sm font-semibold shadow-lg"
              >
                {topic}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-24 text-center bg-black border-t border-gray-800">
        <h2 className="text-4xl font-bold text-red-400 mb-4">
          Contribute to MeDevice Insights
        </h2>
        <p className="max-w-3xl mx-auto text-gray-400 mb-8 text-lg">
          Have something powerful to share about AI, MedTech, or innovation?
          Join our contributor program and publish your research or opinion.
        </p>
        <Link
          href="/contact"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded-full shadow-xl hover:scale-110 transition-all"
        >
          Become a Contributor
        </Link>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm bg-black border-t border-gray-800">
        © {new Date().getFullYear()} MeDevice Inc. | Empowering the Future of MedTech
      </footer>
    </main>
  );
}