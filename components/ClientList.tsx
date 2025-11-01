"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { apiSafeFetch } from "@/lib/apiSafeFetch";

interface Client {
  id: number;
  name: string;
  sector?: string;
  logo?: string;
}

export default function ClientList() {
  const [clients, setClients] = useState<Client[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await apiSafeFetch<{ success: boolean; data: Client[] }>("/api/clients");
        if (res && Array.isArray(res.data)) setClients(res.data);
        else setError("Unexpected response structure");
      } catch (err: any) {
        setError(err.message);
      }
    })();
  }, []);

  if (error)
    return <p className="text-red-500 text-center mt-8">{error}</p>;

  if (!clients.length)
    return <p className="text-gray-400 text-center mt-8">No clients found.</p>;

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {clients.map((client, i) => (
        <motion.div
          key={client.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white/10 p-4 rounded-xl text-center border border-gray-700 hover:scale-105 transition"
        >
          <p className="text-lg font-semibold text-white">{client.name}</p>
          <p className="text-sm text-gray-400">{client.sector || "MedTech Partner"}</p>
        </motion.div>
      ))}
    </div>
  );
}
