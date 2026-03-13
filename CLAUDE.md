# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bodhya is a static website built with **Zola** (Rust-based SSG, v0.21.0), deployed on Netlify. It serves two purposes: creating tech opportunities for Bihar students, and offering consulting services for non-profit organizations.

## Common Commands

```bash
# Install Zola (macOS)
brew install zola

# Serve locally with live reload at http://localhost:1111
zola serve

# Build for production (outputs to public/)
zola build
```

There is no package.json, Makefile, or test suite — Zola is the only build tool.

## Architecture

### Template System
Templates use Zola's Tera syntax (Jinja2-like) with block inheritance from `base.html`:

- `templates/base.html` — master layout: sticky header, mobile nav, footer, and **all CSS embedded inline** in a `<style>` tag
- `templates/index.html` — homepage with hero, feature cards, and narrative sections
- `templates/page.html` — generic wrapper for markdown content pages
- `templates/blog.html` / `blog-post.html` — blog listing and article views
- `templates/404.html` — error page

### Content
Markdown files in `content/` with TOML frontmatter. Key pages: `_index.md` (homepage), `about.md`, `join.md`, `consulting.md`. Blog posts live in `content/blog/`, project pages in `content/projects/`.

### Static Assets
`static/` contains images, SVG logos, `main.css`, and `mobile-menu.js` (hamburger menu toggle). The main logo is `static/bodhya-brown.svg`.

### Configuration
- `config.toml` — Zola config: base URL, title, taxonomies (tags, categories), feed generation
- `netlify.toml` — deploy command (`zola build`), publish dir (`public/`), Zola version pin

## Brand & Design

- **Primary color:** `#AD544B` (terracotta)
- **Background:** `#FFF8F3` (floral white)
- **Display font:** Funnel Display (variable, 300–800 weight)
- **Mobile breakpoint:** 768px — desktop nav hidden, replaced by dialog-based slide-in hamburger menu

## CSS Approach

All styles live in the `<style>` block inside `templates/base.html`. `static/main.css` exists but the primary styles are embedded. `sass/` and `themes/` directories are present but empty.

## CI/CD

Two GitHub Actions workflows in `.github/workflows/`:
- `claude.yml` — responds to `@claude` mentions in issues/PRs
- `claude-code-review.yml` — auto-runs Claude code review on every PR

Both require `ANTHROPIC_API_KEY` secret set in GitHub repository settings.

## Claude Code Slash Commands

These commands are defined in `.claude/commands/` and can be invoked with `/command-name` in Claude Code sessions. Use them as shortcuts for common development tasks.

### Available Commands

**`/optimize`** — Comprehensive audit across code quality, build setup, UX, and interface
- Analyzes CSS and templates for redundancy
- Tests responsiveness at desktop/tablet/mobile
- Checks accessibility (color contrast, semantic HTML)
- Verifies assets are optimized
- Provides prioritized improvement recommendations

**`/visual-check`** — Quick screenshot verification at multiple viewport sizes
- Desktop (1920px), tablet (768px), mobile (375px)
- Checks for visual glitches and brand consistency
- Verifies typography and spacing
- Use after CSS changes to verify appearance

**`/build-check`** — Verify site builds successfully
- Runs `zola build` and reports any warnings/errors
- Checks file count and build size
- Use before committing or deploying

**`/new-content`** — Create new blog posts or pages with proper TOML frontmatter
- Creates files in correct locations (`content/blog/` or `content/`)
- Handles slug formatting and metadata
- Runs verification after creation

**`/seo-check`** — Audit for SEO best practices
- Verifies frontmatter (title, description)
- Checks heading hierarchy and internal linking
- Validates sitemap and RSS feeds
- Checks Open Graph meta tags
- Reports on mobile friendliness

**`/commit-and-push`** — Stage, commit, and push changes to GitHub
- Shows changed files for confirmation
- Asks for commit message
- Runs `git add`, `git commit`, and `git push` automatically
- Reports success with GitHub commit link
- Ensures only intentional changes are pushed

### Typical Workflow

1. **For a new feature or change:**
   ```
   /build-check          # Make sure it compiles
   /visual-check         # See how it looks across devices
   /optimize             # Comprehensive review before pushing
   /commit-and-push      # Stage, commit, and push to GitHub
   ```

2. **For a new blog post:**
   ```
   /new-content          # Create post with proper formatting
   /build-check          # Verify it compiles
   /seo-check            # Check SEO optimization
   /visual-check         # Preview appearance
   /commit-and-push      # Stage, commit, and push to GitHub
   ```

3. **For pushing to production:**
   ```
   /build-check          # Verify clean build
   /seo-check            # Final SEO review
   /visual-check         # Final visual check
   /optimize             # Comprehensive audit
   /commit-and-push      # Stage, commit, and push to GitHub
   ```

### Running with `/clear`
For long dev sessions, use `/clear` between tasks to reset Claude's context. This prevents old information from influencing new work and keeps Claude focused.

## What NOT to Do
- Do NOT add npm/package.json — this is a pure Zola project
- Do NOT create separate CSS files — all styles go in templates/base.html <style> block
- Do NOT use Tailwind, Bootstrap or any CSS framework
- Do NOT modify files in public/ — this is build output
- Always run `zola build` to verify changes compile before marking done

## License

CC BY SA — attribution required, derivatives must share under same license.