import { portfolio } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-16">
      <h2 className="text-2xl font-semibold">Education</h2>
      <ol className="mt-8 border-l border-line">
        {portfolio.education.map((e) => (
          <li key={e.school + e.year} className="relative pb-8 pl-6 last:pb-0">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="text-sm text-accent">{e.year}</p>
            <h3 className="font-semibold">{e.school}</h3>
            <p className="text-muted">{e.program}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
