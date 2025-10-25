import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const lower = message.toLowerCase();
    let reply = "I'm here to assist you with MeDevice’s consulting, staffing, or training services.";

    if (lower.includes("consulting"))
      reply = "Our consulting experts help you navigate design control, FDA strategy, and clinical validation.";
    else if (lower.includes("staffing"))
      reply = "We recruit world-class MedTech professionals — engineers, QA specialists, and compliance experts.";
    else if (lower.includes("training"))
      reply = "We deliver global training programs in risk management, CAPA, and AI-based medical device design.";
    else if (lower.includes("contact"))
      reply = "You can reach us at hello@medevice.com or use the Contact page to schedule a meeting.";
    else if (lower.includes("hi") || lower.includes("hello"))
      reply = "Hi there 👋! How can I support your MedTech project today?";
    else if (lower.includes("who are you"))
      reply = "I’m MeDevice’s AI Assistant — here to guide you through our solutions and innovations.";

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ reply: "⚠️ Something went wrong processing your message." }, { status: 500 });
  }
}
