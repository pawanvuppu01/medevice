"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/fadeUp";

export default function DesignControlPage() {
  const steps = [
    "Establish Design Inputs",
    "Develop Design Outputs",
    "Conduct Design Reviews",
    "Perform Design Verification",
    "Validate the Final Design"
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center mb-12 text-blue-900"
      >
        Design Control Process
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            variants={fadeUp(i * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{step}</h3>
            <p className="text-gray-600">Detailed explanation for {step.toLowerCase()}.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
