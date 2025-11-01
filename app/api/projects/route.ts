import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
export async function GET() {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) return NextResponse.json({ success: false, error: error.message });
  return NextResponse.json({ success: true, data });
}
export async function POST(req: Request) {
  const body = await req.json();
  const { data, error } = await supabase.from("projects").insert([body]);
  if (error) return NextResponse.json({ success: false, error: error.message });
  return NextResponse.json({ success: true, data });
}
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id)
    return NextResponse.json({ success: false, error: "Missing id" }, { status: 400 });
  const { error } = await supabase.from("projects").delete().eq("id", id);
  if (error) return NextResponse.json({ success: false, error: error.message });
  return NextResponse.json({ success: true });
}
