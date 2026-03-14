# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

No test runner is configured yet.

## Architecture

This is a **Next.js 16 app** using the **App Router** (`src/app/`), TypeScript, and Tailwind CSS v4.

- `src/app/layout.tsx` — root layout (HTML shell, global fonts/metadata)
- `src/app/page.tsx` — home route (`/`)
- `src/app/globals.css` — global styles and Tailwind imports

**Routing:** File-system based. New routes go in `src/app/<route>/page.tsx`. Nested layouts use `layout.tsx`. API routes go in `src/app/api/<route>/route.ts`.

**Styling:** Tailwind CSS v4 via PostCSS. No separate `tailwind.config.js` — configuration lives in `globals.css` using `@theme` directives.

**Path alias:** `@/*` maps to `src/*` (configured in `tsconfig.json`).
