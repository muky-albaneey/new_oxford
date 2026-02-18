# Oxford Manor College Website

A modern, elegant school website built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Premium, responsive design with tasteful animations
- **Complete Site Structure**: All pages and routes as specified
- **Brand System**: Centralized brand configuration and theming
- **Form Handling**: Contact and tour booking forms with validation
- **SEO Optimized**: Metadata, sitemap, and robots.txt
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation
- **Performance**: Optimized images, code splitting, and fast loading

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (sans) + Playfair Display (serif)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── admissions/
│   ├── academics/
│   ├── school-life/
│   ├── news/
│   ├── events/
│   └── ...
├── src/
│   ├── components/        # Reusable React components
│   ├── config/           # Brand configuration
│   ├── data/             # Data files (mini CMS)
│   └── lib/              # Utility functions
├── public/
│   ├── brand/            # Logo and brand assets
│   └── images/           # Image assets
└── ...
```

## Brand Configuration

Brand colors, contact info, and settings are centralized in `src/config/brand.ts`. Update this file to change branding across the entire site.

## Data Management

Content is managed through TypeScript data files in `src/data/`:
- `news.ts` - News articles
- `events.ts` - Events calendar
- `events.ts` - Staff/leadership
- `curriculum.ts` - Academic programs
- `termDates.ts` - Academic calendar

## Forms

Forms (Contact, Book a Tour) include:
- Client-side validation
- Honeypot spam protection
- localStorage persistence (demo)
- Success toast notifications

## Images

Placeholder images are referenced throughout. Replace with actual images:
- `/public/images/hero-school.jpg`
- `/public/images/news/*.jpg`
- `/public/images/events/*.jpg`
- `/public/images/staff/*.jpg`
- `/public/brand/logo.svg`

## Building for Production

```bash
npm run build
npm start
```

## Notes

- All forms save to localStorage (demo mode - no backend)
- Images are placeholders - replace with actual assets
- Some interactive features show alerts (demo mode)
- Animations respect `prefers-reduced-motion`

## License

Private project for Oxford Manor College.
