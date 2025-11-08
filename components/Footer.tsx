"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin, Twitter, Github, Youtube } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  const sections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
        { name: "Projects", href: "/projects" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Consulting", href: "/consulting" },
        { name: "Staffing", href: "/staffing" },
        { name: "Integrated Solutions", href: "/integrated-solutions" },
        { name: "Training", href: "/training" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog / Insights", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Use", href: "/terms" },
      ],
    },
  ];

  const socialIcons = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={22} />,
      href: "https://linkedin.com",
    },
    {
      name: "Twitter",
      icon: <Twitter size={22} />,
      href: "https://twitter.com",
    },
    {
      name: "GitHub",
      icon: <Github size={22} />,
      href: "https://github.com",
    },
    {
      name: "YouTube",
      icon: <Youtube size={22} />,
      href: "https://youtube.com",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50 border-t border-slate-200 text-slate-700">
      {/* Floating background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-4 gap-12">
        {/* Logo & Description */}
        <div>
          <Link
            href="/"
            className="text-2xl font-extrabold text-blue-800 tracking-tight"
          >
            MeDevice<span className="text-blue-600">AI</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 max-w-xs">
            Empowering the next generation of MedTech innovation through
            intelligent consulting, compliance, and AI-driven solutions.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {socialIcons.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                target="_blank"
                className="text-blue-700 hover:text-blue-900 bg-blue-100 hover:bg-blue-200 p-2 rounded-full transition-all shadow-sm"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        {sections.map((section, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-blue-800 mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-blue-700 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold text-blue-800 mb-4">
            Stay Updated
          </h3>
          <p className="text-sm text-slate-600 mb-4">
            Subscribe to our newsletter for MedTech insights, AI trends, and
            exclusive updates.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="w-full border border-slate-300 rounded-full px-5 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-700 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-blue-800 hover:scale-105 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative text-center py-6 text-sm text-slate-500 border-t border-slate-200">
        © {new Date().getFullYear()} MeDevice Inc. | Empowering MedTech Through AI
      </div>
    </footer>
  );
}
