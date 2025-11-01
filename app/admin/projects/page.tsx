"use client";
import { useEffect, useState } from "react";
import { apiSafeFetch } from "@/lib/apiSafeFetch";
export default function AdminProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", status: "" });
  async function loadProjects() {
    const res = await apiSafeFetch("/api/projects");
    setProjects(res.data || []);
  }
  async function addProject(e: React.FormEvent) {
    e.preventDefault();
    await apiSafeFetch("/api/projects", { method: "POST", body: JSON.stringify(form) });
    setForm({ title: "", description: "", status: "" });
    loadProjects();
  }
  useEffect(() => { loadProjects(); }, []);
  return (
    <main className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6 text-red-500">Manage Projects</h1>
      <form onSubmit={addProject} className="space-y-4 mb-8">
        <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="p-2 bg-gray-800 border border-gray-600 rounded w-full" />
        <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="p-2 bg-gray-800 border border-gray-600 rounded w-full" />
        <input placeholder="Status" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="p-2 bg-gray-800 border border-gray-600 rounded w-full" />
        <button type="submit" className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Add Project</button>
      </form>
      <ul className="space-y-2">
        {projects.map((p: any) => (
          <li key={p.id} className="border border-gray-700 p-3 rounded">
            <span className="font-semibold">{p.title}</span> — {p.status}
          </li>
        ))}
      </ul>
    </main>
  );
}
