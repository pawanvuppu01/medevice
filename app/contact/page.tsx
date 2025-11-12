"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    service: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🔵 Submitting form data:", formData); // frontend debug log

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("🟢 Response status:", res.status);
      const json = await res.json().catch(() => null);
      console.log("🧩 Response body:", json);

      if (res.ok) {
        setSubmitted(true);
      } else {
        console.error("🔴 Form submission failed!");
      }
    } catch (err) {
      console.error("🔥 Network or fetch error:", err);
    }
  };

  if (submitted)
    return (
      <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-slate-100 flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-3xl shadow-lg max-w-lg"
        >
          <h1 className="text-3xl font-bold text-blue-700 mb-3">
            Message Sent Successfully!
          </h1>
          <p className="text-slate-600">
            Thank you, {formData.full_name.split(" ")[0]} — our team will reach out to you shortly.
          </p>
        </motion.div>
      </main>
    );

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-blue-50 text-slate-800">
      <section className="text-center py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-4"
        >
          Let’s Connect with MeDevice
        </motion.h1>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg">
          Reach out to discuss your project, staffing, or partnership opportunities.  
          We typically respond within 24 hours.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white shadow-xl rounded-3xl p-10 border border-slate-200 space-y-6"
        >
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Send us a Message</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="full_name"
                required
                value={formData.full_name}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Phone (Optional)</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Service Type</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600"
            >
              <option>General Inquiry</option>
              <option>Consulting Services</option>
              <option>Staffing / Recruitment</option>
              <option>Training & Workshops</option>
              <option>Technical Support</option>
              <option>Partnership / Collaboration</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              name="message"
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold py-4 rounded-full hover:bg-blue-800 transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" /> Send Message
          </motion.button>
        </motion.form>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <h2 className="text-2xl font-bold text-blue-800">Contact Information</h2>
          <p className="text-slate-600 text-lg">
            Have a question or need immediate support?  
            Reach out using the details below.
          </p>

          <div className="space-y-4 text-slate-700">
            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-700" /> support@medeviceusa.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-700" /> +1 (800) 555-2789
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-700" /> San Francisco, California, USA
            </p>
          </div>

          <div className="pt-4">
            <h3 className="font-semibold text-slate-700 mb-2">Office Hours</h3>
            <p className="text-slate-600">Monday – Friday: 9:00 AM – 6:00 PM (PST)</p>
            <p className="text-slate-600">Saturday – Sunday: Closed</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
