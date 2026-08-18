# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bodhya is a static website built with **Zola** (Rust-based SSG, v0.22.1 — pinned in `netlify.toml`, and the version to build against locally), deployed on Netlify at bodhya.net. Its purpose is creating tech opportunities for Bihar students.

The site was fully redesigned in August 2026 into a **printed-document system**: hairline rules instead of cards, hard corners everywhere, numbered sections (`No. 01`…), and a three-family type system. The handoff that specifies it lives in `_design/design_handoff_bodhya_site/` (gitignored, local only) — its `README.md` is the document of record for colours, sizes, and per-page layouts, and the `design/*.dc.html` files are visual references, not code to copy.

The site previously offered NPO consulting; that page was retired. The blog post `content/blog/bodhya-for-npos.md` still discusses "Bodhya Consulting" as published history — leave it unless asked to retract it.

## Common Commands

```bash
brew install zola     # macOS install
zola serve            # live reload at http://localhost:1111
zola build            # production build → public/
```

Zola is the only build tool. There is no package.json, Makefile, linter, or test suite — "verifying a change" means `zola build` succeeds and the page looks right in the browser.

A clean build reports `11 pages (0 orphan) and 1 sections`. If you ever see an orphan warning, a page has been added under a subdirectory that has no `_index.md` — either add one or move the file up to `content/`.

**`zola serve` does not always pick up new templates or frontmatter that points at a new template.** If a page renders with the old layout after such a change, restart the server rather than debugging the template.

## Architecture

### One stylesheet, compiled from `sass/`

