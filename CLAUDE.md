# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm install    # Install dependencies
npm run dev    # Start development server (http://localhost:3000)
npm run build  # Production build
npm run lint   # Run ESLint
```

## Deployment

The site deploys automatically to Vercel when pushing to GitHub. Manual deployment: `vercel` (CLI).

## Architecture

This is a Next.js 14 App Router site for the YQuantum quantum computing hackathon at Yale.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS

**Routing:** Uses Next.js App Router with pages at:
- `/` - Main landing page (app/page.tsx)
- `/2024`, `/2025` - Year-specific hackathon pages
- `/register`, `/faqs`, `/contact` - Supporting pages

**Layout:**
- `app/layout.tsx` - Root layout with Google Fonts (Outfit, JetBrains Mono)
- `app/components/Navigation.tsx` - Shared responsive navigation (includes mobile hamburger menu)
- `app/components/Footer.tsx` - Shared footer

**Styling:**
- Dark theme with black background and white text
- Custom Tailwind theme in `tailwind.config.js` with `quantum` color palette
- Global styles in `app/globals.css` define `.btn-primary`, `.btn-outline`, `.link-hover`, and fade animations
- Sponsor logos use Clearbit API (`https://logo.clearbit.com/[domain]`) with fallback to text display
