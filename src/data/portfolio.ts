import type { Portfolio } from "@/types";
import { certificates } from "@/data/certificates";

// Edit this file to update the whole site.
export const portfolio: Portfolio = {
  profile: {
    name: "John Zedrick S. Udaundo",
    tagline: "Fresh Graduate",
    location: "Dubinan East, Santiago City",
    phone: "09123683924",
    email: "zedrickudaundo8@gmail.com",
    objective: "To gain work experience in the field of Information Technology, improve and grow my technical skills, and apply what I have learned in school while contributing to your company organization.",
  },
  hero: {
    headline:
      "I BUILD INNOVATIVE, AI-POWERED WEB APPLICATIONS TO SOLVE REAL-WORLD PROBLEMS",
    intro:
      "I'm a fresh BS Information Technology graduate from the University of Cagayan Valley who builds AI-powered web apps with the TypeScript, React, and Next.js stack.",
    roles: ["Fresh Graduate", "BS Information Technology", "AI Web App Developer"],
  },
  skills: [
    {
      title: "Web Development",
      items: [
        {
          name: "Full Stack Development",
          description: "Building complete web applications from frontend to backend using PHP, Python, TypeScript frameworks and databases.",
        },
        {
          name: "AI Integration",
          description: "Implementing RAG systems, LLM integration, and intelligent AI-powered features into applications.",
        },
        {
          name: "System Design",
          description: "Designing scalable architectures and implementing complex systems with proper database and API design.",
        },
        {
          name: "UI/UX Implementation",
          description: "Creating responsive, modern user interfaces with Tailwind CSS and delivering excellent user experiences.",
        },
        { name: "TypeScript, React, Next.js" },
        {
          name: "AI Web App Development",
          description: "Integrating LLM/AI APIs into web applications",
        },
        { name: "PHP (basic)" },
        { name: "Python (basic)" },
      ],
    },
    {
      title: "Technical",
      items: [
        {
          name: "Computer Literate",
          description: "Basic computer operations and common software applications",
        },
        {
          name: "Computer Hardware Troubleshooting",
          description: "Basic repairing and maintaining computer hardware and system components",
        },
      ],
    },
    { title: "Media", items: [{ name: "Video Editing" }, { name: "Photo Editing" }] },
    {
      title: "Professional",
      items: [
        { name: "Adaptable", description: "Quick to learn and able to adjust to new tasks and environments" },
        { name: "Collaborative", description: "Works well with others and contributes positively to team activities" },
        { name: "Work Ethics", description: "Responsible, punctual, and eager to learn; completes tasks on time" },
        { name: "Communication Skills", description: "Able to express ideas clearly and professionally" },
        { name: "Time Management", description: "Effectively manages time and prioritizes tasks" },
      ],
    },
  ],
  education: [
    { school: "University of Cagayan Valley", program: "Bachelor of Science in Information Technology", year: "2026" },
    { school: "Lyceum of Alcala Inc.", program: "Senior High School", year: "2021" },
    { school: "Lyceum of Alcala Inc.", program: "Junior High School", year: "2019" },
    { school: "Alcala East Central School", program: "Elementary School", year: "2016" },
  ],
  experience: [
    {
      organization: "Department of Education SDO Tuguegarao City",
      role: "On The Job Training",
      period: "Feb–May 2026",
      placeholder: true,
      bullets: [
        "Assisted with basic hardware and software support for office computers.",
        "Encoded and organized records for the office.",
        "Supported day-to-day office IT needs.",
        "Received documents, and assisting clients for their school budget inquiries.",
      ],
    },
 {
      organization: "Ying Ying Melamine",
      role: "Admin assistant",
      period: "4 months",
      placeholder: true,
      bullets: [
        "Assisting Clients.",
        "Cashiering.",
        "invoice and billing.",
      ],
    },
  ],
  projects: [
    {
      title: "SK Portal",
      description: "Barangay SK portal web application.",
      tags: ["Web Application, using php and mysql"],
      liveUrl: "https://barangayskportal.kesug.com",
    },
    {
      title: "AMS",
      description: "Attendance monitoring system using facial recognition for barangay officials.",
      tags: ["Facial Recognition, using python and opencv"],
    },
    {
      title: "Video Editing",
      description: "i have experience in video editing in my school for my school project and i also have experience in video editing for my personal project. Using Capcut for video editing.",
      tags: ["Video Editing"],
    },
    {
      title: "Photo Editing",
      description: "I have experience in photo editing using Canva for school projects and personal projects.",
      tags: ["Photo Editing"],
    },
  ],
  certificates,
  references: [
    {
      name: "Bienvenido B Abad Jr.",
      title: "DIT Director, Educational Management System; Dean, College of Information Technology",
      address:
        "EMIS Office, 3rd Floor Ina ng Pag asa Bldg, University of La Salette, Inc., Dubinan East, Santiago City",
      contact: "09171509135",
    },
    {
      name: "Bernardin C. Manuel, RN",
      title: "SK Chairman",
      address: "Centro Norte Alcala Cagayan",
      contact: "09993366792",
    },
    {
      name: "Benedick C. Baculi",
      title: "Barangay Captain",
      address: "Centro Norte Alcala Cagayan",
      contact: "09471625667",
    },
  ],
  footer: "© 2026 John Zedrick S. Udaundo — Built with Next.js and TypeScript.",
};
