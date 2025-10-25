import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

let lastMetrics = { clients: 44, projects: 72, training: 12 };

export async function GET() {
  const change = () => Math.round(Math.random() * 4 - 2);
  const newMetrics = {
    clients: lastMetrics.clients + change(),
    projects: lastMetrics.projects + change(),
    training: lastMetrics.training + change(),
  };
  lastMetrics = newMetrics;

  const prompt = `
  Review the current KPI metrics and determine if there is any major improvement or decline.
  Metrics: ${JSON.stringify(newMetrics)}
  Return a short sentence like "🎉 Record growth this week!" or "⚠️ Drop in client engagement!"
  `;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const alert = completion.choices[0].message.content?.trim();
  return NextResponse.json({ metrics: newMetrics, alert });
}
