import { portfolio } from "@/data/portfolio";

export default function Contact() {
  const { profile, footer } = portfolio;
  return (
    <>
      <section id="contact" className="py-16">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-8 flex flex-col gap-4 text-muted">
          <a href={`mailto:${profile.email}`} className="w-fit rounded-md bg-accent px-5 py-2.5 font-medium text-black hover:bg-accent-hover transition-colors">
            Email me
          </a>
          <p>Email: <a href={`mailto:${profile.email}`} className="text-ink hover:text-accent transition-colors">{profile.email}</a></p>
          <p>Phone: <a href={`tel:${profile.phone}`} className="text-ink hover:text-accent transition-colors">{profile.phone}</a></p>
          <p>Location: <span className="text-ink">{profile.location}</span></p>
        </div>
      </section>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">{footer}</footer>
    </>
  );
}
