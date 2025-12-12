# hdg-zero.github.io

Personal portfolio and blog.

## 🌐 Live Site

**[hdg-zero.github.io](https://hdg-zero.github.io)**

## 🚀 Technologies

- **Framework:** [Astro](https://astro.build/) v5
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **UI:** Liquid Glass design with dark/light mode
- **i18n:** French & English support
- **Deployment:** GitHub Pages

## 📁 Project Structure

```
site/
├── src/
│   ├── components/    # Astro components (Header, ProjectCard...)
│   ├── content/       # Blog posts and projects (Markdown)
│   ├── i18n/          # Translations
│   ├── layouts/       # Base layouts
│   ├── pages/         # Routes (index, blog, projects)
│   └── styles/        # Global CSS
├── public/            # Static assets
└── astro.config.mjs   # Astro configuration
```

## 🛠️ Development

```bash
# Navigate to site directory
cd site

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Content

### Adding a Blog Post

Create a new `.md` file in `site/src/content/blog/`:

```markdown
---
title: "Post Title"
description: "Short description"
publishDate: 2024-12-01
cover: "./cover.jpg"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Adding a Project

Create a new `.md` file in `site/src/content/projects/`:

```markdown
---
title: "Project Name"
description: "Project description"
publishDate: 2024-12-01
cover: "./cover.jpg"
tags: ["Web", "AI"]
linkDemo: "https://demo.example.com"
linkRepo: "https://github.com/..."
featured: true
---

Project details...
```

## 🎨 Features

- **Liquid Glass UI** — Premium glassmorphism effects with smooth animations
- **Dark/Light Mode** — Persistent theme switching
- **FR/EN Support** — Dynamic language switching
- **Responsive** — Mobile-first design
- **SEO Ready** — Meta tags and Open Graph support
- **View Transitions** — Smooth page transitions

## 📄 License

MIT © Hippolyte de Guigné