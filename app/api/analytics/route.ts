import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function GET() {
  const prompt = `Analyze this quarterly MedTech performance:
  Clients: 25→31→36→44
  Projects: 42→53→61→72
  Training: 6→8→9→12
  Give a concise forecast for next quarter in 3 sentences.`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const prediction = completion.choices[0].message.content;
  return NextResponse.json({ prediction });
}
