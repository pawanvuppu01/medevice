export const revalidate = 0;
export const dynamic = "force-static";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    // ✅ Simple mock AI summary logic
    const summary = `Here’s a quick summary of your text: "${text.slice(0, 60)}..."`;

    return NextResponse.json({ success: true, summary });
  } catch (error) {
    console.error("AI Summary API Error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}

// ✅ Default export so Next.js recognizes this as a valid module
export default POST;
