"use client";

import { useEffect, useState } from "react";

export default function ClientsPage() {
  const [clients, setClients] = useState<any[]>([]);
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Load all clients from API
  const fetchClients = async () => {
    const res = await fetch("/api/clients");
    const data = await res.json();
    setClients(data);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  // ✅ Add new client
  const addClient = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Client added successfully!");
        setForm({ name: "", email: "", company: "", phone: "" });
        fetchClients();
      } else {
        throw new Error(data.error || "Failed to add client");
      }
    } catch (err: any) {
      setMessage("❌ " + err.message);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-red-700 mb-10">
        Client Management
      </h1>

      {/* Add Client Form */}
      <form
        onSubmit={addClient}
        className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md mb-12"
      >
        <h2 className="text-xl font-semibold mb-4">Add New Client</h2>
        <div className="grid gap-4">
          <input
            type="text"
            placeholder="Client Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="border p-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="border p-2 rounded-md"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-red-700 text-white py-2 rounded-md hover:bg-red-800 transition"
          >
            {loading ? "Saving..." : "Add Client"}
          </button>
        </div>
        {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
      </form>

      {/* Client List */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          All Clients
        </h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full border-collapse">
            <thead className="bg-red-700 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Company</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Created</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c) => (
                <tr key={c.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{c.name}</td>
                  <td className="p-3">{c.email}</td>
                  <td className="p-3">{c.company || "—"}</td>
                  <td className="p-3">{c.phone || "—"}</td>
                  <td className="p-3 text-gray-500">
                    {new Date(c.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}