import { portfolio } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-2xl font-semibold">My Skills</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {portfolio.skills.map((g) => (
          <div key={g.title} className="rounded-lg border border-line bg-surface p-6 hover:border-accent transition-colors">
            <h3 className="font-semibold text-accent">{g.title}</h3>
            <ul className="mt-4 space-y-3">
              {g.items.map((i) => (
                <li key={i.name}>
                  <span className="font-medium">{i.name}</span>
                  {i.description && <p className="text-sm text-muted">{i.description}</p>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
