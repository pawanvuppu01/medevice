"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const sections = [
    {
      title: "Clients",
      desc: "View and manage partner companies, add new MedTech clients, or remove old entries.",
      href: "/admin/clients",
    },
    {
      title: "Projects",
      desc: "Track all active MedTech and regulatory projects, update progress, and manage status reports.",
      href: "/admin/projects",
    },
    {
      title: "Trainings",
      desc: "Add new workshops, manage instructors, and update training session details.",
      href: "/admin/trainings",
    },
    {
      title: "Messages",
      desc: "Read contact form submissions, respond to leads, and analyze inbound communication trends.",
      href: "/admin/messages",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-100 p-10">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-10 text-center text-red-500"
      >
        Admin Control Center
      </motion.h1>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sections.map((s, i) => (
          <motion.div
            key={s.href}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 50px rgba(255,0,0,0.25)",
            }}
            className="bg-white/5 border border-red-500/30 p-8 rounded-3xl text-left shadow-lg transition-all hover:border-red-400"
          >
            <h2 className="text-2xl font-semibold text-red-400 mb-3">{s.title}</h2>
            <p className="text-gray-300 mb-6">{s.desc}</p>
            <Link
              href={s.href}
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2 rounded-lg"
            >
              Manage {s.title}
            </Link>
          </motion.div>
        ))}
      </section>

      <footer className="text-center text-gray-500 mt-16 text-sm">
        © {new Date().getFullYear()} MeDevice Admin Portal | Powered by Supabase & Next.js
      </footer>
    </main>
  );
}
