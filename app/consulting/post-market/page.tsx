"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/fadeUp";

export default function PostMarketPage() {
  const activities = [
    "Customer Feedback Analysis",
    "Adverse Event Reporting",
    "Field Action Management",
    "Regulatory Compliance Tracking"
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
        Post-Market Surveillance
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {activities.map((activity, i) => (
          <motion.div
            key={i}
            variants={fadeUp(i * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{activity}</h3>
            <p className="text-gray-600">Monitoring process for {activity.toLowerCase()}.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
