# Medical Billing & Revenue Cycle Management Website

Premium Next.js 15 marketing site for medical billing, credentialing, and virtual front desk services.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS 4
- Framer Motion + Lenis
- React Hook Form + Zod
- Embla Carousel
- Lucide Icons

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configure company details

Edit `lib/site-config.ts` to replace placeholders:

- `[Company Name]`
- `[Phone]`
- `[Email]`
- Address fields
- Mission / vision / stats

Also set `NEXT_PUBLIC_SITE_URL` in `.env.local` for canonical URLs, sitemap, and Open Graph.

## Pages

- `/` Home
- `/medical-billing`
- `/credentialing`
- `/virtual-front-desk`
- `/tools/revenue-leakage-calculator`: interactive lead magnet
- `/about`
- `/contact`

### Calculator leads

Leads from the Revenue Leakage Calculator post to `/api/calculator-lead`.

Optional: set `CALCULATOR_WEBHOOK_URL` in `.env.local` to forward submissions to Zapier, Make, or your CRM.

### Support assistant

A bottom-right help icon appears after the first scroll. Click it to open the assistant panel. It includes:

- Live Chat shortcut
- Page summaries for every main page
- Ask-a-question box powered by `/api/assistant`

Add `OPENAI_API_KEY` in `.env.local` to enable live AI answers. Without it, helpful fallback answers are returned.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
