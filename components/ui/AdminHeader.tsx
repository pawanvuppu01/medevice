"use client";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AdminHeader() {
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <header className="flex justify-between items-center p-5 bg-black/40 border-b border-gray-700 text-gray-200">
      <h1 className="text-xl font-bold text-red-400">MeDevice Admin Panel</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition"
      >
        Logout
      </button>
    </header>
  );
}
