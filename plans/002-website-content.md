# #002: Website Content — Customize All Pages for iulink
**Type**: feat
**Module**: website
**Status**: planned
**GitHub**: TBD
**Branch**: feat/002-website-content

## Progress

- [ ] GitHub issue created (#002)
- [x] Plan file written (`plans/002-website-content.md`)
- [x] Registry updated (`plans/registry.json`)
- [ ] Branch created (`feat/002-website-content`)
- [ ] T1: Download page (`/download`) — create new page; primary CTA target — **done**
- [ ] T2: Pricing page (`/pricing`) — replace demo tiers with real iulink tiers — **done**
- [ ] T3: Homepage (`/`) — replace demo copy with iulink landing content — **done**
- [ ] T4: Why iulink page (`/why-iulink`) — create new page (currently 404) — **done**
- [ ] T5: About page (`/about`) — replace template copy with iulink context — **done**
- [ ] T6: Contact page (`/contact`) — update copy and form — **done**
- [ ] T7: Privacy & Terms pages — replace placeholders with real content
- [ ] T8: Navigation audit — verify all links resolve after new pages land
- [ ] PR opened (`Closes #002`)

---

## Execution Order

Pages are ordered by dependency and impact, not alphabetically. Each page should build and pass `npm run check` before moving to the next.

| # | Page | File | Type | Why this order |
|---|------|------|------|----------------|
| **T1** | `/download` | `src/pages/download.astro` | **New file** | Every CTA on every other page links here. Must exist first so links aren't dead while writing other pages. |
| **T2** | `/pricing` | `src/pages/pricing.astro` | Edit existing | Second CTA destination; needed before homepage references it in the "Bring your own broker" note. |
| **T3** | `/` (homepage) | `src/pages/index.astro` | Edit existing | Highest-traffic page; references /download and /pricing which are now ready. |
| **T4** | `/why-iulink` | `src/pages/why-iulink.astro` | **New file** | Live nav link (currently 404); write after homepage so voice/framing is established. |
| **T5** | `/about` | `src/pages/about.astro` | Edit existing | Lower conversion priority; write after positioning is locked in T3/T4. |
| **T6** | `/contact` | `src/pages/contact.astro` | Edit existing | Minimal changes; lowest priority of the live pages. |
| **T7** | Privacy & Terms | `src/pages/privacy.md`, `src/pages/terms.md` | Edit existing | Blocked on legal review; can be done in parallel with T5/T6 or deferred to just before launch. |
| **T8** | Nav audit | `src/navigation.ts` | Edit existing | Final step after all pages exist; verify every link in header and footer resolves. |

---



All pages currently contain AstroWind template demo copy (references to "AstroWind", "Stellar Pricing for Every Journey", etc.). The site is live at `iulink.com` but has no iulink product copy, messaging, or pricing. This plan replaces all placeholder content with production-ready iulink copy derived from the GTM strategy docs in `../IULINK - GTM and Lauch/`.

---

## Approach

Work page by page using the existing widget component system — **no new components unless unavoidable**. Each page's content is assembled from widgets in `src/components/widgets/`. Replace the props/data objects only; keep the component structure intact. This limits diff size and avoids layout regressions.

Source of truth for copy decisions:
- Positioning and value props → `../IULINK - GTM and Lauch/iulink-gtm-strategy.md`
- Broker concept and security story → `../IULINK - GTM and Lauch/iulink-broker-concept.md`
- Primitive names and descriptions → `../IULINK - GTM and Lauch/iulink-constructs-concept.md`
- Pricing tiers → GTM strategy §Pricing & Monetization

---

## Widget Inventory

All available widgets confirmed from `src/components/widgets/` and the live demo at `https://hi100e.github.io/astrowind6/`:

| Widget | File | What it renders |
|--------|------|-----------------|
| **Hero** | `Hero.astro` | Full hero with image, headline, subtitle, 2 CTA buttons. Used on homepage, services. |
| **Hero2** | `Hero2.astro` | Alternate hero — used on about page (full-width image treatment). |
| **HeroText** | `HeroText.astro` | Text-only hero with tagline + title + subtitle. Used on pricing page. |
| **Note** | `Note.astro` | Narrow highlight/callout strip below hero. |
| **Features** | `Features.astro` | 3-column icon + title + description grid. Primary feature showcase. |
| **Features2** | `Features2.astro` | Feature list with a paired content panel; used for "main features + benefits" split on services/startup pages. |
| **Features3** | `Features3.astro` | Compact icon-grid, no descriptions — used on pricing page for "what's included" and contact-style columns. |
| **Content** | `Content.astro` | Split-panel: text left or right, image opposite. Used for deep-dive narrative sections. |
| **Steps** | `Steps.astro` | Numbered steps with a side image. Used for "getting started" flows. |
| **Steps2** | `Steps2.astro` | Icon-based steps without image. Used for lightweight how-it-works flows. |
| **Pricing** | `Pricing.astro` | Tier cards with price, feature list, CTA button. Used on pricing + SaaS demo. |
| **FAQs** | `FAQs.astro` | Accordion FAQ list. Used on homepage, pricing, SaaS, startup pages. |
| **Testimonials** | `Testimonials.astro` | Quote cards with avatar, name, title. Used on services page. |
| **Stats** | `Stats.astro` | Bold stat row (e.g. "182K Downloads · 87 Sites"). Used on about + startup pages. |
| **Brands** | `Brands.astro` | Logo strip for integrations / "works with" / social proof. Used on startup page. |
| **CallToAction** | `CallToAction.astro` | Full-width CTA band with headline + button. Used as page-bottom closer. |
| **Contact** | `Contact.astro` | Contact form + contact details sidebar. Used on SaaS, startup, and about pages. |
| **BlogLatestPosts** | `BlogLatestPosts.astro` | Latest blog post cards. |
| **BlogHighlightedPosts** | `BlogHighlightedPosts.astro` | Highlighted/featured post cards. |
| **Announcement** | `Announcement.astro` | Top-of-page announcement banner (used for "Astro 6 fork available" notice). |

**Available page layouts** (`src/layouts/`):
- `PageLayout.astro` — standard site header + footer wrapper; used by all main pages
- `LandingLayout.astro` — stripped-down layout for `/landing/*` pages (no nav)
- `MarkdownLayout.astro` — for `.md` pages (privacy, terms)

**Demonstrated page patterns** (from the demo site):
- **SaaS home** (`homes/saas`): Hero → Features → Content (use-cases) → Pricing → FAQs → Contact → BlogLatestPosts
- **Startup home** (`homes/startup`): Hero (with video embed) → Stats → Brands → Features2 → Features → FAQs → Steps2 → Contact → CallToAction
- **About** (`/about`): Hero2 → Stats → Features2 → Steps → Features → Contact
- **Services** (`/services`): Hero → Features2 + Features3 (tabbed) → Testimonials → CallToAction
- **Pricing** (`/pricing`): HeroText → Pricing → FAQs → Steps → Features3 → CallToAction

---

## Tasks

### T1: Download page (`src/pages/download.astro`) — NEW FILE
**Status**: todo
**Notes**:

Currently a 404. This is the primary CTA destination from every "Get started free" button. Create `src/pages/download.astro`. Use `PageLayout` so nav/footer are present.

**Widget composition:**

| Order | Widget | Props summary |
|-------|--------|---------------|
| 1 | `HeroText` | tagline "Download", title "Up and running in 60 seconds.", subtitle "One command. Works behind CGNAT. No router config." |
| 2 | `Steps` | 3 steps: (1) Install — show the curl command; (2) Expose — `iulink expose --port 8080 --name myservice`; (3) Connect — `iulink connect --service iulink://myservice` |
| 3 | `Features3` | Platform support: Linux (x86_64, arm64, armhf), macOS (Intel + Apple Silicon), Windows (installer / WSL) |
| 4 | `Content` | image=right, "Bring your own broker — no account needed." — explains BYOB, links to pricing for hosted broker option, links to GitHub releases for manual download / version pinning |
| 5 | `CallToAction` | "Need a hosted broker? See pricing." → "View pricing" → /pricing |

**Dependency note:** The install command URL (`https://downloads.iulink.com/iulink-install.sh`) must exist before this page is published. Coordinate with infra (blocked by launch plan Week 1). Use a placeholder URL or GitHub releases link in the meantime.

---

### T2: Pricing page (`src/pages/pricing.astro`)
**Status**: todo
**Notes**:

Replace demo tier names and prices with the real iulink tier structure from GTM strategy §Pricing. Follows the existing pricing page pattern: `HeroText → Pricing → FAQs → Steps → Features3 → CallToAction`.

**Widget composition:**

| Order | Widget | Props summary |
|-------|--------|---------------|
| 1 | `HeroText` | tagline "Pricing", title "Infrastructure you control — or we run it for you.", subtitle "Same product. Your choice of operational burden." |
| 2 | `Pricing` | 4 tier cards — see tiers below |
| 3 | `Features3` | "What stays free forever" — 3 columns: AGPL CLI, iubroker self-hosted, community relays |
| 4 | `FAQs` | 5 Qs: "What's unlimited?", "What if I self-host?", "Can I switch brokers?", "What is a dedicated broker?", "Is the CLI always free?" |
| 5 | `Steps` | Upgrade path: (1) Start free / BYOB, (2) Hit a limit → upgrade prompt, (3) Broker provisioned in < 60s |
| 6 | `CallToAction` | "Start free. Upgrade when you need infrastructure." → "Get started free" → /download |

**Four tiers for `Pricing` widget:**

| Tier | Price | Badge | Key angle in description |
|------|-------|-------|--------------------------|
| Free — Community | $0 | — | "Everything. You supply the infra." |
| Developer | $9/month (or $90/year) | POPULAR | "Dedicated hosted broker. Flat rate. No per-machine counting." |
| Team | $14/user/month (min 2 users) | — | "Broker cluster, audit log, admin console, Slack support." |
| Self-Hosted Pro | $199/year flat | — | "Commercial license for iubroker. Compliance-ready." |

**Framing note (use in `Pricing` subtitle):** "Paid tiers are us managing infrastructure. The product and protocol are the same."

---

### T3: Homepage (`src/pages/index.astro`)
**Status**: todo
**Notes**:

The homepage is the primary landing page. Visitor arrives from HN / r/selfhosted / Google. Goal: communicate the "choice" positioning in under 5 seconds, then present the key value props and a clear CTA to get started free.

**Widget composition** (follows SaaS home demo pattern):

| Order | Widget | Props summary |
|-------|--------|---------------|
| 1 | `Hero` | headline "Connect on your terms", subtitle = one-liner, image = product screenshot/GIF (TBD), actions: "Get started free" (primary → /download) + "View docs" (link → docs.iulink.com) |
| 2 | `Note` | Single-line hook: "Full product. Full choice. Your broker, your path, your relay." |
| 3 | `Features` | 6 cards with icons: BYOB + broker boundary; 3-path fallback; service tunnels (no root); HTTP over broker; mesh VPN in 1 cmd; hub sharing |
| 4 | `Content` | image=right, title "Your services. Invisible to the internet." — the SSH/broker-as-boundary story |
| 5 | `Content` | image=left, title "Choose your path." — three-path model diagram (text-based), how broker-first upgrades silently |
| 6 | `Steps` | 3 steps: (1) Install `curl … \| sh`, (2) `iulink expose --port 8080`, (3) `iulink hub_share` — inline code in step titles |
| 7 | `FAQs` | 5 Qs: CGNAT / behind firewalls, self-hosting the broker, root requirements, broker downtime, pricing model |
| 8 | `CallToAction` | "Start for free. Bring your own broker. No vendor lock-in." — "Get started free" → /download |

**Skip for v1:** Testimonials (no users yet), Stats (no data yet), BlogLatestPosts (no posts yet), Brands (no integrations to show).

**Messaging guardrails:**
- Do NOT say "MQTT" anywhere on this page.
- Do NOT lead with "open source."
- Say "broker" consistently — never "server", "relay", or "gateway" for the signaling layer.
- Both CTAs point to `/download`, not GitHub directly.

---

### T4: Why iulink page (`src/pages/why-iulink.astro`) — NEW FILE
**Status**: todo
**Notes**:

Currently a 404 (linked in nav as `/why-iulink`). Needs to be created as `src/pages/why-iulink.astro`. This is the "compare + convince" page for visitors who arrive curious but not yet sold.

**Widget composition:**

| Order | Widget | Props summary |
|-------|--------|---------------|
| 1 | `Hero` | headline "Full product. Full choice.", subtitle "Most connectivity tools make you pick one. iulink doesn't.", image = positioning gap diagram or product screenshot, action: "Get started free" → /download |
| 2 | `Features` | The 6 choices at every layer — broker, path, mode, relay, interface, what to share — each as a card |
| 3 | `Content` | image=right, title "Your broker is your network boundary." — condensed broker-as-security-boundary story; SSH invisibility example |
| 4 | `Content` | image=left, title "Least privilege by design." — unprivileged daemon, bounded blast radius, contrast with root-daemon competitors |
| 5 | `Features2` | Competitor comparison — iulink vs ngrok / Tailscale / CF Tunnel / NetBird / WireGuard DIY. Use Features2's paired-panel capability for "them vs us" framing per competitor |
| 6 | `FAQs` | 3–4 Qs addressing sharpest competitive objections: "Why not just use Tailscale?", "How is this different from ngrok?", "Is this a VPN?" |
| 7 | `CallToAction` | "Try it free. No account required if you bring your own broker." → "Get started free" + "Read docs" |

**Notes:**
- The competitor comparison in step 5 should be factual, not snarky. Follow GTM messaging rules.
- Do NOT use a Markdown table for the comparison — the `Features2` widget renders it as styled UI, which is far more readable.
- Do NOT say "MQTT" anywhere.

---

### T5: About page (`src/pages/about.astro`)
**Status**: todo
**Notes**:

Replace template "About us" filler. iulink is a solo founder project at launch; avoid corporate-speak. The audience is technical developers who will Google the founder. Follows the existing `about.astro` page structure.

**Widget composition** (follows about page demo pattern):

| Order | Widget | Props summary |
|-------|--------|---------------|
| 1 | `Hero2` | Full-width image hero — headline "Built because CGNAT is annoying.", short paragraph on origin story |
| 2 | `Content` | image=right, "Why iulink exists" — 2–3 paragraphs: CGNAT frustration, the gap between managed and DIY, the decision to build |
| 3 | `Steps` | "What iulink believes" — 3 principles: (1) Choice is a feature, not a trade-off. (2) Your data plane should be yours. (3) Security should be structural, not just configured. |
| 4 | `Features3` | 3 columns: GitHub (link to repo), Discord (community), Docs (docs.iulink.com) — the open presence |
| 5 | `CallToAction` | "Explore the product." → "Get started free" + "View on GitHub" |

**Tone notes:**
- Skip Stats widget — no real numbers at launch; fake numbers (like the demo) erode trust with the HN audience.
- Skip Brands / Testimonials — same reason.
- One honest founder paragraph > five corporate-speak paragraphs.
- Reference the open-source license (AGPL) but do not lead with it — see GTM messaging rules.

---

### T6: Contact page (`src/pages/contact.astro`)
**Status**: todo
**Notes**:

Minimal changes to `src/pages/contact.astro`. The `Contact` widget is already present; update the surrounding copy only.

**Widget composition:**

| Order | Widget | Props summary |
|-------|--------|---------------|
| 1 | `HeroText` | tagline "Contact", title "Get in touch.", subtitle "Questions, partnership ideas, or just want to talk connectivity." |
| 2 | `Features3` | 3 contact channels: Email (`hi@iulink.com`), Discord (community link), GitHub Discussions (primary support for Free tier) |
| 3 | `Contact` | Form — update description to "Send a message and we'll get back to you." Remove fake phone/social from template. |

---

### T7: Privacy & Terms pages
**Status**: todo
**Notes**:

`src/pages/privacy.md` and `src/pages/terms.md` currently contain placeholder markdown. These need to be real documents before launch. The GTM strategy recommends buying from Termly or Docracy and customizing — this task is to integrate the final versions. Blocking on legal review; mark complete only after review.

---

### T8: Navigation audit
**Status**: todo
**Notes**:

After T1–T7 are done, verify all links in `src/navigation.ts` and the footer resolve correctly:
- `/download` — created in T1 ✓
- `/why-iulink` — created in T4 ✓
- Footer "Use cases" links (homelab, developer tunnels, team sharing, edge IoT) → currently `#`. Decision needed: stub pages or keep as `#` for v1?
- External links: `https://docs.iulink.com`, `https://status.iulink.com`, `https://github.com/iulink` — verify live before launch.
- Changelog link → currently `#`, keep for v1.

---

## Open Questions

1. **Download page hosting** — `https://downloads.iulink.com/iulink-install.sh` needs to exist before the download page goes live. Is this blocked on infra (Week 1 in launch plan)?
2. **Use case sub-pages** — footer links to `/homelab`, `/developer-tunnels`, `/team-sharing`, `/edge-iot`. Create as stubs for v1, or remove from footer until Phase 2?
3. **Testimonials / social proof** — homepage has a Testimonials widget slot. Skip for v1 (no real users yet) or replace with a "What the community is saying" section using relevant subreddit quotes?
4. **Screenshots / demo GIF** — the Hero widget supports an image. A product screenshot or animated GIF would significantly increase conversion. Coordinate with the CLI/desktop team.
5. **Blog posts** — the launch plan calls for docs first, blog as Phase 2. Disable the blog link in nav for v1, or leave it pointing to the blog list (currently empty)?
