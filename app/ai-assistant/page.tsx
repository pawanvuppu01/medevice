"use client";

import { motion } from "framer-motion";
import ChatWidget from "@/components/ChatWidget";
import Image from "next/image";

export default function AIAssistantPage() {
  return (
    <main className="bg-gradient-to-b from-black via-gray-950 to-black text-gray-100 min-h-screen">
      {/* HERO */}
      <section className="relative h-[85vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <Image
          src="/images/ai-assistant-banner.jpg"
          alt="MeDevice AI Assistant"
          fill
          priority
          className="object-cover brightness-[0.45]"
        />
        <div className="relative z-10 px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent leading-tight"
          >
            MeDevice AI Advisor
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto"
          >
            Talk to our intelligent assistant trained on MedTech, AI, and regulatory compliance. Ask anything, anytime.
          </motion.p>
        </div>
      </section>

      {/* CHAT INTERFACE */}
      <section className="py-20 border-t border-gray-800 bg-black/40 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-400 mb-8">
            Try the MeDevice AI Chat
          </h2>
          <ChatWidget />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-red-700 to-pink-600 text-white">
        <h2 className="text-4xl font-bold mb-4">
          AI. Expertise. Precision. MeDevice.
        </h2>
        <p className="max-w-3xl mx-auto text-pink-100 mb-8 text-lg">
          Experience the future of healthcare consulting — powered by MeDevice AI.
        </p>
        <a
          href="/contact"
          className="bg-white text-red-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:scale-110 hover:bg-gray-100 transition-all"
        >
          Talk to a Human Expert →
        </a>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm bg-black border-t border-gray-800">
        © {new Date().getFullYear()} MeDevice Inc. | Built with ❤️ + AI
      </footer>
    </main>
  );
}