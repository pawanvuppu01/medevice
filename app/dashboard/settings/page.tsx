"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  Bell,
  Lock,
  User,
  Cpu,
  Brain,
  CheckCircle,
  Save,
  Moon,
  Sun,
} from "lucide-react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [aiAssistant, setAIAssistant] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-red-950/40 to-black text-white p-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto glass rounded-3xl shadow-2xl p-10 relative overflow-hidden"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-pink-900/10 blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between mb-10 relative z-10">
          <div className="flex items-center gap-3">
            <Settings className="text-red-500" size={36} />
            <h1 className="text-4xl font-bold">System Settings</h1>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-sm text-gray-400 italic"
          >
            v3.0 AI Enhanced
          </motion.div>
        </div>

        {/* Settings Grid */}
        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {/* Profile */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white/10 border border-white/10 rounded-2xl backdrop-blur-xl shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <User className="text-red-400" /> Profile Information
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-white/10 border border-gray-700 focus:border-red-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg bg-white/10 border border-gray-700 focus:border-red-600"
              />
            </div>
          </motion.div>

          {/* Security */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white/10 border border-white/10 rounded-2xl backdrop-blur-xl shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Lock className="text-red-400" /> Security Settings
            </h2>
            <div className="space-y-4">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full p-3 rounded-lg bg-white/10 border border-gray-700 focus:border-red-600"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full p-3 rounded-lg bg-white/10 border border-gray-700 focus:border-red-600"
              />
            </div>
          </motion.div>

          {/* Notifications */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white/10 border border-white/10 rounded-2xl backdrop-blur-xl shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Bell className="text-red-400" /> Notifications
            </h2>
            <div className="flex items-center justify-between">
              <span>Email Alerts</span>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  notifications
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                {notifications ? "Enabled" : "Disabled"}
              </button>
            </div>
          </motion.div>

          {/* Theme */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white/10 border border-white/10 rounded-2xl backdrop-blur-xl shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Moon className="text-red-400" /> Theme Preference
            </h2>
            <div className="flex items-center justify-between">
              <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition flex items-center gap-2 ${
                  darkMode
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                {darkMode ? (
                  <>
                    <Moon size={16} /> On
                  </>
                ) : (
                  <>
                    <Sun size={16} /> Off
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* AI Settings */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white/10 border border-white/10 rounded-2xl backdrop-blur-xl shadow-lg md:col-span-2"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Cpu className="text-red-400" /> AI Preferences
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>AI Dashboard Optimization</span>
                <button
                  onClick={() => setAIAssistant(!aiAssistant)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition flex items-center gap-2 ${
                    aiAssistant
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  {aiAssistant ? (
                    <>
                      <Brain size={16} /> Active
                    </>
                  ) : (
                    "Disabled"
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-400">
                When enabled, the AI system automatically adapts dashboard
                layout, color tone, and content based on your behavior and
                activity frequency.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-12 relative z-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSave}
            className="flex items-center gap-2 bg-gradient-to-r from-red-700 to-pink-700 hover:from-red-800 hover:to-pink-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-red-500/20 transition-all"
          >
            <Save size={20} /> Save Changes
          </motion.button>
        </div>

        {/* Save Success Animation */}
        <AnimatePresence>
          {saveSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute top-4 right-4 bg-green-600/80 px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg backdrop-blur-md"
            >
              <CheckCircle size={18} /> Saved Successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
