# John Zedrick S. Udaundo — Portfolio

Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS.
All content lives in `src/data/portfolio.ts` (typed by `src/types.ts`).

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Before you deploy
- Add a 1200x630 image at `public/og.png` (social preview).
- Replace placeholder projects and OJT bullets in `src/data/portfolio.ts`.

## Deploy to Vercel (free tier)
1. Push this folder to a GitHub repository.
2. Go to vercel.com and import the repo.
3. Framework preset auto-detects Next.js. Under Environment Variables add GROQ_API_KEY (free key from console.groq.com) for the digital twin chat.
4. Click Deploy.

## Digital twin chat
Create `.env.local` in the project root (copy `.env.example`) and set `GROQ_API_KEY`. Restart `npm run dev`. The chat answers only from `src/data/portfolio.ts`.
