# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint (next/core-web-vitals config)
```

## Architecture

Personal portfolio site built with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**. Two routes: `/` (journey/about) and `/projects`.

### Key structure

- `app/layout.tsx` — Root layout; mounts `<Nav>` globally, loads Google Fonts (Sedan, Kode_Mono)
- `app/page.tsx` — Home route; renders `<Journey>`
- `app/projects/page.tsx` — Projects route; renders `<Projects>`
- `app/data/projects.ts` — Single source of truth for all project data (static array); edit here to add/remove projects
- `app/components/` — All UI components

### Component notes

- **`Nav.tsx`** — `'use client'`; uses `usePathname()` for active link styling
- **`Projects.tsx`** — `'use client'`; manages modal open/close state and locks body scroll when modal is open
- **`Modal.tsx`** — Video overlay; closed by clicking outside or the XCircleIcon button
- **`Project.tsx`** — Server component; renders a project card with optional video list and external link

### Styling conventions

- Dark theme throughout (black/neutral-900 backgrounds, white/slate text)
- Gradient text (blue→violet) applied via `bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent`
- Custom Tailwind utility: `drop-shadow-glow` (defined in `tailwind.config.ts`)
- Responsive breakpoints: `md:` and `xl:`
