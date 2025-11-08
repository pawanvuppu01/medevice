"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (name: string) => {
    setDropdown(dropdown === name ? null : name);
  };

  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      sublinks: [
        { name: "Consulting", href: "/consulting" },
        { name: "Staffing", href: "/staffing" },
        { name: "Integrated Solutions", href: "/integrated-solutions" },
        { name: "Training", href: "/training" },
      ],
    },
    {
      name: "Industries",
      sublinks: [
        { name: "MedTech", href: "/industries/medtech" },
        { name: "AI & Data Science", href: "/industries/ai" },
        { name: "Regulatory Systems", href: "/industries/regulatory" },
      ],
    },
    {
      name: "Resources",
      sublinks: [
        { name: "Blog / Insights", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      name: "Company",
      sublinks: [
        { name: "Projects", href: "/projects" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/80 shadow-lg"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:px-12">
        <Link
          href="/"
          className="text-2xl font-extrabold text-blue-800 tracking-tight hover:scale-105 transition-transform"
        >
          MeDevice<span className="text-blue-600">AI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 relative">
          {menuLinks.map((link, i) =>
            link.sublinks ? (
              <div key={i} className="relative">
                <button
                  onClick={() => handleDropdownToggle(link.name)}
                  className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-700 transition relative pb-1"
                >
                  {link.name}
                  <motion.div
                    animate={{ rotate: dropdown === link.name ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4 mt-1" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {dropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 bg-white border border-slate-200 shadow-lg rounded-xl w-64 py-3 z-50"
                    >
                      {link.sublinks.map((sublink, j) => (
                        <Link
                          key={j}
                          href={sublink.href}
                          className="block px-5 py-2.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-all"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={i}
                href={link.href}
                className="font-medium text-slate-700 hover:text-blue-700 relative pb-1 transition group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="ml-6 bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 hover:scale-105 transition-all shadow-md"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          className="md:hidden text-blue-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-slate-200 shadow-lg px-6 py-6 space-y-3"
          >
            {menuLinks.map((link, i) =>
              link.sublinks ? (
                <div key={i}>
                  <button
                    className="flex justify-between w-full font-medium text-slate-700 hover:text-blue-700 transition"
                    onClick={() =>
                      setDropdown(dropdown === link.name ? null : link.name)
                    }
                  >
                    {link.name}
                    <motion.div
                      animate={{
                        rotate: dropdown === link.name ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {dropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 pt-2 space-y-2"
                      >
                        {link.sublinks.map((sublink, j) => (
                          <Link
                            key={j}
                            href={sublink.href}
                            onClick={() => setMenuOpen(false)}
                            className="block text-slate-600 hover:text-blue-700 transition"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-medium text-slate-700 hover:text-blue-700 transition"
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block bg-blue-700 text-white px-5 py-3 rounded-full font-semibold text-center hover:bg-blue-800 hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
