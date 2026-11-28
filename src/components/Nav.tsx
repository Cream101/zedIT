"use client";

import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import ThemeToggle from "@/components/ThemeToggle";

const links = ["About", "Projects", "Skills", "Capabilities", "Education", "Experience", "Certificates", "References", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [first, second] = portfolio.profile.name.split(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" onClick={() => setOpen(false)} className="shrink-0 font-semibold transition-colors hover:text-accent">
          {first} {second}
        </a>

        <div className="hidden items-center gap-5 xl:flex">
          <ul className="flex gap-5 text-sm text-muted">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="whitespace-nowrap transition-colors hover:text-accent">{l}</a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="rounded-md border border-line px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-bg px-5 py-2 sm:px-8 xl:hidden">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 text-muted transition-colors hover:text-accent">
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
