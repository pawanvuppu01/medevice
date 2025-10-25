"use client";

import { motion, AnimatePresence } from "framer-motion";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image?: string;
}

export default function InfoModal({ isOpen, onClose, title, description, image }: InfoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-gray-900 max-w-lg w-full rounded-2xl shadow-2xl p-8 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>

            {image && (
              <img
                src={image}
                alt={title}
                className="rounded-xl mb-6 w-full h-56 object-cover"
              />
            )}

            <h2 className="text-2xl font-bold text-red-700 mb-4">{title}</h2>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
