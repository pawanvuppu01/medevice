"use client";
import { motion } from "framer-motion";

export default function CaseStudiesPage() {
  const cases = [
    {
      client: "NeuroSense Labs",
      outcome: "Reduced validation time by 40% using our AI-driven QMS platform.",
    },
    {
      client: "CardioNext Diagnostics",
      outcome: "Achieved FDA clearance 2x faster with automated documentation tools.",
    },
    {
      client: "BioNova Systems",
      outcome: "Enabled seamless EU MDR transition with integrated compliance dashboards.",
    },
  ];

  return (
    <section className="section text-center">
      <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-5xl font-bold text-brandBlue mb-6">
        Case Studies
      </motion.h1>
      <p className="text-lg text-textMuted mb-12 max-w-3xl mx-auto">
        Discover how we’ve helped MedTech innovators achieve faster approvals and better compliance outcomes.
      </p>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {cases.map((c, i) => (
          <motion.div
            key={i}
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            transition={{delay:i*0.2}}
            className="card"
          >
            <h3 className="card-title">{c.client}</h3>
            <p className="text-textMuted">{c.outcome}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <a href="/contact" className="btn-primary">Partner With Us</a>
      </div>
    </section>
  );
}
