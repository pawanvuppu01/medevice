"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Consulting", href: "/consulting" },
    { name: "Staffing", href: "/staffing" },
    { name: "Solutions", href: "/integrated-solutions" },
    { name: "Training", href: "/training" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Command Center", href: "/dashboard/command-center" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-red-700">
          MeDevice
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-red-700 transition font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-red-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
