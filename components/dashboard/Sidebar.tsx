"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  User,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: <LayoutDashboard size={22} />, label: "Overview" },
  { href: "/dashboard/profile", icon: <User size={22} />, label: "Profile" },
  { href: "/dashboard/analytics", icon: <BarChart3 size={22} />, label: "Analytics" },
  { href: "/dashboard/settings", icon: <Settings size={22} />, label: "Settings" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`glass fixed left-0 top-0 h-screen p-4 flex flex-col justify-between transition-all duration-300 z-40 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-xl font-bold text-red-600 mb-8 transition-all ${
            collapsed ? "opacity-0" : "opacity-100"
          }`}
        >
          MeDevice
        </motion.h2>

        <nav className="space-y-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                className="flex items-center gap-3 p-3 rounded-lg text-gray-200 hover:text-white cursor-pointer transition-all"
              >
                {item.icon}
                {!collapsed && <span>{item.label}</span>}
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-center p-2 bg-red-700 hover:bg-red-800 text-white rounded-lg transition-all"
      >
        {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>
    </motion.aside>
  );
}
