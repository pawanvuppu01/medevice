"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, User } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Consulting", href: "/consulting" },
    { name: "Staffing", href: "/staffing" },
    { name: "Solutions", href: "/integrated-solutions" },
    { name: "Training", href: "/training" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile", href: "/dashboard/profile" }, // ✅ Added Profile link
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-red-800">
          MeDevice
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-red-700 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Profile Icon (Shortcut) */}
        <Link href="/dashboard/profile" className="hidden md:flex items-center gap-2 text-red-700">
          <User size={20} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 hover:text-red-700"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 py-3 px-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-red-700 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
