"use client";
import { useEffect, useState } from "react";
import { apiSafeFetch } from "@/lib/apiSafeFetch";
export default function AdminTrainingsPage() {
  const [trainings, setTrainings] = useState([]);
  const [form, setForm] = useState({ title: "", instructor: "", duration: "" });
  async function loadTrainings() {
    const res = await apiSafeFetch("/api/trainings");
    setTrainings(res.data || []);
  }
  async function addTraining(e: React.FormEvent) {
    e.preventDefault();
    await apiSafeFetch("/api/trainings", { method: "POST", body: JSON.stringify(form) });
    setForm({ title: "", instructor: "", duration: "" });
    loadTrainings();
  }
  useEffect(() => { loadTrainings(); }, []);
  return (
    <main className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6 text-red-500">Manage Trainings</h1>
      <form onSubmit={addTraining} className="space-y-4 mb-8">
        <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="p-2 bg-gray-800 border border-gray-600 rounded w-full" />
        <input placeholder="Instructor" value={form.instructor} onChange={(e) => setForm({ ...form, instructor: e.target.value })} className="p-2 bg-gray-800 border border-gray-600 rounded w-full" />
        <input placeholder="Duration" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className="p-2 bg-gray-800 border border-gray-600 rounded w-full" />
        <button type="submit" className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Add Training</button>
      </form>
      <ul className="space-y-2">
        {trainings.map((t: any) => (
          <li key={t.id} className="border border-gray-700 p-3 rounded">
            <span className="font-semibold">{t.title}</span> — {t.instructor}
          </li>
        ))}
      </ul>
    </main>
  );
}
