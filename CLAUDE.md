# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bodhya is a static website built with **Zola** (Rust-based SSG, v0.21.0 — pinned in `netlify.toml`), deployed on Netlify at bodhya.net. Its purpose is creating tech opportunities for Bihar students.

The site previously offered NPO consulting; that page was retired. The blog post `content/blog/bodhya-for-npos.md` still discusses "Bodhya Consulting" as published history — leave it unless asked to retract it.

## Common Commands

```bash
brew install zola     # macOS install
zola serve            # live reload at http://localhost:1111
zola build            # production build → public/
```

Zola is the only build tool. There is no package.json, Makefile, linter, or test suite — "verifying a change" means `zola build` succeeds and the page looks right in the browser.

A clean build reports `8 pages (0 orphan) and 1 sections`. If you ever see an orphan warning, a page has been added under a subdirectory that has no `_index.md` — either add one or move the file up to `content/`.

## Architecture

### Two-tier styling — read this before touching any page

The single most important thing to understand: **styling is split between a shared shell and self-contained page documents.**

**Tier 1 — the shell.** `templates/base.html` (~700 lines) holds the header, nav, footer, and ~600 lines of global CSS in one `<style>` block. Its tokens live in `:root`:

```
--bg-floral: #FFF8F3   --accent-red: #AD544B   --accent-red-dark: #8f3e2e
--text-main: #2d2d2d   --nav-text: #4a4a4a
--font-display: 'Funnel Display'   --font-body: system stack
```

**Tier 2 — self-styled content pages.** `about.md`, `join.md`, and `projects.md` are not plain markdown. Each is a full HTML document embedded in a `.md` file, carrying its own `<style>` block and its own redefined `:root` under *different* variable names (`--c-bg`, `--c-accent`, `--c-accent-hover`, `--c-text-main`). They opt out of the shell's layout via:

```toml
[extra]
hide_title = true
```

which makes `templates/page.html` drop the `<h1>` and strip `main`'s padding/max-width so the page renders full-bleed. `templates/404.html` does the same thing with `main { ... !important }` overrides inside its content block.

Consequences to internalize:
- Editing brand colors in `base.html` will **not** change about/join/projects. Those hex values are duplicated per page and must be updated in each file.
- To restyle one of those pages, edit the `<style>` block inside its `.md` file, not `base.html`.
- Don't re-import Google Fonts inside a page — `base.html` already loads Funnel Display 300–800 (with preconnects), which covers every weight.

### Templates

Tera (Jinja2-like) with block inheritance from `base.html`:

- `index.html` — homepage; hero, feature cards, narrative sections, CTA, "Supported by" logos. The homepage's visible copy lives **here in the template**, not in `content/_index.md` (that file's markdown body is unused because it sets `template = "index.html"`).
- `page.html` — 11-line wrapper; implements the `hide_title` full-bleed escape hatch described above.
- `blog.html` / `blog-post.html` — listing and article views, styled by the `.post-*` classes in `base.html`. Those colors (`#1a1a1a`, `#666`, `#f0f0f0`) are inherited from the inline styles they replaced and deliberately do **not** match the brand tokens; retheme them on purpose, not by accident.
- `404.html` — Mithila-art error page.

### Nav lives in one macro

`templates/macros.html` defines `primary_links()`, the single source of truth for navigation. `base.html` imports it (`{% import "macros.html" as nav %}`) and calls it in all three places: the desktop `<nav>`, the mobile `<dialog>` nav, and the footer nav (which appends Blog + Contact). **Add or rename a nav item there once.**

All three navs are `display: flex`, so whitespace between the emitted anchors is not rendered.

"Events" is an external link to `https://fossunited.org/c/bihar` — there is no local events page.

### Mobile menu

768px breakpoint. Desktop nav hides; a hamburger button opens a native `<dialog>` via `showModal()`. Logic is in `static/mobile-menu.js` (the only JS on the site) — open, close, and click-outside-to-dismiss via bounding-rect check.

### Content

Markdown in `content/` with **TOML** frontmatter (`+++` delimiters, not YAML). Pages use explicit `path` frontmatter for URLs; note the existing files are inconsistent about the leading slash (`path = "/about"` vs `path = "privacy-policy"`) — both work.

Blog posts live in `content/blog/` and need `date` and `description`; `tags` feed the taxonomy pages at `/tags/<tag>`.

Legal pages (`privacy-policy.md`, `terms-of-service.md`, `code-of-conduct.md`) name **XAANEN CONSULTING (OPC) PRIVATE LIMITED** as operator/Data Fiduciary and are written to India's DPDPA 2023. Don't casually reword the legal substance.

### Static assets

`static/` is copied to the site root, so `static/bodhya-brown.svg` is referenced as `/bodhya-brown.svg`. Main logo: `bodhya-brown.svg`; favicon: `bodhyafavi.svg`.

There is no external stylesheet: `compile_sass = false` and no `.scss` sources exist. Don't add one — see the two-tier styling rules above.

### External runtime dependencies

Loaded from CDN in `base.html` `<head>`: Font Awesome 6.5.1 (footer social icons) and Google Fonts Funnel Display (300–800 variable). No bundler, no local copies.

## Deployment

Netlify builds from `main` with `zola build` → `public/`. There are **no GitHub Actions workflows** in this repo (`.github/` does not exist). `.gitignore` excludes `public/`, `.DS_Store`, `.claude/settings.local.json`, and root-level `*.png` (screenshots).

## Slash Commands

Defined in `.claude/commands/`, invoked as `/name`:

| Command | Purpose |
| --- | --- |
| `/build-check` | Run `zola build`, report warnings/errors, file count, build size |
| `/deploy-check` | Minimal build-and-report variant |
| `/visual-check` | Playwright screenshots at 1920 / 768 / 375px |
| `/audit` | Playwright pass over nav links and the mobile menu at 375px |
| `/optimize` | Broad audit: CSS/template redundancy, responsiveness, a11y, assets |
| `/seo-check` | Frontmatter, heading hierarchy, sitemap/RSS, Open Graph |
| `/new-content` | Scaffold a post or page with correct TOML frontmatter and location |
| `/commit-and-push` | Stage, commit, push with confirmation |

`CLAUDE_CODE_SETUP.md` documents this tooling for humans; keep it in sync when commands change.

## What NOT to Do

- Do NOT add npm/package.json — this is a pure Zola project
- Do NOT use Tailwind, Bootstrap, or any CSS framework
- Do NOT introduce new standalone `.css` files — global styles go in `base.html`'s `<style>` block; page-specific styles go in that page's own `<style>` block (see two-tier styling above)
- Do NOT edit `public/` — build output
- Do NOT hand-edit nav in `base.html` — change `templates/macros.html` instead
- Always run `zola build` before marking work done

## License

CC BY-SA — attribution required, derivatives must share under the same license.
