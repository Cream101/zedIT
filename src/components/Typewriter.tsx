"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState("");
  const key = phrases.join("|");

  useEffect(() => {
    const list = key.split("|").filter(Boolean);
    if (!list.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(list[0]);
      return;
    }
    let i = 0;
    let n = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const full = list[i];
      n += deleting ? -1 : 1;
      setText(full.slice(0, n));
      let delay = deleting ? 40 : 80;
      if (!deleting && n === full.length) {
        if (list.length === 1) return;
        deleting = true;
        delay = 1600;
      } else if (deleting && n === 0) {
        deleting = false;
        i = (i + 1) % list.length;
        delay = 400;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [key]);

  return (
    <span className="inline-block min-h-[1.5em]">
      <span className="sr-only">{phrases.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="cursor" />
      </span>
    </span>
  );
}
