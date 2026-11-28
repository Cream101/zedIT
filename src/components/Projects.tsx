import { portfolio } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.projects.map((p) => (
          <article key={p.title} className="flex flex-col rounded-lg border border-line bg-surface p-6 hover:border-accent transition-colors">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-muted">{p.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">{t}</li>
              ))}
            </ul>
            {p.liveUrl && (
              <div className="mt-auto pt-6">
                <a href={p.liveUrl} target="_blank" rel="noreferrer" className="inline-block rounded-md bg-accent px-4 py-2 text-sm font-medium text-black hover:bg-accent-hover transition-colors">
                  Visit site
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted">Placeholder projects — edit them in src/data/portfolio.ts.</p>
    </section>
  );
}
