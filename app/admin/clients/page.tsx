"use client";
import { useEffect, useState } from "react";
import { apiSafeFetch } from "@/lib/apiSafeFetch";
export default function AdminClientsPage() {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({ name: "", sector: "", logo: "" });
  async function loadClients() {
    const res = await apiSafeFetch("/api/clients");
    setClients(res.data || []);
  }
  async function addClient(e: React.FormEvent) {
    e.preventDefault();
    await apiSafeFetch("/api/clients", { method: "POST", body: JSON.stringify(form) });
    setForm({ name: "", sector: "", logo: "" });
    loadClients();
  }
  useEffect(() => { loadClients(); }, []);
  return (
    <main className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6 text-red-500">Manage Clients</h1>
      <form onSubmit={addClient} className="space-y-4 mb-8">
        <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="p-2 bg-gray-800 border border-gray-600 rounded" />
        <input placeholder="Sector" value={form.sector} onChange={(e) => setForm({ ...form, sector: e.target.value })} className="p-2 bg-gray-800 border border-gray-600 rounded" />
        <button type="submit" className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Add Client</button>
      </form>
      <ul className="space-y-2">
        {clients.map((c: any) => (
          <li key={c.id} className="border border-gray-700 p-3 rounded">
            {c.name} — {c.sector}
          </li>
        ))}
      </ul>
    </main>
  );
}
