import { portfolio as p } from "@/data/portfolio";
import { about } from "@/data/about";

type Chunk = { text: string; words: Set<string> };

const STOP = new Set(["the","and","for","are","you","your","what","who","how","why","can","did","does","with","about","tell","me","have","has","was","were","this","that","from","any","his","her","him","she","he","they","them","a","an","of","in","on","to","is","it","do","at","as","be","or"]);

const tokens = (s: string) =>
  (s.toLowerCase().match(/[a-z0-9+#.]+/g) ?? []).filter((w) => w.length > 1 && !STOP.has(w));

function build(): Chunk[] {
  const texts: string[] = [
    `Name: ${p.profile.name}. ${p.profile.tagline}. Location: ${p.profile.location}. Email: ${p.profile.email}. Phone: ${p.profile.phone}.`,
    `Career objective: ${p.profile.objective}`,
    `Introduction: ${p.hero.intro}`,
    `About me: ${about}`,
    ...p.skills.map((g) => `Skills (${g.title}): ` + g.items.map((i) => i.description ? `${i.name} - ${i.description}` : i.name).join("; ")),
    ...p.education.map((e) => `Education: ${e.program} at ${e.school}, ${e.year}.`),
    ...p.experience.map((x) => `Experience: ${x.role} at ${x.organization}, ${x.period}. Duties: ${x.bullets.join(" ")}`),
    ...p.projects.map((x) => `Project "${x.title}": ${x.description} Tech: ${x.tags.join(", ")}.`),
    ...p.certificates.map((c) => `Certificate: ${c.title} from ${c.issuer}, ${c.year}.`),
    ...p.references.map((r) => `Character reference: ${r.name}, ${r.title}.`),
  ];
  return texts.map((text) => ({ text, words: new Set(tokens(text)) }));
}

const chunks = build();

export function retrieve(query: string, k = 5): string[] {
  const q = tokens(query);
  const scored = chunks
    .map((c, i) => ({ c, i, s: q.reduce((n, w) => n + (c.words.has(w) ? 1 : 0), 0) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || a.i - b.i)
    .slice(0, k);
  const picked = scored.length ? scored.map((x) => x.c) : chunks.slice(0, 3);
  return picked.map((c) => c.text);
}
