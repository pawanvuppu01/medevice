"use client";

import { createBrowserClient } from "@supabase/ssr";

// ⚠️ make sure these two are in .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "❗ Supabase env vars missing. Check .env.local (NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY)"
  );
}

export const supabaseAuth = createBrowserClient(supabaseUrl, supabaseAnonKey);