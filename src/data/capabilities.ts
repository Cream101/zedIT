export type Capability = { name: string; icon: string; label: string };

export const capabilities: Capability[] = [
  { name: "TypeScript", icon: "TS", label: "Language" },
  { name: "HTML", icon: "HTML", label: "Frontend" },
  { name: "React", icon: "Re", label: "Frontend" },
  { name: "Next.js", icon: "Nx", label: "Framework" },
  { name: "Tailwind CSS", icon: "Tw", label: "Styling" },
  { name: "PHP", icon: "PHP", label: "Backend" },
  { name: "Python", icon: "Py", label: "Backend" },
  { name: "MySQL", icon: "SQL", label: "Database" },
  { name: "RAG & LLM APIs", icon: "AI", label: "AI Integration" },
  { name: "Video Editing", icon: "Ve", label: "Media" },
  { name: "Graphic Design", icon: "GD", label: "Media" },
];
