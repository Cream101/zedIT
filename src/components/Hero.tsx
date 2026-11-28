import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  const { hero, profile, skills, education, experience, projects } = portfolio;
  const roles = hero.roles?.length ? hero.roles : [profile.tagline];
  const [first, middle, ...rest] = profile.name.split(" ");
  const strengths = (skills[0]?.items ?? []).slice(3, 4).map((i) => i.name);
  const liveProjects = projects.filter((x) => x.liveUrl);
  const stats = [
    education[0] && { value: education[0].year, label: education[0].program },
    experience[0] && { value: experience[0].period, label: experience[0].role },
  ].filter(Boolean) as { value: string; label: string }[];

  return (
    <section id="top" className="grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.4fr_1fr] lg:items-center">
      <div>
        <p className="text-sm text-muted">Welcome to my portfolio</p>
        <h1 className="mt-4 text-5xl font-extrabold leading-[0.95] tracking-tight text-accent sm:text-7xl">
          <span className="glitch" data-text={`${first} ${middle}`}>{first} {middle}</span>
          <br />
          <span className="glitch" data-text={rest.join(" ")}>{rest.join(" ")}</span>
        </h1>
        <p className="mt-4 font-mono text-lg text-muted"><Typewriter phrases={roles} /></p>

        <p className="mt-10 max-w-2xl text-xl font-semibold leading-snug sm:text-2xl">{hero.headline}</p>
        <p className="mt-6 max-w-xl text-muted">{hero.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-md bg-accent px-5 py-2.5 font-medium text-black hover:bg-accent-hover transition-colors">
            Explore now
          </a>
          <a href="#contact" className="rounded-md border border-line px-5 py-2.5 hover:border-accent hover:text-accent transition-colors">
            Contact me
          </a>
        </div>

        <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-2xl font-bold text-accent">{s.value}</dt>
              <dd className="max-w-[16rem] text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <aside className="rounded-2xl border border-accent/30 bg-surface p-6 shadow-[0_0_48px_-16px] shadow-accent/40">
        <div className="flex items-center gap-4">
          <Image
            src="/profile.jpg"
            alt={profile.name}
            width={96}
            height={96}
            priority
            className="h-20 w-20 shrink-0 rounded-full border-2 border-accent object-cover"
          />
          <div>
            <h2 className="font-semibold">{profile.name}</h2>
            <p className="text-sm text-muted">{profile.tagline}</p>
          </div>
        </div>

        <dl className="mt-6 space-y-2 text-sm">
          <div className="flex gap-2"><dt className="text-muted">Location:</dt><dd>{profile.location}</dd></div>
          <div className="flex gap-2"><dt className="text-muted">Phone:</dt><dd>{profile.phone}</dd></div>
          <div className="flex gap-2"><dt className="text-muted">Email:</dt><dd className="break-all">{profile.email}</dd></div>
        </dl>

        <h3 className="mt-6 font-semibold text-accent">Core Strengths</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {strengths.map((s) => (
            <li key={s} className="flex gap-2"><span className="text-accent">✓</span>{s}</li>
          ))}
        </ul>

        {liveProjects.length > 0 && (
          <>
            <h3 className="mt-6 font-semibold text-accent">Projects</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {liveProjects.map((x) => (
                <li key={x.title} className="flex gap-2">
                  <span className="text-accent">→</span>
                  <a href={x.liveUrl} target="_blank" rel="noreferrer" className="hover:text-accent hover:underline">
                    {x.title}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        <a href={`mailto:${profile.email}`} className="mt-6 block rounded-md bg-accent px-4 py-2.5 text-center font-medium text-black hover:bg-accent-hover transition-colors">
          Email me
        </a>
      </aside>
    </section>
  );
}
