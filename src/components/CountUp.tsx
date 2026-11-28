"use client";

import { useEffect, useRef, useState } from "react";

// Shows the final number by default; counts up when scrolled into view.
export default function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    let frame = 0;
    const run = () => {
      const start = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - start) / 1200);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };

    setN(0);
    if (el.getBoundingClientRect().top < window.innerHeight) {
      run();
      return () => cancelAnimationFrame(frame);
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref}>{n}</span>;
}
