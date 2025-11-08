import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  const data = await req.json();

  const type = data.type || "general";
  const tableName =
    type === "consulting"
      ? "consulting_inquiries"
      : type === "staffing"
      ? "job_applications"
      : type === "training"
      ? "training_signups"
      : type === "blog"
      ? "blog_partnerships"
      : "general_inquiries";

  const { error } = await supabase.from(tableName).insert([data]);

  if (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }

  return NextResponse.json({ success: true });
}
