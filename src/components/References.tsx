import { portfolio } from "@/data/portfolio";

export default function References() {
  return (
    <section id="references" className="py-16">
      <h2 className="text-2xl font-semibold">Character References</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {portfolio.references.map((r) => (
          <div key={r.name} className="rounded-lg border border-line bg-surface p-6 hover:border-accent transition-colors">
            <h3 className="font-semibold">{r.name}</h3>
            <p className="mt-1 text-sm text-muted">{r.title}</p>
            {r.address && <p className="mt-2 text-sm text-muted">{r.address}</p>}
            <a href={`tel:${r.contact}`} className="mt-3 inline-block text-accent hover:underline">{r.contact}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
