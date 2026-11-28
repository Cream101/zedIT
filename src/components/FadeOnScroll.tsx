"use client";

import { useEffect, useRef } from "react";

// Fades (and lifts) its children as the page scrolls away from the top.
export default function FadeOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const progress = Math.min(1, window.scrollY / (window.innerHeight * 0.6));
      el.style.opacity = String(1 - progress);
      el.style.transform = `translateY(${-progress * 48}px)`;
      el.style.pointerEvents = progress >= 1 ? "none" : "auto";
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="will-change-[opacity,transform]">
      {children}
    </div>
  );
}
