# #001: Upgrade to Astro 6 + Tailwind CSS 4
**Type**: chore
**Module**: (root)
**Status**: done
**GitHub**: TBD (gh auth login first)
**Branch**: chore/001-upgrade-astro6-tw4

## Progress

- [ ] GitHub issue created (#001) — pending `gh auth login`
- [x] Plan file written (`plans/001-upgrade-astro6-tw4.md`)
- [x] Registry updated (`plans/registry.json`)
- [x] Branch created (`chore/001-upgrade-astro6-tw4`)
- [x] T1: Update package.json dependencies
- [x] T2: Update astro.config.ts (swap TW integration for vite plugin)
- [x] T3: Migrate tailwind.css to TW4 CSS syntax
- [x] T4: Fix content/config.ts Zod import
- [x] T5: Delete tailwind.config.js
- [x] T6: npm install + build passes
- [ ] PR opened (`Closes #001`)

---

## Problem / Goal

Upgrade AstroWind from Astro 5 + Tailwind CSS 3 to Astro 6 + Tailwind CSS 4.
- Astro 6.3.1 requires Node ^22.12.0, bundles Vite 7, ships Zod 4
- Tailwind CSS 4 drops the JS config file in favour of CSS-native @theme / @plugin directives
- @astrojs/tailwind is replaced by @tailwindcss/vite

## Approach

1. Bump/swap deps in package.json
2. Swap the Tailwind integration in astro.config.ts for the Vite plugin
3. Rewrite tailwind.css using TW4 CSS API (@import, @theme, @plugin, @custom-variant, @utility)
4. Split z import in content/config.ts to astro/zod
5. Delete the now-redundant tailwind.config.js
6. npm install && astro build — iterate until green

---

## Tasks

### T1: Update package.json dependencies
**Status**: todo
**Notes**: 
- Remove `@astrojs/tailwind`, `tailwindcss` (v3)
- Add `tailwindcss@^4.3.0`, `@tailwindcss/vite@^4.3.0`
- Bump `@astrojs/mdx` ^4 → ^5 (peerDep requires astro ^6)
- Bump `astro` ^5 → ^6
- Bump `tailwind-merge` ^2 → ^3 (TW4 class support)
- Bump `astro-embed` ^0.9 → ^0.13 (peerDep: ^5||^6)
- Update engines to `^22.12.0`
- Minor bumps: sitemap, rss, partytown, check, astro-compress, typography, sharp, unpic

### T2: Update astro.config.ts
**Status**: todo
**Notes**:
- Remove `import tailwind from '@astrojs/tailwind'`
- Remove `tailwind({ applyBaseStyles: false })` from integrations[]
- Add `import tailwindcss from '@tailwindcss/vite'`
- Add `tailwindcss()` to vite.plugins[]

### T3: Migrate tailwind.css to TW4
**Status**: todo
**Notes**:
- Replace `@tailwind base/components/utilities` → `@import "tailwindcss"`
- Add `@plugin "@tailwindcss/typography"`
- Add `@custom-variant dark` and `@custom-variant intersect`
- Add `@theme {}` block with colors, fonts, animations from tailwind.config.js
- Convert `@layer utilities {}` → `@utility` blocks
- Convert `@layer components { .btn ... }` — TW4: `@layer components` still works; `@apply` also works

### T4: Fix content/config.ts Zod import
**Status**: todo
**Notes**:
- `import { z, defineCollection } from 'astro:content'` → split z to `import { z } from 'astro/zod'`
- Review for z.string().url() → z.url() (Zod 4 change, optional but correct)

### T5: Delete tailwind.config.js
**Status**: todo
**Notes**: Safe to delete after T3 is done — all config is now in tailwind.css @theme block.

### T6: npm install + build passes
**Status**: todo
**Notes**: Run `npm install` then `npm run build`. Fix any TypeScript / import errors from Astro 6 breaking changes.
