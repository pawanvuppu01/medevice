"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { User, Mail, MapPin, Edit, Trash2, Upload } from "lucide-react";

export default function ProfilePage() {
  const [profilePic, setProfilePic] = useState<string | null>(null);

  // Handle image upload
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfilePic(reader.result as string);
      reader.readAsDataURL(file);
    }
  }, []);

  // Dropzone configuration
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  // Handle delete
  const handleDelete = () => setProfilePic(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-red-800 mb-10 text-center"
      >
        My Profile
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8"
      >
        {/* Profile Picture Upload */}
        <div className="flex flex-col items-center mb-8">
          {profilePic ? (
            <div className="relative">
              <img
                src={profilePic}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full border-4 border-red-700 shadow-md"
              />
              <button
                onClick={handleDelete}
                className="absolute -top-2 -right-2 bg-red-700 text-white p-1.5 rounded-full hover:bg-red-800"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ) : (
            <div
              {...getRootProps()}
              className={`w-32 h-32 rounded-full flex flex-col items-center justify-center cursor-pointer border-2 border-dashed ${
                isDragActive
                  ? "border-red-600 bg-red-50"
                  : "border-gray-300 bg-gray-100"
              }`}
            >
              <input {...getInputProps()} />
              <Upload size={24} className="text-gray-600 mb-1" />
              <p className="text-xs text-gray-600">Upload Photo</p>
            </div>
          )}
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Pawan Vuppu</h2>
          <p className="text-gray-500">Lead Developer — MeDevice USA</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="text-red-700" size={20} />
              <span className="text-sm text-gray-600">Email</span>
            </div>
            <p className="font-medium text-gray-800">pawan.vuppu@example.com</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="text-red-700" size={20} />
              <span className="text-sm text-gray-600">Location</span>
            </div>
            <p className="font-medium text-gray-800">California, USA</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 shadow-sm sm:col-span-2">
            <div className="flex items-center gap-3 mb-2">
              <User className="text-red-700" size={20} />
              <span className="text-sm text-gray-600">About</span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              I’m a passionate full-stack engineer with expertise in Next.js, TypeScript,
              and medical-technology applications. I lead MeDevice’s product innovation,
              ensuring every solution bridges healthcare and technology seamlessly.
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-red-700 text-white font-semibold rounded-xl hover:bg-red-800 transition flex items-center gap-2 mx-auto"
        >
          <Edit size={18} />
          Edit Profile
        </motion.button>
      </motion.div>
    </div>
  );
}
