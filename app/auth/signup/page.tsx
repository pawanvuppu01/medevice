"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function SignupPage() {
  const [form, setForm] = useState({ full_name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("client");
  const params = useSearchParams();

  useEffect(() => {
    const roleParam = params.get("role");
    if (roleParam) setRole(roleParam);
  }, [params]);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: { data: { full_name: form.full_name, role } },
    });
    if (error) setMessage(error.message);
    else setMessage("✅ Check your email to confirm your account.");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <form
        onSubmit={handleSignup}
        className="bg-white p-10 rounded-3xl shadow-lg space-y-6 max-w-md w-full border border-slate-200"
      >
        <h1 className="text-3xl font-bold text-blue-700 text-center">
          Sign Up as {role === "admin" ? "Company / Admin" : "Client / User"}
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg px-4 py-3"
          onChange={(e) => setForm({ ...form, full_name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-3"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-3"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="w-full bg-blue-700 text-white font-semibold py-3 rounded-full hover:bg-blue-800">
          Sign Up
        </button>
        {message && <p className="text-center text-slate-600">{message}</p>}
      </form>
    </main>
  );
}