All styling lives in `sass/`, compiled by Zola (`compile_sass = true`) to `/main.css` and linked once from `base.html`. Templates and content files carry **no `<style>` blocks and no inline styles**. (Before the redesign, styling was split between a giant `<style>` block in `base.html` and self-styled `.md` documents; that is gone. Don't reintroduce it.)

```
sass/main.scss        entry point — @imports the partials in cascade order
    _tokens.scss      colours, type, measures, breakpoints, mixins (no output)
    _base.scss        reset, page ground, type roles, bands, buttons
    _chrome.scss      utility bar, masthead, mobile menu, footer
    _components.scss  blocks used on more than one page + `.prose` fallback
    _home.scss  _about.scss  _join.scss  _partners.scss
    _blog.scss  _contact.scss  _doc.scss  _error.scss
```

Page partials are imported last so a page can override a shared block without fighting specificity. Tokens are Sass variables, not CSS custom properties — `$ink`, `$cream`, `$terracotta`, `$teal`, `$mustard`, `$rule`, `$display`, `$serif`, `$mono`, `$sans`. Change a colour in `_tokens.scss` and it changes everywhere.

Partials use `@import`, not `@use` — Zola compiles with grass, and `@import` is what it handles reliably.

### Design rules that are load-bearing

- **No border radius, no box shadows.** The single exception is the mobile nav panel's hard offset block, `6px 6px 0 rgba(22,86,79,0.24)`.
- **A hairline is `1px solid $rule`** and it is the only divider in the system.
- **Grid cells are divided by `border-right`, never `gap`**, with asymmetric padding (padding-right on the left cell, padding-left on the right) so the rule sits centred in the gutter. Use the `hairline-grid()` / `hairline-grid-dark()` mixins — they place rules by column position (`nth-child`), so they are correct for grids of any number of rows, and they add the row rules too.
- **Two contrast rules from an accessibility audit, both encoded in CSS so pages can't get them wrong:** terracotta `#AD544B` fails AA on the tint band, so `.band--tint` steps its accents down to `$terracotta-dark`; mustard `#E8B84B` fails on any light ground and appears **only** on teal or ink.
- Three breakpoints, and no others: **900px** (grids collapse to one column, vertical rules become horizontal), **860px** (desktop nav → mobile menu), **620px** (h1 clamps retune, homepage ledger to one column).
- Section numbers are `No. 0X` in mono teal, then an 84px hairline, then the title on the **next line** — `.marker` and `.section-head`.

### Templates

Tera (Jinja2-like) with block inheritance from `base.html`:

- `base.html` — the whole shell: utility bar (teal, "Est. January 2026", Donate), masthead (logo + nav + mobile menu), footer (three columns over a policy/social row). ~90 lines, no CSS.
- `index.html` — homepage. The visible copy lives **here in the template**, not in `content/_index.md` (whose body is unused because it sets `template = "index.html"`). Includes the hero logo animation.
- `page.html` — two branches: `extra.hide_title` pages are emitted bare because they carry their own full-bleed layout; anything else gets `.prose-page` + `.prose`, the styled fallback for a plain markdown page.
- `policy.html` — shared by the four legal documents. Renders the hero, the sticky sidebar switcher, `page.title` as the document title, `page.extra.updated` beneath it, and the markdown body into `.doc-body`. The hero's "The fine print." is a `<p>`, not a heading: all four documents share it, so the `<h1>` is the document's own title and the markdown `##` sections sit correctly beneath it.
- `blog.html` / `blog-post.html` — numbered hairline archive, and the article with a sticky contents rail generated from the post's `h2`s via `page.toc`.
- `taxonomy_list.html` / `taxonomy_single.html` — `/tags` and `/tags/<tag>`. Required: without them, any page with `[taxonomies]` fails the build.
- `404.html` — keeps the Mithila art, restyled in the design vocabulary.

**Zola 0.22 exposes a page's neighbours as `page.higher`/`page.lower`, not the `page.earlier`/`page.later` you'll find in older docs and examples.** In a `sort_by = "date"` section, `page.lower` is the *newer* neighbour — that's what `blog-post.html` uses for its "Next post" row. The old names silently evaluate to nothing.

Tera has no nested-array or object literals; a list of link/label pairs has to be written out (see `policy_docs` in `macros.html`) rather than looped over a literal.

### Nav lives in one macro file

`templates/macros.html` is the single source of truth for every link list:

- `primary_links(current)` — masthead: About · Partners · Events · **Join Us** button. Deliberately **no** Join text link (the button carries it) and **no** Donate (that lives in the utility bar).
- `mobile_links(current)` — calls `primary_links` and appends Donate.
- `footer_links()` — the footer's Site column: About, Join, Partners, Events, Blog.
- `policy_docs(current)` — the policy sidebar's four documents, spelled out in full.

Each takes `current` (from `current_path`) and marks the active item with `is-active`. "Events" is an external link to `https://fossunited.org/c/bihar` — there is no local events page.

### Mobile menu

860px breakpoint. The desktop nav hides and a "Menu" button opens a native `<dialog>` via `showModal()`. `static/mobile-menu.js` (the only JS on the site) opens, closes, dismisses on outside click, and — because a modal dialog is positioned against the viewport, not its parent — measures the masthead at open time to hang the panel beneath it.

### Logo animation

Homepage hero only. `static/bodhya-mark.svg` is inlined in `index.html` so its five paths can be revealed in three stages by SVG `<mask>` rects animating `scaleX(0) → scaleX(1)`. Timings live in `.mark-wipe--1/2/3` in `_home.scss`. There are **no fades and no movement** — opacity stays 1 and nothing translates. The `prefers-reduced-motion` fallback is required.

### Accessibility

The site passes axe-core 4.10 with **zero violations** across every page, at
WCAG 2.0/2.1/2.2 A and AA plus axe's best-practice rules. Keep it that way — the
conventions that get it there are easy to break:

- `base.html` wraps the content block in `<main id="main-content">`, and a
  `.skip-link` is the first focusable element on the page. Nothing else may use
  `<main>` — a second one is a violation, which is why `page.html`'s prose
  branch is a `<div>`.
- The utility bar sits **inside** `<header>`; content outside every landmark is
  a violation.
- Decorative glyphs — `→ ← ↗ ×` and the CSS list markers — are hidden from
  assistive tech, either as `<span aria-hidden="true">` or, for generated
  content, by declaring `content` twice (`content: '—'; content: '—' / '';`)
  so older browsers keep the marker and newer ones give it an empty name.
- Focus is a 2px outline with 3px offset, teal on light grounds and cream on
  dark ones (`:focus-visible` in `_base.scss`). Never remove it.
- Small non-inline links use the `hit-area()` mixin, which grows the pointer
  target to the WCAG 2.5.8 minimum of 24px with an invisible `::after` and no
  visual change. Body-copy links are exempt (they're inline in a sentence).
- `<aside>` is not used inside `<main>`; the contents rail and policy switcher
  are `<div>`s holding a labelled `<nav>`.
- The mobile menu's trigger carries `aria-haspopup`/`aria-controls` and an
  `aria-expanded` that `mobile-menu.js` resets on the dialog's `close` event,
  so Escape and backdrop clicks stay in sync.
- Non-English text is marked with `lang` (e.g. the 404's Hindi line).

Note that axe's **AAA** contrast rule does fail: the palette was tuned to AA by
the design audit and cannot reach 7:1. That is expected, not a regression.

### Metadata

`base.html` computes all of it once, so pages rarely need to do anything:

- **Title** comes from the `page_title()` macro in `macros.html`, shared by
  `<title>`, `og:title` and `twitter:title` so they can't drift. It leaves a
  title that already says "Bodhya" alone, appends `— Bodhya` to everything
  else, and gives the homepage the full brand line. Override `{% block title %}`
  only where there is no page/section/term title to work from (404, `/tags`).
- **Description** falls back `page.description` → `section.description` →
  `config.description`. Give every new page its own.
- Canonical URL, Open Graph, Twitter card, and `theme-color` are all emitted
  from `canonical` / `description` / `social_image`. URLs are piped through
  `| safe` because Tera would otherwise escape every `/` as `&#x2F;`.
- The social image is `static/bodhya-og.png` (1200×630). It was built by
  rendering an HTML card in the design language and screenshotting it, not by
  hand — regenerate it the same way if the tagline changes.
- The homepage carries an `Organization` JSON-LD block via `{% block head_extra %}`.

A child template's top-level `{% set %}` is **not** visible to `base.html` —
Tera does not pass it up through inheritance. Use a block or a macro.

### Content

Markdown in `content/` with **TOML** frontmatter (`+++` delimiters, not YAML). Pages use explicit `path` frontmatter; the existing files are inconsistent about the leading slash (`path = "/about"` vs `path = "privacy-policy"`) — both work.

Three kinds of content file:

1. **Designed pages** — `about.md`, `join.md`, `partners.md`, `contact.md`, `branding.md`. These are full HTML layouts embedded in a `.md` file, using classes from `sass/`, with `[extra] hide_title = true`. **Never leave a blank line inside the HTML body**: a blank line closes the CommonMark HTML block, and the following indented `<div>` is then parsed as an indented code block, so the rest of the page renders as visible source text. Write them as one unbroken run of markup.
2. **Policy documents** — `privacy-policy.md`, `terms-of-service.md`, `refund-policy.md`, `code-of-conduct.md`. Plain markdown with `template = "policy.html"` and `[extra] updated = "Last updated: …"`. Markdown `##` renders as the in-document section head (hairline above); the `---` separators in the source are hidden by CSS because those hairlines already divide the document. To inset a note, wrap it in `<div class="doc-callout">` (or `doc-callout--report` for reporting contacts) **with blank lines around the markdown inside** — the opposite of rule 1, and required here so the body still parses as markdown.
3. **Blog posts** — `content/blog/`, needing `date` and `description`. Tags must go under a `[taxonomies]` table; a bare top-level `tags = [...]` is silently ignored by Zola and produces no tag pages.

Legal pages name **Vishal Arya** as operator/Data Fiduciary and are written to India's DPDPA 2023. Don't casually reword the legal substance.

### Static assets

`static/` is copied to the site root, so `static/bodhya-brown.svg` is referenced as `/bodhya-brown.svg`. In use: `bodhya-brown.svg` (wordmark, 42px in the masthead and 26px inverted in the footer), `bodhya-mark.svg` (hero animation), `bodhyafavi.svg`, `fossunited-logo.svg`, `samagata-logo.svg`, `hikmat-logo.webp`, `bodhya_404_mithila_art.svg`. The other files in `static/` are left over from the pre-redesign pages and are no longer referenced.

`static/brand/` is the press kit served at `/brand/…` and listed on `/branding`:
the wordmark and the icon, each in terracotta, ink, and cream, as SVG plus a
transparent PNG (wordmark 1200px, icon 900px). The colour variants are made by
substituting the fill in the source SVG; the PNGs were rasterised through a
canvas (which starts transparent) rather than by a converter, since none is
installed. If the mark ever changes, regenerate all twelve.

`static/bodhya-og.png` is the social card. Everything else in `static/` that
isn't listed above is left over from the pre-redesign pages.

There is no external stylesheet and no `.scss` file outside `sass/`.

### External runtime dependencies

Google Fonts only, from `base.html` `<head>` (with preconnects). Six families:

| Family | Script | Role |
| --- | --- | --- |
| Archivo Black | Latin | display — headlines, buttons, numerals |
| Newsreader | Latin | all body copy |
| Space Mono | Latin | labels, eyebrows, nav, metadata |
| Archivo | Latin | only `<strong>` inside serif copy |
| Rozha One | Devanagari | Hindi display |
| Mukta | Devanagari | all other Hindi text |

None of the Latin faces carry Devanagari, so anything marked `lang="hi"` is
switched to the Hindi pair by the `:lang(hi)` rules in `_base.scss` (which also
add the extra leading Devanagari needs on whole blocks). A rule on the element
itself beats the family it would inherit, so this works for one Hindi word
inside an English sentence. Both Hindi faces are open-licensed and ship with
Figma, Canva and Inkscape, so print and social work can use the same type as
the site. Google serves the Devanagari subsets only to pages that use them.

Funnel Display and Font Awesome were both dropped in the redesign — the
footer's social links are text now. No bundler, no local font copies.

## Deployment

Netlify builds from `main` with `zola build` → `public/`. There are **no GitHub Actions workflows** in this repo (`.github/` does not exist). `.gitignore` excludes `public/`, `.DS_Store`, `.claude/settings.local.json`, root-level `*.png` (screenshots), `.playwright-mcp/`, and `_design/`.

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
- Do NOT add `<style>` blocks or inline `style=` attributes to templates or content — all CSS goes in `sass/`
- Do NOT add rounded corners, blurred shadows, or a fourth breakpoint
- Do NOT add a second `<main>`, remove the skip link, or strip `:focus-visible`
- Do NOT leave a new decorative glyph readable by screen readers
- Do NOT edit `public/` — build output
- Do NOT hand-edit nav in `base.html` — change `templates/macros.html` instead
- Always run `zola build` before marking work done

## License

CC BY-SA — attribution required, derivatives must share under the same license.
