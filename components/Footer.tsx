"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-300 border-t border-white/10">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,80,80,0.1),transparent_70%)] blur-3xl" />

      {/* Main content */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10"
      >
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">MeDevice</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Empowering medical innovation through AI, design, and compliance. 
            We bridge technology and healthcare to build smarter solutions for life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["Consulting", "/consulting"],
              ["Staffing", "/staffing"],
              ["Solutions", "/integrated-solutions"],
              ["Training", "/training"],
              ["Contact", "/contact"],
            ].map(([label, link]) => (
              <motion.li key={label} whileHover={{ x: 4, color: "#fff" }}>
                <a href={link} className="hover:text-pink-400 transition">
                  {label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact</h3>

          {/* Address with Google Maps link */}
          <a
            href="https://www.google.com/maps/place/123+Innovation+Drive,+San+Jose,+CA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-pink-400 transition"
          >
            <FaMapMarkerAlt /> 123 Innovation Drive, San Jose, CA
          </a>

          {/* Clickable phone */}
          <a
            href="tel:+14085551234"
            className="flex items-center gap-2 mt-3 text-sm text-gray-400 hover:text-pink-400 transition"
          >
            <FaPhoneAlt /> +1 (408) 555-1234
          </a>

          {/* Clickable email */}
          <a
            href="mailto:hello@medevice.com"
            className="flex items-center gap-2 mt-3 text-sm text-gray-400 hover:text-pink-400 transition"
          >
            <FaEnvelope /> hello@medevice.com
          </a>

          {/* Social icons */}
          <div className="flex space-x-4 mt-6">
            {[FaLinkedin, FaTwitter, FaInstagram].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{
                  scale: 1.2,
                  color: "#fff",
                  textShadow: "0 0 12px rgba(255,255,255,0.8)",
                }}
                href="#"
                className="text-gray-400 hover:text-pink-400 transition text-lg"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-8" />

      {/* Bottom note */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 text-center py-6 text-xs text-gray-500"
      >
        © {new Date().getFullYear()} MeDevice. All rights reserved. | Built with ❤️ by Pawan Vuppu
      </motion.div>
    </footer>
  );
}
