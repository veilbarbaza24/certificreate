# AGENTS.md

Instructions for AI coding agents working in this project.

## What this is

Certificreate is a certificate generator for course creators. It turns a few
inputs into polished, on-brand certificates and will export both PNG and
print-ready PDF files.

## Stack

- Next.js (App Router), TypeScript (strict), Tailwind CSS v4
- npm for install and all scripts
- No test runner configured yet; testing is opt-in
- No server-side database in v1; browser local storage holds user state

## Conventions

- Server components by default; add `'use client'` only for interactivity
- All styling via Tailwind, with theme tokens kept in `app/globals.css` (`@theme`)
- No inline styles, no `any`, no commented-out code
- Types: PascalCase; shared types in `types/[feature].ts`
- Shared components: `components/[feature]/ComponentName.tsx`
- Utilities: `lib/[feature].ts`
- Use the `@/*` path alias for app imports
- Dark-mode-first app chrome around a light, print-friendly certificate surface
- The certificate design is locked in `prototypes/` (`theme.css`, `workspace.html`)

## Commands

- Dev server: `npm run dev` (http://localhost:3000)
- Build: `npm run build`
- Production server: `npm run start`
- Lint: `npm run lint`
- Test: not configured yet
- Verify: not configured yet

Automatic GitHub checks are not configured.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
