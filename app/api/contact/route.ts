import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📨 Raw body received:", body);

    // Force normalize every field explicitly
    const fullName = body.full_name || body.fullName || "";
    const email = body.email || "";
    const phone = body.phone || "";
    const service = body.service || "General Inquiry";
    const message = body.message || "";

    console.log("🧩 Normalized fields:", {
      fullName,
      email,
      phone,
      service,
      message,
    });

    // Validate required fields
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      console.warn("⚠️ Missing fields after normalization!");
      return NextResponse.json(
        {
          error: "Missing required fields",
          received: { fullName, email, message },
        },
        { status: 400 }
      );
    }

    // ✅ Save to database
    const saved = await prisma.messages.create({
      data: {
        fullName, // must match schema field name exactly
        email,
        phone,
        service,
        message,
      },
    });

    console.log("✅ Saved message:", saved);

    return NextResponse.json(
      {
        success: true,
        message: "Message saved successfully!",
        data: saved,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("❌ Server error:", err);
    return NextResponse.json(
      { error: "Internal Server Error", details: err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const messages = await prisma.messages.findMany({
      orderBy: { id: "desc" },
    });
    return NextResponse.json({ success: true, data: messages });
  } catch (err: any) {
    console.error("❌ Failed to fetch messages:", err);
    return NextResponse.json(
      { error: "Failed to fetch messages", details: err.message },
      { status: 500 }
    );
  }
}
