# iulink Website — Agent Guidelines

This is the marketing website for **iulink** (`iulink.com`), built on a fork of [AstroWind](https://github.com/hi100e/astrowind6) (Astro 6 + Tailwind CSS 4). The fork lives under `vendor/integration/`.

---

## Product Context

iulink is a connectivity platform. The headline principle is **"connect on your terms"** — users choose their broker, data path, tunnel mode, and interface. This positions iulink between fully-managed (ngrok, Cloudflare Tunnel) and fully-DIY (raw WireGuard).

**GTM and launch strategy**: `../IULINK - GTM and Lauch/` (sibling directory). Read those docs before writing any copy or making positioning decisions.

### Messaging rules

- **Do not say "MQTT"** in any user-facing copy, headlines, or value propositions. MQTT is an implementation detail; say "broker" instead.
- Use "broker" as a noun, never "server" or "relay" for the signaling layer.
- The positioning gap to own: "full product + full choice" — never sacrifice one for the other in copy.
- Primary ICP: individual developers and homelab enthusiasts. Secondary: teams using hub sharing.

### Product vocabulary (use exactly these terms)

| Term | What it is |
|------|-----------|
| Broker | Signaling/access boundary — the network trust zone |
| Hub | Logical group and lifecycle container for tunnels |
| Serverlet | Exposes a local TCP port through a tunnel |
| Clientlet | Connects to a remote serverlet |
| Weblet | Exposes a local HTTP service over the broker (no QUIC required) |
| WebClientlet | Local HTTP proxy to a remote weblet |
| Netlet | WireGuard-based mesh VPN |
| BrokerMesh | Turnkey Netlet for an entire broker (one command) |
| Relay | UDP relay node (infrastructure, not a user-facing primitive) |

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Astro 6 (`^6.3.1`) |
| CSS | Tailwind CSS 4 via `@tailwindcss/vite` (no `tailwind.config.js`) |
| Node | `^22.12.0` |
| Deployment | Vercel (primary), Netlify (secondary), Docker/nginx |

### Tailwind CSS 4 — important

All Tailwind config lives in `src/assets/styles/tailwind.css` using `@theme`, `@plugin`, `@custom-variant`, and `@utility` directives. There is **no `tailwind.config.js`**. Do not create one.

### Template structure

- Page content is composed from widget components in `src/components/widgets/`
- Site-wide metadata and feature flags live in `src/config.yaml`
- Navigation is in `src/navigation.ts`
- Blog posts are MDX files under `src/data/post/`

---

## Build & Dev

```bash
npm run dev          # start dev server
npm run build        # production build
npm run check        # astro check + eslint + prettier
npm run fix          # eslint --fix + prettier -w
```

---

## Pages

| Route | File | Status |
|-------|------|--------|
| `/` | `src/pages/index.astro` | Template placeholder — needs iulink copy |
| `/pricing` | `src/pages/pricing.astro` | Template placeholder — needs iulink tiers |
| `/services` | `src/pages/services.astro` | Template placeholder |
| `/about` | `src/pages/about.astro` | Template placeholder |
| `/contact` | `src/pages/contact.astro` | Template placeholder |
| `/blog` | `src/pages/[...blog]/` | Enabled via `src/config.yaml` |
| `/privacy` | `src/pages/privacy.md` | Needs legal review |
| `/terms` | `src/pages/terms.md` | Needs legal review |

All pages are still using AstroWind template demo content. Every page edit should replace template copy with iulink-specific copy.

---

## Workflow Conventions

Feature-workflow instructions apply: see `.mainvec/instructions/feature-workflow.instructions.md`.

- Every task needs a GitHub issue → plan file (`plans/NNN-slug.md`) → registry entry → branch
- Branch naming: `feat/NNN-slug`, `fix/NNN-slug`, `chore/NNN-slug`
- Commit format: `feat: description (#NNN)`
- Plan registry: `plans/registry.json`

---

## Content / Copy Guidelines

- **Tagline**: "Connect on your terms"
- **One-liner**: "iulink is a connectivity platform that lets you expose ports, share services, and build mesh VPNs through any NAT — with your broker or ours."
- Launch channels to keep in mind when writing CTAs: Hacker News (Show HN) and r/selfhosted — copy should resonate with developers who value control and self-hosting.
- Free hosted broker tier is the zero-friction entry point; paid features gate managed infrastructure convenience.
- See `../IULINK - GTM and Lauch/iulink-gtm-strategy.md` for full ICP, competitive positioning, and pricing model.
