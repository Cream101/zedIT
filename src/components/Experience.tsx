import { portfolio } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-2xl font-semibold">Experience</h2>
      {portfolio.experience.map((x) => (
        <article key={x.organization} className="mt-8 rounded-lg border border-line bg-surface p-6 hover:border-accent transition-colors">
          <p className="text-sm text-accent">{x.period}</p>
          <h3 className="mt-1 text-lg font-semibold">{x.organization}</h3>
          <p className="text-muted">{x.role}</p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-muted">
            {x.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
          {x.placeholder && (
            <p className="mt-4 text-sm text-amber-400">
              Placeholder bullets — replace with your actual OJT duties in src/data/portfolio.ts.
            </p>
          )}
        </article>
      ))}
    </section>
  );
}
