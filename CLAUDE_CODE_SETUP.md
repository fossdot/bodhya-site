# Claude Code Setup Guide for Bodhya

This document explains the Claude Code setup for the Bodhya website and how to use it effectively for development.

## What's Been Set Up

### 1. Project Context File (CLAUDE.md)
The `CLAUDE.md` file contains essential information about the Bodhya project that Claude reads automatically:
- Project overview and tech stack (Zola v0.21.0)
- Architecture (templates, content structure, assets)
- Brand guidelines (colors, fonts, mobile breakpoint)
- CSS approach (all embedded in base.html)
- CI/CD setup (GitHub Actions)
- Important "What NOT to Do" constraints

**When does Claude use this?**
Claude reads CLAUDE.md at the start of every session. This prevents common mistakes like suggesting npm packages or Tailwind CSS for a pure Zola project.

### 2. Settings File (.claude/settings.local.json)
Enables Playwright MCP (browser automation) for testing the website visually:
```json
{
  "permissions": {
    "allow": [
      "mcp__playwright__browser_navigate",
      "Bash(sleep 2 && open http://localhost:1111)",
      "mcp__playwright"
    ]
  }
}
```

**What this enables:**
- Taking screenshots at different viewport sizes
- Testing responsive design (desktop, tablet, mobile)
- Verifying visual changes before committing
- Automated browser testing

### 3. Slash Commands (.claude/commands/)
Pre-defined prompts that Claude executes with `/command-name` syntax:

#### `/optimize` (Main Command)
Comprehensive audit covering:
- **Code Quality:** Template syntax, CSS redundancy, unused assets
- **Setup:** Configuration validation, build verification
- **Performance & UX:** Playwright screenshots at 3 viewport sizes, accessibility checks, load performance
- **Interface & Design:** Brand consistency, visual hierarchy, spacing, interactive elements

**Use before:** Major commits, production deployments

**Example:**
```
In Claude Code terminal:
/optimize

Claude will:
1. Run `zola build` to check for errors
2. Use Playwright to take screenshots at desktop/tablet/mobile
3. Check color contrast and semantic HTML
4. Report issues grouped by priority (Critical/Important/Nice to Have)
```

#### `/visual-check`
Quick visual verification across viewport sizes:
- Desktop (1920px)
- Tablet (768px)
- Mobile (375px)

**Use:** After CSS changes, before pushing

#### `/build-check`
Verify the site compiles successfully:
- Runs `zola build`
- Reports warnings and errors
- Confirms no broken templates

**Use:** Before every commit

#### `/new-content`
Create pages or blog posts with proper TOML frontmatter:
- Handles file naming (slugs)
- Adds required metadata
- Verifies structure

**Example:**
```
In Claude Code:
/new-content
[Claude asks for title, description, content, tags]
[Creates file in correct location with proper formatting]
[Runs verification]
```

#### `/seo-check`
Search engine optimization audit:
- Frontmatter validation (titles, descriptions)
- Heading hierarchy
- Internal linking
- Sitemap and RSS feed verification
- Open Graph meta tags

**Use:** Before publishing content

#### `/build-check`
Already mentioned above — verify compilation

---

## Typical Development Workflows

### Adding a New Blog Post
```
1. /new-content              # Create post with proper format
2. /build-check              # Verify it compiles
3. /visual-check             # See how it looks
4. /seo-check                # Optimize for search
```

### Making CSS or Template Changes
```
1. [Edit templates/base.html]
2. /build-check              # Verify no syntax errors
3. /visual-check             # Check appearance at all sizes
4. /optimize                 # Final comprehensive review before commit
```

### Before Production Deployment
```
1. /build-check              # Clean build
2. /seo-check                # All content optimized
3. /visual-check             # Final appearance check
4. /optimize                 # Comprehensive audit
5. [Commit and push]
```

### Quick Debugging
```
1. /visual-check             # See what's wrong visually
2. [Find and fix issue]
3. /build-check              # Verify fix works
```

---

## How to Use These in Claude Code

### Starting a Session
1. Open VS Code terminal
2. Run: `claude` (this opens Claude Code session)
3. You'll see Claude is ready with CLAUDE.md context loaded

