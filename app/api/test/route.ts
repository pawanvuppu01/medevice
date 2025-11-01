import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  try {
    const { data, error } = await supabase.from("clients").select("*").limit(1);
    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: "✅ Supabase connected successfully!",
      sample: data,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
