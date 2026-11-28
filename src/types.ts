export type Profile = {
  name: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  objective: string;
};

export type Hero = { headline: string; intro: string; roles?: string[]; display?: string[] };

export type SkillItem = { name: string; description?: string };
export type SkillGroup = { title: string; items: SkillItem[] };

export type EducationItem = { school: string; program: string; year: string };

export type ExperienceItem = {
  organization: string;
  role: string;
  period: string;
  bullets: string[];
  placeholder?: boolean;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  image: string;
};

export type Reference = {
  name: string;
  title: string;
  address?: string;
  contact: string;
};

export type Portfolio = {
  profile: Profile;
  hero: Hero;
  skills: SkillGroup[];
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: Project[];
  certificates: Certificate[];
  references: Reference[];
  footer: string;
};
