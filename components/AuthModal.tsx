"use client";
import { useState } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">Login</h2>
        <p className="text-gray-600 mb-4">
          This is a placeholder modal. Authentication logic will be added later.
        </p>
        <button
          onClick={onClose}
          className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
