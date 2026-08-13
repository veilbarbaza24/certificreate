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
