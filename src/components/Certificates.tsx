import Image from "next/image";
import { portfolio } from "@/data/portfolio";

export default function Certificates() {
  const items = portfolio.certificates;
  return (
    <section id="certificates" className="py-16">
      <h2 className="text-2xl font-semibold">Certificates</h2>
      {items.length === 0 ? (
        <p className="mt-8 text-sm text-amber-400">
          Placeholder — add images to public/certificates/ and list them in src/data/portfolio.ts.
        </p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <figure key={c.title} className="rounded-lg border border-line bg-surface p-3 hover:border-accent transition-colors">
              <a href={c.image} target="_blank" rel="noreferrer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-bg">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </a>
              <figcaption className="p-3">
                <p className="font-medium">{c.title}</p>
                <p className="text-sm text-muted">{c.issuer} · {c.year}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
