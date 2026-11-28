import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Zedrick S. Udaundo — AI Web App Developer",
  description:
    "Portfolio of John Zedrick S. Udaundo, a fresh BS Information Technology graduate who builds AI-powered web apps with TypeScript, React, and Next.js.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "John Zedrick S. Udaundo — AI Web App Developer",
    description: "Fresh IT graduate building AI-powered web applications.",
    type: "website",
    // Placeholder: add a 1200x630 image at public/og.png
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="light")document.documentElement.dataset.theme="light"}catch(e){}`,
          }}
        />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
