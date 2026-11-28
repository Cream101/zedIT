"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "Tell me about yourself",
  "What are your skills?",
  "What was your OJT experience?",
  "What is your career objective?",
];

export default function DigitalTwin() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [messages, loading, open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;
    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      const reply = res.ok ? data.reply : data.error ?? "Something went wrong.";
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Network error. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {open && (
        <div role="dialog" aria-label="Digital twin chat" className="flex h-[32rem] max-h-[75vh] w-[calc(100vw-2rem)] max-w-sm flex-col rounded-lg border border-line bg-surface shadow-xl">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <div>
              <p className="font-semibold">Digital Twin</p>
              <p className="text-xs text-muted">AI answers based on this portfolio</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-muted hover:text-accent transition-colors">✕</button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 text-sm">
            {messages.length === 0 && (
              <>
                <p className="text-muted">Hi! Ask me anything an interviewer might ask.</p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button key={s} onClick={() => send(s)} className="rounded-full border border-line px-3 py-1 text-xs text-muted hover:border-accent hover:text-accent transition-colors">
                      {s}
                    </button>
                  ))}
                </div>
              </>
            )}
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <p className={`max-w-[85%] whitespace-pre-wrap rounded-lg px-3 py-2 ${m.role === "user" ? "bg-accent text-black" : "border border-line bg-bg text-ink"}`}>
                  {m.content}
                </p>
              </div>
            ))}
            {loading && <p className="text-muted">Typing…</p>}
            <div ref={endRef} />
          </div>

          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2 border-t border-line p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={500}
              placeholder="Ask a question…"
              aria-label="Your question"
              className="min-w-0 flex-1 rounded-md border border-line bg-bg px-3 py-2 text-sm placeholder:text-muted focus:border-accent focus:outline-none"
            />
            <button type="submit" disabled={loading || !input.trim()} className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-black hover:bg-accent-hover transition-colors disabled:opacity-50">
              Send
            </button>
          </form>
        </div>
      )}
      <button onClick={() => setOpen((o) => !o)} aria-expanded={open} className="rounded-full bg-accent px-5 py-3 font-medium text-black shadow-lg hover:bg-accent-hover transition-colors">
        {open ? "Close" : "Ask my digital twin"}
      </button>
    </div>
  );
}
