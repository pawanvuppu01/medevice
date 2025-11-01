import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export const runtime = "nodejs"; // ✅ required for file uploads

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from("client-logos") // ✅ bucket name
      .upload(fileName, buffer, {
        contentType: file.type,
      });

    if (error) throw error;

    // get public URL
    const { data: publicData } = supabase
      .storage
      .from("client-logos")
      .getPublicUrl(fileName);

    return NextResponse.json({ url: publicData.publicUrl }, { status: 200 });
  } catch (err: any) {
    console.error("❌ Upload failed:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}