"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ clients: 0, projects: 0, messages: 0, users: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/admin/stats');
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (err) {
        console.error('Error fetching stats:', err);
      }
      setLoading(false);
    }
    fetchStats();
  }, []);

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

      {!loading && (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-6xl mx-auto">
          <div className="bg-white/5 border border-blue-500/30 p-6 rounded-lg">
            <p className="text-gray-400 text-sm">Total Clients</p>
            <p className="text-3xl font-bold text-blue-400">{stats.clients}</p>
          </div>
          <div className="bg-white/5 border border-green-500/30 p-6 rounded-lg">
            <p className="text-gray-400 text-sm">Active Projects</p>
            <p className="text-3xl font-bold text-green-400">{stats.projects}</p>
          </div>
          <div className="bg-white/5 border border-yellow-500/30 p-6 rounded-lg">
            <p className="text-gray-400 text-sm">Messages</p>
            <p className="text-3xl font-bold text-yellow-400">{stats.messages}</p>
          </div>
          <div className="bg-white/5 border border-purple-500/30 p-6 rounded-lg">
            <p className="text-gray-400 text-sm">Users</p>
            <p className="text-3xl font-bold text-purple-400">{stats.users}</p>
          </div>
        </div>
      )}

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
        © {new Date().getFullYear()} MeDevice Admin Portal | Powered by Next.js & Prisma
      </footer>
    </main>
  );
}
