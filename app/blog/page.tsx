"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      title: "AI-Driven Compliance: The Next Frontier in MedTech",
      desc: "Explore how artificial intelligence is helping regulatory teams analyze massive datasets, predict audit outcomes, and streamline documentation lifecycles with unprecedented accuracy.",
      img: "/images/blog/ai-compliance.jpg",
      date: "October 18, 2025",
      author: "Dr. Ananya Rao",
      slug: "/blog/ai-compliance",
    },
    {
      title: "Human Factors in Device Design: The Hidden ROI",
      desc: "Why usability and empathy are the new competitive advantages in medical device innovation — and how to embed them into your design DNA.",
      img: "/images/blog/human-factors.jpg",
      date: "September 12, 2025",
      author: "Pawan Vuppu",
      slug: "/blog/human-factors",
    },
    {
      title: "From Lab to Market: Navigating FDA Submissions with Confidence",
      desc: "A step-by-step guide for MedTech startups to accelerate approvals while maintaining quality and compliance integrity.",
      img: "/images/blog/fda-approval.jpg",
      date: "August 25, 2025",
      author: "Raj Mehta",
      slug: "/blog/fda-approval",
    },
  ];

  const categories = [
    "Regulatory Science",
    "AI & Automation",
    "Quality Systems",
    "Digital Transformation",
    "Leadership & Culture",
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
            Insights & <span className="italic text-blue-600">Innovation</span>
          </h1>
          <p className="mt-8 text-xl text-slate-700 font-light max-w-3xl mx-auto">
            Stay informed with expert perspectives, industry updates, and in-depth articles
            from the minds shaping the future of medical technology.
          </p>
        </motion.div>

        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/blog/blog-banner.jpg"
            alt="Blog Banner"
            fill
            priority
            className="object-cover brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-slate-100/80" />
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto text-lg text-slate-700 leading-relaxed font-light"
        >
          The MeDevice Blog is more than just news — it’s a space where ideas, technology,
          and science converge. From AI-driven validation to ethical innovation, our
          writers and researchers uncover how MedTech is transforming lives and shaping
          the healthcare systems of tomorrow.
          <br /><br />
          Each week, we feature new voices from our global ecosystem — engineers, doctors,
          data scientists, and policy experts — who bring their insights directly to you.
        </motion.p>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="py-10 px-6 bg-gradient-to-r from-white via-slate-50 to-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-8">Browse Topics</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full font-medium text-sm hover:bg-blue-200 transition-all cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== BLOG POSTS ===== */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-10"
        >
          Latest Articles
        </motion.h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-left">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white border border-slate-200 rounded-3xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              <Image
                src={post.img}
                alt={post.title}
                width={600}
                height={400}
                className="object-cover w-full h-52"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">{post.title}</h3>
                <p className="text-slate-700 font-light mb-4">{post.desc}</p>
                <p className="text-sm text-slate-500 mb-2">
                  By {post.author} • {post.date}
                </p>
                <Link
                  href={post.slug}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read Full Article →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="py-28 text-center bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Contribute to the MeDevice Community
        </h2>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg mb-10 font-light">
          Have expertise in MedTech, AI, or healthcare innovation?  
          Join our guest writer program and share your insights with our global audience.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:bg-blue-100 hover:scale-105 transition-all"
        >
          Become a Contributor
        </Link>
      </section>

      <footer className="py-10 text-center text-slate-500 text-sm bg-white border-t border-slate-200">
        © {new Date().getFullYear()} MeDevice Inc. | Empowering MedTech Through AI
      </footer>
    </main>
  );
}
