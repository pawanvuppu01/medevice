"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import AdminHeader from "@/components/ui/AdminHeader";

interface UserRecord {
  id: string;
  email: string;
  created_at: string;
  role?: string;
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<UserRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUsers() {
      setLoading(true);
      setError(null);
      try {
        const { data, error } = await supabase.auth.admin.listUsers();
        if (error) throw error;
        setUsers(data?.users || []);
      } catch (err: any) {
        console.error("❌ Failed to fetch users:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-100">
      <AdminHeader />
      <section className="p-10">
        <h2 className="text-3xl font-bold text-red-400 mb-6">Registered Users</h2>
        {loading && <p className="text-gray-400">Loading users...</p>}
        {error && <p className="text-red-400">Error: {error}</p>}
        {!loading && !error && users.length === 0 && (
          <p className="text-gray-400">No users found.</p>
        )}
        {!loading && users.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-700 rounded-xl">
              <thead className="bg-gray-800 text-gray-300">
                <tr>
                  <th className="text-left px-4 py-3">Email</th>
                  <th className="text-left px-4 py-3">Role</th>
                  <th className="text-left px-4 py-3">Created</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-t border-gray-700 hover:bg-gray-800/40">
                    <td className="px-4 py-3">{u.email}</td>
                    <td className="px-4 py-3">{u.role || "User"}</td>
                    <td className="px-4 py-3">
                      {new Date(u.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
