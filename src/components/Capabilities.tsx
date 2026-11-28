import { capabilities } from "@/data/capabilities";

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-16">
      <h2 className="text-2xl font-semibold">Capabilities</h2>
      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {capabilities.map((c) => (
          <li key={c.name} className="flex items-center gap-3 rounded-lg border border-line bg-surface p-4 transition-colors hover:border-accent">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-accent/40 text-sm font-bold text-accent">
              {c.icon}
            </span>
            <span className="min-w-0">
              <span className="block truncate font-medium">{c.name}</span>
              <span className="block text-xs text-muted">{c.label}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
