import { portfolio } from "@/data/portfolio";
import CountUp from "@/components/CountUp";

// Placeholder project cards are not counted. Rename them and they count automatically.
const PLACEHOLDERS = ["AI Web App", "Web Application", "Video Edit / Demo Reel"];

export default function Stats() {
  const items = [
    { label: "Certificates", value: portfolio.certificates.length },
    { label: "Projects", value: portfolio.projects.filter((p) => !PLACEHOLDERS.includes(p.title)).length },
    { label: "Skills", value: portfolio.skills.reduce((n, g) => n + g.items.length, 0) },
  ];
  return (
    <section aria-label="Highlights" className="py-8">
      <dl className="grid grid-cols-3 divide-x divide-line rounded-lg border border-line bg-surface">
        {items.map((s) => (
          <div key={s.label} className="px-4 py-6 text-center">
            <dt className="order-2 mt-1 text-sm text-muted">{s.label}</dt>
            <dd className="text-3xl font-bold text-accent sm:text-4xl">
              <CountUp value={s.value} />+
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
