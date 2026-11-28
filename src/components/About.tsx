import { about } from "@/data/about";
import { portfolio } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-16">
      <h2 className="text-2xl font-semibold">About Me</h2>
      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">{about}</p>
      <p className="mt-8 max-w-3xl border-l-2 border-accent pl-4 text-lg leading-relaxed text-muted">
        <span className="text-ink">Career objective: </span>
        {portfolio.profile.objective}
      </p>
    </section>
  );
}
