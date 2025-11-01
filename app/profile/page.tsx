"use client";

import { useEffect, useState } from "react";
import { supabaseAuth } from "@/lib/authClient";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabaseAuth.auth.getUser();
      if (data.user) setUser(data.user);
      else router.push("/"); // redirect if not logged in
    };
    getUser();
  }, [router]);

  const handleLogout = async () => {
    await supabaseAuth.auth.signOut();
    router.push("/");
  };

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading profile...
      </div>
    );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-10 w-full max-w-lg text-center border border-gray-700">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Your Profile</h1>

        <p className="text-lg mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-lg mb-6">
          <strong>User ID:</strong> {user.id}
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold transition"
        >
          Logout
        </button>
      </div>
    </main>
  );
}