"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart3, Users, Mail, Briefcase, Bot } from "lucide-react";

export default function AdminSidebar() {
  const links = [
    { name: "Dashboard", icon: BarChart3, href: "/admin" },
    { name: "Clients", icon: Users, href: "/admin/clients" },
    { name: "Jobs", icon: Briefcase, href: "/admin/jobs" },
    { name: "Messages", icon: Mail, href: "/admin/messages" },
    { name: "AI Assistant Logs", icon: Bot, href: "/admin/ai-logs" },
  ];

  return (
    <aside className="w-72 bg-black/60 border-r border-gray-800 h-screen flex flex-col">
      <div className="p-6 border-b border-gray-800 text-center">
        <h1 className="text-2xl font-bold text-red-500">MeDevice Admin</h1>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link, i) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={link.href}
              className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-red-600/30 hover:text-white transition"
            >
              <link.icon className="w-5 h-5" />
              {link.name}
            </Link>
          </motion.div>
        ))}
      </nav>
      <footer className="text-center text-gray-500 text-sm py-4 border-t border-gray-800">
        © {new Date().getFullYear()} MeDevice Inc.
      </footer>
    </aside>
  );
}