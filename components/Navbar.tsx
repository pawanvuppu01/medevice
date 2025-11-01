"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { supabaseAuth } from "@/lib/authClient";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Consulting", href: "/consulting" },
    { name: "Staffing", href: "/staffing" },
    { name: "Solutions", href: "/integrated-solutions" },
    { name: "Training", href: "/training" },
    { name: "Contact", href: "/contact" },
  ];

  // 🔐 Manage session
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabaseAuth.auth.getSession();
      setSession(data.session);
    };
    getSession();

    const { data: listener } = supabaseAuth.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  // 🌫️ Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = async () => {
    await supabaseAuth.auth.signOut();
    setSession(null);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <Link href="/" className="text-2xl font-extrabold text-red-700 tracking-tight hover:opacity-80">
            MeDevice
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-700 transition font-medium"
              >
                {item.name}
              </Link>
            ))}

            {session ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setShowAuth(true)}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Login / Sign Up
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-red-700" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 transition"
              >
                {item.name}
              </Link>
            ))}

            {session ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMobileOpen(false);
                }}
                className="w-full text-left px-6 py-3 text-red-600 font-semibold hover:bg-red-50"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => {
                  setShowAuth(true);
                  setMobileOpen(false);
                }}
                className="w-full text-left px-6 py-3 text-red-600 font-semibold hover:bg-red-50"
              >
                Login / Sign Up
              </button>
            )}
          </div>
        )}
      </nav>

      {/* ✨ Auth Popup Modal */}
      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </>
  );
}