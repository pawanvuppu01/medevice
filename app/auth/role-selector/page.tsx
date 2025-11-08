"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RoleSelector() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-10 rounded-3xl shadow-xl text-center space-y-8 max-w-md w-full"
      >
        <h1 className="text-4xl font-bold text-blue-800">Join MeDevice</h1>
        <p className="text-gray-600">Select your user type to continue</p>

        <div className="flex flex-col gap-6 mt-8">
          <Link
            href="/auth/signup?role=client"
            className="block bg-blue-700 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            I’m a Client / Individual User
          </Link>
          <Link
            href="/auth/signup?role=admin"
            className="block bg-slate-800 text-white py-4 rounded-xl font-semibold hover:bg-slate-900 transition"
          >
            I’m a Company / Admin User
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