### Running a Command
In the Claude Code terminal, simply type:
```
/optimize
```

Claude will read the `.claude/commands/optimize.md` file and execute the steps defined there.

### What Happens
- Claude reads the `.md` file for that command
- Follows all the steps defined in it
- Uses Playwright to take screenshots when needed
- Runs Zola commands to build/verify
- Provides a detailed report with findings

### Tips

**Use `/clear` between unrelated tasks:**
```
/clear                       # Resets Claude's context
                            # Now you can work on something completely different
```

**Be specific in your requests:**
❌ "Make the site look better"
✅ "Improve the hero section's visual hierarchy"

**Check the output of `/build-check` carefully:**
Any warnings from Zola should be addressed before committing.

---

## File Structure

```
bodhya-site/
├── CLAUDE.md                     # Project context
├── CLAUDE_CODE_SETUP.md          # This file
├── .claude/
│   ├── settings.local.json       # Playwright permissions
│   └── commands/
│       ├── README.md
│       ├── optimize.md           # Comprehensive audit
│       ├── visual-check.md       # Screenshots
│       ├── build-check.md        # Build verification
│       ├── new-content.md        # Create pages/posts
│       └── seo-check.md          # SEO audit
├── templates/
│   └── base.html                 # Master layout (all CSS here)
├── content/
│   ├── _index.md                 # Homepage
│   ├── *.md                      # Pages
│   └── blog/
│       └── *.md                  # Blog posts
└── static/                       # Images, SVGs, JS
```

---

## Important Constraints (Don't Break These!)

These are baked into CLAUDE.md and Claude will avoid them:

❌ **No npm/package.json** — This is a pure Zola project
❌ **No separate CSS files** — All styles in templates/base.html `<style>` block
❌ **No Tailwind/Bootstrap** — Custom CSS only
❌ **No modifications to public/** — That's generated output
✅ **Always run `zola build`** — Before committing

---

## GitHub Actions Integration

Two workflows are already set up in `.github/workflows/`:

### `claude.yml` (PR Assistant)
When you mention `@claude` in an issue or PR, Claude Code automatically helps:
```
@claude please review this change
```

### `claude-code-review.yml` (Auto Review)
Every PR automatically gets a Claude code review checking:
- Code quality
- Best practices
- Potential issues
- Suggestions for improvement

Both require `ANTHROPIC_API_KEY` set in your GitHub repository secrets.

---

## Troubleshooting

### "zola serve" not working
```bash
# Install Zola first
brew install zola

# Then try again
zola serve
```

### Playwright won't take screenshots
- Make sure `zola serve` is running at http://localhost:1111
- Check that permissions in `.claude/settings.local.json` are correct

### Build errors
- Run `/build-check` to see the specific error
- Check CLAUDE.md "What NOT to Do" section
- Verify TOML frontmatter in markdown files

### Commands not recognized
- Make sure you're in a Claude Code session (type `claude` in terminal)
- Check that `.claude/commands/` contains the `.md` files
- Commands use forward slash: `/optimize` (not `claude optimize`)

---

## Next Steps

1. **Run your first audit:**
   ```
   claude
   /optimize
   ```

2. **Review the findings** and implement any quick wins

3. **Try each command** to understand what they do:
   ```
   /build-check
   /visual-check
   /seo-check
   ```

4. **Use them in your workflow** — they'll become second nature

5. **Iterate:** Each time you make changes, use these commands to verify quality

---

## Pro Tips

🚀 **Before major changes:**
- Screenshot the current state with `/visual-check`
- Make your changes
- Screenshot again with `/visual-check`
- Compare before/after

📊 **Track improvements:**
- Keep a log of `/optimize` reports to see how your site improves over time
- Address one section at a time (code quality → performance → design)

🔍 **During development:**
- Run `/build-check` frequently (every few changes)
- Use `/visual-check` after CSS edits
- Run `/optimize` before committing

🎯 **For content creators:**
- Always use `/new-content` for new blog posts (ensures consistent formatting)
- Run `/seo-check` before publishing
- Use `/optimize` for final review

---

## Questions?

Reference this guide and CLAUDE.md whenever you need help. Both files contain everything you need to use Claude Code effectively for Bodhya development.

Happy coding! 🚀
