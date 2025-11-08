"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      setProfile(user.user_metadata);
    };
    load();
  }, []);

  if (!profile)
    return <p className="text-center mt-10 text-slate-600">Loading...</p>;

  const role = profile.role || "client";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white text-center px-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-lg w-full space-y-6">
        <h1 className="text-3xl font-bold text-blue-800">Welcome, {profile.full_name}</h1>
        <p className="text-slate-600">{profile.email}</p>
        <p className="text-sm text-gray-500 capitalize">Role: {role}</p>

        {role === "admin" ? (
          <div className="space-y-4">
            <Link href="/dashboard/admin" className="block bg-slate-800 text-white py-3 rounded-xl hover:bg-slate-900">
              Go to Admin Dashboard
            </Link>
            <Link href="/auth/login" className="block text-blue-600 hover:text-blue-800">
              Logout
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            <Link href="/dashboard/client" className="block bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800">
              Go to My Dashboard
            </Link>
            <Link href="/auth/login" className="block text-blue-600 hover:text-blue-800">
              Logout
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
