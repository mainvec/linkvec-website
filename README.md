# 🚀 AstroWind (Astro 6 + Tailwind CSS 4 Fork)

<img src="https://raw.githubusercontent.com/arthelokyo/.github/main/resources/astrowind/lighthouse-score.png" align="right"
     alt="AstroWind Lighthouse Score" width="100" height="358">

> **Fork notice:** This is a fork of [AstroWind](https://github.com/arthelokyo/astrowind) by Arthelokyo, upgraded to **Astro 6** and **Tailwind CSS 4**.

**AstroWind** is a free and open-source template to make your website using **[Astro 6](https://astro.build/) + [Tailwind CSS 4](https://tailwindcss.com/)**. Ready to start a new project and designed taking into account web best practices.

- ✅ **Astro 6** + **Tailwind CSS 4** — latest versions as of May 2026.
- ✅ **Production-ready** scores in **PageSpeed Insights** reports.
- ✅ Integration with **Tailwind CSS 4** supporting **Dark mode** and **_RTL_**.
- ✅ **Fast and SEO friendly blog** with automatic **RSS feed**, **MDX** support, **Categories & Tags**, **Social Share**, ...
- ✅ **Image Optimization** (using new **Astro Assets** and **Unpic** for Universal image CDN).
- ✅ Generation of **project sitemap** based on your routes.
- ✅ **Open Graph tags** for social media sharing.
- ✅ **Analytics** built-in Google Analytics, and Splitbee integration.

<br>

![AstroWind Theme Screenshot](https://raw.githubusercontent.com/arthelokyo/.github/main/resources/astrowind/screenshot-astrowind-1.0.png)

[![hi100e](https://custom-icon-badges.demolab.com/badge/made%20by%20-hi100e-556bf2?style=flat-square&logo=github&logoColor=white&labelColor=101827)](https://github.com/hi100e)
[![License](https://img.shields.io/github/license/hi100e/astrowind6?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/hi100e/astrowind6/blob/main/LICENSE.md)
[![Maintained](https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square)](https://github.com/hi100e)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/hi100e/astrowind6#contributing)
[![Known Vulnerabilities](https://snyk.io/test/github/hi100e/astrowind6/badge.svg?style=flat-square)](https://snyk.io/test/github/hi100e/astrowind6)
[![Stars](https://img.shields.io/github/stars/hi100e/astrowind6.svg?style=social&label=stars&maxAge=86400&color=ff69b4)](https://github.com/hi100e/astrowind6)
[![Forks](https://img.shields.io/github/forks/hi100e/astrowind6.svg?style=social&label=forks&maxAge=86400&color=ff69b4)](https://github.com/hi100e/astrowind6)

<br>

<details open>
<summary>Table of Contents</summary>

- [Demo](#demo)
- [What's changed in this fork](#whats-changed-in-this-fork)
- [TL;DR](#tldr)
- [Getting started](#getting-started)
  - [Project structure](#project-structure)
  - [Commands](#commands)
  - [Configuration](#configuration)
  - [Deploy](#deploy)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Related Projects](#related-projects)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

</details>

<br>

## Demo

📌 [https://astrowind.vercel.app/](https://astrowind.vercel.app/)

> **Note:** This demo is from the upstream project and runs the older Astro 5 version. It does not reflect this fork.

<br>

## What's changed in this fork

### Core upgrades

| Package | Upstream | This fork |
| :--- | :--- | :--- |
| `astro` | ^5.x | **^6.3.1** |
| `tailwindcss` | ^3.x | **^4.3.0** |
| `@tailwindcss/vite` | — | **^4.3.0** (replaces `@astrojs/tailwind`) |
| `@astrojs/mdx` | ^4.x | **^5.x** |
| `tailwind-merge` | ^2.x | **^3.x** |
| `astro-embed` | ^0.9.x | **^0.13.x** |
| Node.js engines | `^18\|\|^20\|\|>=21` | **`^22.12.0`** |

### Tailwind CSS 4 migration

- `tailwind.config.js` **deleted** — all configuration moved to `src/assets/styles/tailwind.css` using CSS-native `@theme`, `@plugin`, `@custom-variant`, and `@utility` directives.
- `@import "tailwindcss"` replaces the old `@tailwind base/components/utilities` directives.
- Custom utilities (`btn`, `btn-primary`, `bg-page`, `text-muted`, etc.) rewritten as `@utility` blocks.
- Dark mode and intersection observer variants defined via `@custom-variant`.

### Astro 6 migration

- `src/content/config.ts` **moved** to `src/content.config.ts` (Astro 6 requirement).
- `z` import split from `astro:content` to `astro/zod` (Astro 6 deprecation).
- Remote image domains (`images.unsplash.com`, `plus.unsplash.com`) added to `astro.config.ts` `image.domains` (Astro 6 is stricter).
- `tsconfig.json` — removed deprecated `baseUrl`; `paths` now uses `./src/*`.

### Dependency clean-up

- `@astrolib/analytics` **removed** — Google Analytics inlined directly in `Analytics.astro`.
- `npm overrides` added for `astro-icon` and `@astrolib/seo` so `npm install` works without `--legacy-peer-deps`.

### Configuration

- New `announcement` block in `src/config.yaml` — controls the top banner with `isEnabled`, `label`, `text`, `href`, and `isTargetBlank`. No more hardcoded content in `Announcement.astro`.

<br>

## TL;DR

```shell
npm create astro@latest -- --template hi100e/astrowind6
```

> The upstream template (Astro 5, older) is available at `npm create astro@latest -- --template arthelokyo/astrowind`.

### Dependency notes

Two upstream packages (`astro-icon`, `@astrolib/seo`) have stale `peerDependencies` that predate Astro 6. This fork handles both cleanly:

- **`@astrolib/analytics`** — removed entirely. Google Analytics is now inlined directly in `src/components/common/Analytics.astro` (no external dependency).
- **`astro-icon`** and **`@astrolib/seo`** — kept as-is (work at runtime). A `package.json` `overrides` entry tells npm that Astro 6 satisfies their peerDeps, so `npm install` works without `--legacy-peer-deps`.

#### Cloudflare Workers / Cloudflare adapter

If you deploy using the `@astrojs/cloudflare` adapter, `astro-icon` has a known runtime issue ([#277](https://github.com/natemoo-re/astro-icon/issues/277)): its transitive deps `@iconify/utils@2.x` and `@iconify/tools@4.x` import the `debug` package as CJS, which breaks the Cloudflare Workers runtime. Add these extra overrides to `package.json` to fix it:

```json
"overrides": {
  "@iconify/tools": "5.0.5",
  "@iconify/utils": "3.1.0"
}
```

This is not needed for static or Node.js deployments (Netlify, Vercel static, etc.).

## Getting started

**AstroWind** tries to give you quick access to creating a website using [Astro 6](https://astro.build/) + [Tailwind CSS 4](https://tailwindcss.com/). It's a free theme which focuses on simplicity, good practices and high performance.

Very little vanilla javascript is used only to provide basic functionality so that each developer decides which framework (React, Vue, Svelte, Solid JS...) to use and how to approach their goals.

In this version the template supports all the options in the `output` configuration, `static`, `hybrid` and `server`, but the blog only works with `prerender = true`. We are working on the next version and aim to make it fully compatible with SSR.

### Project structure

Inside **AstroWind** template, you'll see the following folders and files:

```
/
├── public/
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   └── Logo.astro
│   ├── content/
│   │   ├── post/
│   │   │   ├── post-slug-1.md
│   │   │   ├── post-slug-2.mdx
│   │   │   └── ...
│   │   └-- config.ts  (now at src/content.config.ts in Astro 6)
│   ├── layouts/
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── [...blog]/
│   │   │   ├── [category]/
│   │   │   ├── [tag]/
│   │   │   ├── [...page].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├-- rss.xml.ts
│   │   └── ...
│   ├── utils/
│   ├── config.yaml
│   └── navigation.js
├── package.json
├── astro.config.ts
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

[![Edit AstroWind on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/hi100e/astrowind6/tree/main) [![Open in Gitpod](https://svgshare.com/i/xdi.svg)](https://gitpod.io/?on=gitpod#https://github.com/hi100e/astrowind6) [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/hi100e/astrowind6)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file `README.md`. Update `src/config.yaml` and contents. Have fun!

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `npm install`       | Installs dependencies                              |
| `npm run dev`       | Starts local dev server at `localhost:4321`        |
| `npm run build`     | Build your production site to `./dist/`            |
| `npm run preview`   | Preview your build locally, before deploying       |
| `npm run check`     | Check your project for errors                      |
| `npm run fix`       | Run Eslint and format codes with Prettier          |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro preview` |

<br>

### Configuration

Basic configuration file: `./src/config.yaml`

```yaml
site:
  name: 'Example'
  site: 'https://example.com'
  base: '/' # Change this if you need to deploy to Github Pages, for example
  trailingSlash: false # Generate permalinks with or without "/" at the end

  googleSiteVerificationId: false # Or some value,

# Default SEO metadata
metadata:
  title:
    default: 'Example'
    template: '%s — Example'
  description: 'This is the default meta description of Example website'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: 'Example'
    images:
      - url: '~/assets/images/default.png'
        width: 1200
        height: 628
    type: website
  twitter:
    handle: '@twitter_user'
    site: '@twitter_user'
    cardType: summary_large_image

i18n:
  language: en
  textDirection: ltr

apps:
  blog:
    isEnabled: true # If the blog will be enabled
    postsPerPage: 6 # Number of posts per page

    post:
      isEnabled: true
      permalink: '/blog/%slug%' # Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      robots:
        index: true

    list:
      isEnabled: true
      pathname: 'blog' # Blog main path, you can change this to "articles" (/articles)
      robots:
        index: true

    category:
      isEnabled: true
      pathname: 'category' # Category main path /category/some-category, you can change this to "group" (/group/some-category)
      robots:
        index: true

    tag:
      isEnabled: true
      pathname: 'tag' # Tag main path /tag/some-tag, you can change this to "topics" (/topics/some-category)
      robots:
        index: false

    isRelatedPostsEnabled: true # If a widget with related posts is to be displayed below each post
    relatedPostsCount: 4 # Number of related posts to display

analytics:
  vendors:
    googleAnalytics:
      id: null # or "G-XXXXXXXXXX"

ui:
  theme: 'system' # Values: "system" | "light" | "dark" | "light:only" | "dark:only"
```

<br>

#### Customize Design

To customize Font families, Colors or more Elements refer to the following files:

- `src/components/CustomStyles.astro` — CSS custom properties (`--aw-color-*`, `--aw-font-*`)
- `src/assets/styles/tailwind.css` — Tailwind CSS 4 `@theme` block (colors, fonts, animations)

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

#### Deploy to Netlify

Clone this repository on your own GitHub account and deploy it to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/hi100e/astrowind6)

#### Deploy to Vercel

Clone this repository on your own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhi100e%2Fastrowind6)

<br>

## Frequently Asked Questions

- Why?
-
-

<br>

## Related projects

- [TailNext](https://tailnext.vercel.app/) - Free template using Next.js 14 and Tailwind CSS with the new App Router.
- [Qwind](https://qwind.pages.dev/) - Free template to make your website using Qwik + Tailwind CSS.

## Contributing

If you have any ideas, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request.
That would be very useful for all of us and we would be happy to listen and take action.

## Acknowledgements

Originally created by **Arthelokyo** and maintained by a community of [contributors](https://github.com/arthelokyo/astrowind/graphs/contributors).

This fork upgrades the template to Astro 6 + Tailwind CSS 4. Upstream repo: [arthelokyo/astrowind](https://github.com/arthelokyo/astrowind).

## License

**AstroWind** is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.
