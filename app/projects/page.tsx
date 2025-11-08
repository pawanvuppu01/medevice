"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  project_name: string;
  client?: string;
  status: "Active" | "Completed" | "In Progress" | "Pending";
  start_date?: string;
  end_date?: string;
  description?: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  // ✅ Simulated API fetch — replace with your backend later
  useEffect(() => {
    setTimeout(() => {
      const fakeProjects: Project[] = [
        {
          id: 1,
          project_name: "AI-Driven Regulatory Compliance System",
          client: "KPMG HealthTech",
          status: "Completed",
          start_date: "2023-02-01",
          end_date: "2023-09-01",
          description:
            "Developed an AI-powered compliance engine automating FDA 510(k) submission document validation.",
        },
        {
          id: 2,
          project_name: "MedDevice Cloud Platform",
          client: "InGenesis Technologies",
          status: "Active",
          start_date: "2024-03-15",
          end_date: "",
          description:
            "Building a secure cloud platform for device lifecycle management integrating predictive analytics.",
        },
        {
          id: 3,
          project_name: "Clinical Data Visualization Portal",
          client: "UCSF BioAI Lab",
          status: "In Progress",
          start_date: "2024-06-01",
          end_date: "",
          description:
            "Developing an interactive dashboard with dynamic patient trend modeling for faster trial decisions.",
        },
        {
          id: 4,
          project_name: "IoT Device Integration Framework",
          client: "Mascon Global",
          status: "Pending",
          start_date: "2025-01-01",
          end_date: "",
          description:
            "Framework for secure IoT connectivity enabling real-time device monitoring and predictive maintenance.",
        },
      ];
      setProjects(fakeProjects);
      setLoading(false);
    }, 800);
  }, []);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.status === filter);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50 text-slate-800">
      {/* ====== HERO SECTION ====== */}
      <section className="relative text-center py-24 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-4"
        >
          Our Projects & Innovations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-slate-600 text-lg"
        >
          Explore our ongoing and completed MedTech, AI, and cloud projects
          that shape the next generation of intelligent healthcare systems.
        </motion.p>
      </section>

      {/* ====== FILTER BAR ====== */}
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-3 mb-10">
        {["All", "Active", "In Progress", "Completed", "Pending"].map(
          (status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-5 py-2 rounded-full border font-medium transition-all ${
                filter === status
                  ? "bg-blue-700 text-white border-blue-700"
                  : "bg-white text-blue-700 border-blue-300 hover:bg-blue-50"
              }`}
            >
              {status}
            </button>
          )
        )}
      </div>

      {/* ====== PROJECTS TABLE ====== */}
      <section className="max-w-6xl mx-auto bg-white border border-slate-200 shadow-lg rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-slate-700">
            <thead className="bg-blue-700 text-white uppercase text-sm">
              <tr>
                <th className="p-4">Project Name</th>
                <th className="p-4">Client</th>
                <th className="p-4">Status</th>
                <th className="p-4">Start Date</th>
                <th className="p-4">End Date</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-10 text-slate-500 text-sm"
                  >
                    Loading projects…
                  </td>
                </tr>
              ) : Array.isArray(filteredProjects) && filteredProjects.length > 0 ? (
                <AnimatePresence>
                  {filteredProjects.map((p, index) => (
                    <motion.tr
                      key={p.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-slate-200 hover:bg-blue-50/40 transition-all"
                    >
                      <td className="p-4 font-semibold text-slate-800">
                        {p.project_name}
                      </td>
                      <td className="p-4">{p.client || "—"}</td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1.5 text-xs font-semibold rounded-full ${
                            p.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : p.status === "Completed"
                              ? "bg-blue-100 text-blue-700"
                              : p.status === "In Progress"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm">
                        {p.start_date ? new Date(p.start_date).toLocaleDateString() : "—"}
                      </td>
                      <td className="p-4 text-sm">
                        {p.end_date
                          ? new Date(p.end_date).toLocaleDateString()
                          : "—"}
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-10 text-slate-500 text-sm"
                  >
                    No projects available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* ====== PROJECT DETAILS SECTION ====== */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-10">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">
          Project Insights
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white border border-slate-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {p.project_name}
              </h3>
              <p className="text-slate-600 text-sm mb-3">
                <strong>Client:</strong> {p.client || "Confidential"}
              </p>
              <p className="text-slate-600 text-sm mb-3">
                <strong>Status:</strong> {p.status}
              </p>
              <p className="text-slate-700 leading-relaxed text-sm">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 text-center mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Have a Project in Mind?
        </h2>
        <p className="max-w-2xl mx-auto text-blue-100 mb-8">
          Let’s collaborate to bring your medical device or AI innovation to
          market faster, smarter, and fully compliant. Our team blends
          regulatory expertise with next-gen engineering.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:bg-blue-100 transition-all"
        >
          Contact Us
        </a>
      </section>

      <footer className="py-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} MeDevice Inc. | Empowering MedTech Through AI
      </footer>
    </main>
  );
}
