"use client";

import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [clients, setClients] = useState<any[]>([]);
  const [form, setForm] = useState({
    client_id: "",
    project_name: "",
    description: "",
    project_stage: "",
    progress: 0,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Fetch clients and projects on load
  const fetchClients = async () => {
    const res = await fetch("/api/clients");
    const data = await res.json();
    setClients(data);
  };

  const fetchProjects = async () => {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchClients();
    fetchProjects();
  }, []);

  // ✅ Add new project
  const addProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Project added successfully!");
        setForm({
          client_id: "",
          project_name: "",
          description: "",
          project_stage: "",
          progress: 0,
        });
        fetchProjects();
      } else {
        throw new Error(data.error || "Failed to add project");
      }
    } catch (err: any) {
      setMessage("❌ " + err.message);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-red-700 mb-10">
        Consulting Projects
      </h1>

      {/* Add Project Form */}
      <form
        onSubmit={addProject}
        className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md mb-12"
      >
        <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
        <div className="grid gap-4">
          <select
            value={form.client_id}
            onChange={(e) => setForm({ ...form, client_id: e.target.value })}
            required
            className="border p-2 rounded-md"
          >
            <option value="">Select Client</option>
            {clients.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} — {c.company}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Project Name"
            value={form.project_name}
            onChange={(e) => setForm({ ...form, project_name: e.target.value })}
            required
            className="border p-2 rounded-md"
          />

          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            rows={3}
            className="border p-2 rounded-md"
          ></textarea>

          <input
            type="text"
            placeholder="Project Stage (e.g. Design, Review, Launch)"
            value={form.project_stage}
            onChange={(e) => setForm({ ...form, project_stage: e.target.value })}
            className="border p-2 rounded-md"
          />

          <input
            type="number"
            placeholder="Progress (0-100)"
            value={form.progress}
            onChange={(e) => setForm({ ...form, progress: Number(e.target.value) })}
            className="border p-2 rounded-md"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-red-700 text-white py-2 rounded-md hover:bg-red-800 transition"
          >
            {loading ? "Saving..." : "Add Project"}
          </button>
        </div>
        {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
      </form>

      {/* Project List */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">All Projects</h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full border-collapse">
            <thead className="bg-red-700 text-white">
              <tr>
                <th className="p-3 text-left">Project Name</th>
                <th className="p-3 text-left">Client</th>
                <th className="p-3 text-left">Stage</th>
                <th className="p-3 text-left">Progress</th>
                <th className="p-3 text-left">Created</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{p.project_name}</td>
                  <td className="p-3">{p.clients?.name || "—"}</td>
                  <td className="p-3">{p.project_stage || "—"}</td>
                  <td className="p-3">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-red-700 h-2.5 rounded-full"
                        style={{ width: `${p.progress || 0}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{p.progress || 0}%</span>
                  </td>
                  <td className="p-3 text-gray-500">
                    {new Date(p.created_at).toLocaleString()}
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