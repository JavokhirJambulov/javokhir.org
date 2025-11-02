# javokhir.org — Next.js (App Router) + TypeScript

Minimal portfolio + MDX blog with year-grouped index, Tailwind, dark/light theme, RSS, sitemap.

## Quick start
```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:3000
```

## Build & deploy
- Push to GitHub
- Import repo in Vercel → Framework: Next.js (auto)
- Add domain `javokhir.org` in Vercel → follow DNS instructions (Cloudflare)

## Posts
- Add `.mdx` files to `content/posts/` with frontmatter:
```yaml
---
title: My title
description: Optional
date: 2025-03-01
tags: [tag1, tag2]
draft: false
---
```

## Theming
- Uses `next-themes` with `ThemeProvider`; toggle in header.

## SEO
- `app/sitemap.ts` and `app/robots.ts` are auto-generated.
- RSS feed at `/rss.xml`.
