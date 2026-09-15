# hdg-zero.github.io

[![Astro 7](https://img.shields.io/badge/Astro-7.3-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Zero-JS Baseline](https://img.shields.io/badge/JS%20Bundle-~15kB%20gzipped-success?style=flat-square)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

Personal technical portfolio and engineering case studies platform, built with **Astro 7**, **Tailwind CSS v4.3**, and a liquid glassmorphic design system.

🌐 **Live Production Site:** [hdg-zero.github.io](https://hdg-zero.github.io)

---

## 1. 🎯 Architectural Vision & Objectives

The primary engineering goal of this platform is to showcase systems programming, security engineering, and open-source infrastructure projects within a blazing-fast, visually refined interface.

### Key Tenets
- **Zero-JS by Default**: Elimination of heavy client-side frameworks on static content; hydration only where interactive routing is needed.
- **Fluid Single-Page Navigation**: Instant transitions with Astro 7 `ClientRouter` while preserving static HTML compilation.
- **Bilingual Core (FR / EN)**: Native bilingual support for case studies, articles, and navigation without page duplication or clunky reload flows.
- **Liquid Glassmorphic UI**: High-fidelity dark/light aesthetic built on pure modern CSS variables, backdrop filters, and subtle ambient glows.
- **Strict Accessibility & OS Integration**: Automatic adaptation to `prefers-reduced-motion` and `prefers-reduced-transparency`.

---

## 2. ⚡ Technology Stack Matrix

| Technology | Version | Role | Architectural Justification |
| :--- | :--- | :--- | :--- |
| **[Astro](https://astro.build)** | `^7.3.2` | Core Framework & SSG | Blazing-fast Rust compiler, Content Layer API with `glob()` loader, and zero-JS baseline. |
| **[Tailwind CSS](https://tailwindcss.com)** | `^4.3.3` | Styling Engine | Ultra-fast CSS-first engine via `@tailwindcss/vite` integrated with Vite 8. |
| **[ClientRouter](https://docs.astro.build/en/guides/view-transitions/)** | Astro 7 | Navigation & View Transitions | Persistent client-side transitions, caching, and state preservation during navigation (~5 kB gzipped). |
| **[TypeScript](https://www.typescriptlang.org)** | `^5.7.0` | Type Safety | Compile-time validation of frontmatters, i18n dictionaries, and component contracts. |
| **[GitHub Pages](https://pages.github.com)** | — | Edge Deployment | Free, secure, immutable static artifact hosting powered by GitHub Actions. |

---

## 3. 📂 Project Structure

```
hdg-zero.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions static deployment workflow
└── site/
    ├── public/                 # Static public files (favicon, robots, etc.)
    ├── src/
    │   ├── assets/             # Co-located, Astro-optimized images & vectors
    │   │   ├── blog/           # Article covers
    │   │   └── projects/       # High-res banners, SVGs, and diagram assets
    │   │       ├── 0_githubpage/
    │   │       ├── 1_hyprland/
    │   │       └── 3_agent-ws/ # agent-ws covers, 3D logos, and badges
    │   ├── components/         # Reusable Astro components
    │   ├── Header.astro    # Responsive header with theme & smart i18n switcher
    │   └── ProjectCard.astro # Accessible Bento project card with glass overlay
    ├── content/            # Localized markdown & MDX files
    │   ├── blog/           # Localized blog posts (*-fr.md, *-en.md)
    │   └── projects/       # Technical case studies (*-fr.mdx, *-en.mdx)
    ├── content.config.ts   # Content Layer API configuration (glob loader & Zod schemas)
    ├── i18n/               # Localization
    │   └── translations.ts # Typed translation dictionaries (FR & EN)
    ├── layouts/
    │   └── BaseLayout.astro # Root HTML shell, fonts, meta tags, and i18n runtime
    ├── pages/              # File-based static routes
    │   ├── index.astro     # Bilingual Bento grid showcase & hero section
    │   ├── blog/
    │   │   ├── index.astro # Blog archive
    │   │   └── [...slug].astro # Localized blog detail route (render() via Content Layer)
    │   └── projects/
    │       ├── index.astro # Portfolio grid with dynamic tag & language filtering
    │       └── [...slug].astro # Localized project case study route
    └── styles/
        └── global.css      # Liquid glass theme, CSS variables & animations
    ├── astro.config.mjs        # Astro configuration (vite, markdown, sitemap)
    ├── package.json            # Scripts and lean dependencies
    └── tsconfig.json           # Strict TypeScript configuration
```

---

## 4. 🛠️ Featured Technical Works

The portfolio spotlights the following core engineering case studies:

1. **[agent-ws](https://github.com/hdg-zero/agent-ws)** — *Linux AI Workspace Isolation*
   - Rootless Podman & Distrobox containment system preventing arbitrary local AI access to host files, SSH keys, and system sockets.
   - Dual-container model (headless AI engine vs. Wayland GUI container) with shared SGID project volumes.
   - Complete technical case study available in [French](/projects/3_agent-ws-fr) and [English](/projects/3_agent-ws-en).

2. **[hyprland](https://github.com/hdg-zero/dotfiles)** — *Wayland Tiling Environment*
   - High-efficiency personal development environment configured on Arch Linux / Hyprland with automated window rules, low latency, and custom status monitors.

3. **[hdg-zero.github.io](https://github.com/hdg-zero/hdg-zero.github.io)** — *Astro Portfolio Platform*
   - Modern, zero-JS baseline architecture delivering perfect 100/100 Core Web Vitals.

---

## 5. 🌍 Internationalization (i18n) Model

The application leverages a hybrid compile-time + runtime i18n architecture:

- **Static Content Routing**: Articles and case studies are suffixed with `-fr` or `-en` (e.g., `3_agent-ws-fr.mdx` and `3_agent-ws-en.mdx`).
- **Context-Aware Switcher**: When viewing `/projects/3_agent-ws-fr`, clicking the `EN` toggle directly transitions the browser to `/projects/3_agent-ws-en` via client-side regex matching instead of throwing the user back to the index.
- **Instant Client Hydration**: Static UI strings utilize `data-i18n` or `data-lang-section` attributes driven by a lightweight event bus (`languageChange`) with zero page reloads.

---

## 6. 🚀 Getting Started & Development

### Prerequisites
- **Node.js**: `v20.0.0` or higher
- **npm**: `v10.0.0` or higher

### Local Setup
```bash
# Clone the repository
git clone https://github.com/hdg-zero/hdg-zero.github.io.git
cd hdg-zero.github.io/site

# Install dependencies
npm install

# Start development server with HMR
npm run dev
```

### Production Build & Verification
```bash
# Compile static output to site/dist/
npm run build

# Preview static build locally
npm run preview
```

---

## 7. 🛡️ Standard of Quality & Verification

- **Lint & Types**: Validated with TypeScript strict mode and Astro compiler diagnostics.
- **Build Cleanliness**: Zero compilation errors, zero unhandled route warnings, and automated WebP asset optimization.
- **A11y**: Color contrast ratios compliant with WCAG AA/AAA standards in both dark and light modes.

---

## 8. 📄 License

Project codebase released under the [MIT License](LICENSE).  
Content and brand assets © Hippolyte de Guigné.