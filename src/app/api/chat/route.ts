import { retrieve } from "@/lib/rag";
import { portfolio } from "@/data/portfolio";

type Msg = { role: "user" | "assistant"; content: string };

const isMsg = (m: unknown): m is Msg =>
  typeof m === "object" && m !== null &&
  ((m as Msg).role === "user" || (m as Msg).role === "assistant") &&
  typeof (m as Msg).content === "string";

export async function POST(req: Request) {
  const key = process.env.GROQ_API_KEY;
  if (!key) {
    return Response.json({ error: "The digital twin is not set up yet (missing GROQ_API_KEY)." }, { status: 503 });
  }

  let body: { messages?: unknown };
  try { body = await req.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }

  const messages = (Array.isArray(body.messages) ? body.messages : [])
    .filter(isMsg)
    .slice(-6)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 500) }));
  const users = messages.filter((m) => m.role === "user");
  if (!users.length) return Response.json({ error: "Ask me a question first." }, { status: 400 });

  const query = users.slice(-2).map((m) => m.content).join(" ");
  const context = retrieve(query).join("\n");

  const system = `You are the digital twin of ${portfolio.profile.name}, a fresh graduate. Answer interview-style questions in the first person, in a friendly, professional tone, in 1-4 short sentences.
Use ONLY the facts in the CONTEXT below. Never invent employers, projects, skills, dates, or numbers. If the context does not contain the answer, say you don't have that information and suggest emailing ${portfolio.profile.email}.
Projects marked as placeholders are not finished work; do not describe them as real accomplishments.

CONTEXT:
${context}`;

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL ?? "llama-3.3-70b-versatile",
        temperature: 0.3,
        max_tokens: 300,
        messages: [{ role: "system", content: system }, ...messages],
      }),
    });
    if (!res.ok) return Response.json({ error: "The AI service is unavailable. Try again shortly." }, { status: 502 });
    const data = await res.json();
    const reply: string = data?.choices?.[0]?.message?.content ?? "";
    return Response.json({ reply: reply.trim() || "Sorry, I couldn't come up with an answer." });
  } catch {
    return Response.json({ error: "Could not reach the AI service." }, { status: 502 });
  }
}
