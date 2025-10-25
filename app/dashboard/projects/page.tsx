"use client";

import { motion } from "framer-motion";
import { Briefcase, Plus } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    { id: 1, name: "AI Compliance Tracker", status: "Active", progress: "80%" },
    { id: 2, name: "MedTech Staffing Platform", status: "In Progress", progress: "65%" },
    { id: 3, name: "Device Testing Automation", status: "Completed", progress: "100%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-red-800 mb-10 text-center"
      >
        <Briefcase className="inline mr-3 text-red-700" size={32} />
        Project Dashboard
      </motion.h1>

      <div className="flex justify-end mb-8">
        <button className="flex items-center gap-2 bg-red-700 text-white px-5 py-2 rounded-lg hover:bg-red-800 transition">
          <Plus size={18} />
          Add Project
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center"
          >
            <h2 className="text-2xl font-semibold text-red-700 mb-2">{proj.name}</h2>
            <p className="text-gray-600 mb-1">Status: {proj.status}</p>
            <div className="bg-gray-200 h-3 w-full rounded-full mt-3">
              <div
                className="bg-red-700 h-3 rounded-full transition-all duration-700"
                style={{ width: proj.progress }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">Progress: {proj.progress}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
