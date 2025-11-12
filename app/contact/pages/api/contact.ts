import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // ✅ Use field names exactly as in Prisma schema
    const message = await prisma.messages.create({
      data: {
        fullName: data.full_name || data.fullName,
        email: data.email,
        phone: data.phone || null,
        service: data.service || "General",
        message: data.message,
      },
    });

    return NextResponse.json(
      { success: true, message: "Message saved successfully!", data: message },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// Optional GET handler for listing messages
export async function GET() {
  const messages = await prisma.messages.findMany({
    orderBy: { id: "desc" },
    take: 10,
  });
  return NextResponse.json(messages);
}
