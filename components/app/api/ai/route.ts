import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are MeDevice's voice-enabled Co-Pilot. Respond conversationally, clearly, and professionally. If user asks for actions like 'open profile', 'switch theme', 'go to dashboard', reply with confirmation text.",
      },
      { role: "user", content: prompt },
    ],
  });

  const reply = completion.choices[0].message.content;
  return NextResponse.json({ reply });
}
