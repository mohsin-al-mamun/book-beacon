This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

```
book-beacon/
├── src/
│   ├── app/                        ← App Router lives here
│   │   ├── layout.tsx              ← Root layout (wraps every page)
│   │   ├── page.tsx                ← Home page (/)
│   │   ├── globals.css             ← Global styles + CSS variables
│   │   │
│   │   ├── books/
│   │   │   └── [id]/
│   │   │       └── page.tsx        ← Book Detail page (/books/123)
│   │   │
│   │   └── authors/
│   │       └── [id]/
│   │           └── page.tsx        ← Author Detail page (/authors/456)
│   │
│   ├── components/                 ← All reusable UI pieces
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── home/                   ← Components used only on home
│   │   │   ├── Hero.tsx
│   │   │   ├── QuickCheck.tsx
│   │   │   ├── CategoryGrid.tsx
│   │   │   ├── FeaturedCarousel.tsx
│   │   │   ├── RecentlyAdded.tsx
│   │   │   ├── CurrentlyReading.tsx
│   │   │   ├── QuoteBanner.tsx
│   │   │   ├── WishlistGrid.tsx
│   │   │   └── StatsStrip.tsx
│   │   │
│   │   └── ui/                     ← Tiny building blocks
│   │       ├── Badge.tsx           ← read / reading / unread / genre chips
│   │       ├── BookCard.tsx        ← The 4-col grid card
│   │       ├── BookCover.tsx       ← Cover image with fallback gradient
│   │       ├── Button.tsx
│   │       └── ProgressBar.tsx
│   │
│   ├── data/                       ← Static JSON (replace with API later)
│   │   ├── books.ts
│   │   ├── authors.ts
│   │   └── categories.ts
│   │
│   └── lib/                        ← Utility functions
│       └── utils.ts                ← e.g. getOpenLibraryCoverUrl(isbn)
│
├── public/
│   └── (any local images you add)
│
└── next.config.ts
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
