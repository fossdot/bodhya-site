# Bodhya Website

Building tech opportunities for Bihar students. This is the source code for [bodhya.net](https://bodhya.net).


## Tech Stack

- **Static Site Generator:** [Zola](https://www.getzola.org/) (Rust-based, lightning-fast)
- **Styling:** Custom minimal CSS (no frameworks)
- **Hosting:** [Netlify](https://netlify.com) (free tier)
- **Version Control:** Git + GitHub

---

## Getting Started (Local Development)

Follow these steps to run Bodhya locally and contribute:

### Prerequisites

- **Linux/macOS:** Homebrew or package manager
- **Windows:** WSL2 recommended
- **Git:** [Install here](https://git-scm.com/)

### Step 1: Install Zola

**On Linux (Ubuntu/Debian):**
```bash
sudo snap install --classic zola
```

**On macOS (using Homebrew):**
```bash
brew install zola
```

**Or using Cargo (all platforms):**
```bash
cargo install --locked zola
```

**Verify installation:**
```bash
zola --version
```

### Step 2: Clone the Repository

```bash
git clone https://github.com/fossdot/bodhya-site.git
cd bodhya-site
```

### Step 3: Start Local Server

```bash
zola serve
```

Your site will be available at **http://localhost:1111** 🎉

The page will auto-reload whenever you make changes—no manual refresh needed!

---

## Project Structure

```
bodhya-site/
├── config.toml              # Site configuration (title, base URL, theme settings)
├── content/                 # All page content in Markdown
│   ├── _index.md           # Homepage
│   ├── about.md            # About page
│   ├── get-involved.md     # Get involved page
│   └── blog/               # (Future) Blog posts go here
├── templates/              # HTML templates (Jinja2 syntax)
│   ├── base.html           # Base template (header, nav, footer)
│   ├── index.html          # Homepage template
│   ├── page.html           # Regular page template
│   └── 404.html            # 404 error page
├── static/                 # Static assets (CSS, images, fonts)
│   └── style.css           # (Optional) Additional CSS
├── public/                 # Generated HTML (don't edit—auto-generated)
├── netlify.toml            # Netlify deployment config
└── README.md               # This file!
```

---

## How to Contribute

### 1. **Edit Existing Pages**

Pages are written in **Markdown** (`.md` files) in the `content/` folder.

**Example: Update the About page**

1. Open `content/about.md` in your editor
2. Make your changes
3. Save and check `http://localhost:1111/about` to preview
4. Commit and push:
   ```bash
   git add content/about.md
   git commit -m "Update About page with new team members"
   git push
   ```

### 2. **Add a New Page**

1. Create a new file in `content/`, e.g., `content/blog.md`
2. Add frontmatter (metadata) at the top:
   ```markdown
   +++
   title = "Blog"
   path = "/blog"
   +++

   # Welcome to Our Blog

   This is the blog section of Bodhya...
   ```
3. Save and view at `http://localhost:1111/blog`
4. Commit and push

### 3. **Add a Blog Post** (Future)

1. Create a folder: `content/blog/`
2. Add your post: `content/blog/my-first-post.md`
3. Use frontmatter:
   ```markdown
   +++
   title = "My First Blog Post"
   date = 2025-11-28
   tags = ["foss", "bihar"]
   +++

   # My First Blog Post

   Content goes here...
   ```

### 4. **Customize Styling**

Styling is in `templates/base.html` (inside the `<style>` tag). To modify colors, fonts, or layout:

1. Open `templates/base.html`
2. Find the `<style>` section
3. Update CSS variables:
   ```css
   /* Change header color */
   header {
       background: #your-color;
   }
   ```
4. Save and refresh `localhost:1111`

### 5. **Upload Images**

1. Create a `static/images/` folder (if it doesn't exist)
2. Add your image: `static/images/bodhya-logo.png`
3. Reference in Markdown:
   ```markdown
   ![Alt text](/images/bodhya-logo.png)
   ```

---

## Contribution Workflow (Pull Request)

### For First-Time Contributors

1. **Fork the repository** (top-right button on GitHub)

2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/bodhya-site.git
   cd bodhya-site
   ```

3. **Create a new branch** (give it a descriptive name):
   ```bash
   git checkout -b fix/typo-in-about-page
   # or
   git checkout -b feature/add-team-section
   ```

4. **Make your changes** (edit `.md` or `.html` files)

5. **Test locally:**
   ```bash
   zola serve
   ```
   Visit `http://localhost:1111` and verify everything looks good.

6. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Fix typo in About page"
   ```

7. **Push to your fork:**
   ```bash
   git push origin fix/typo-in-about-page
   ```

8. **Create a Pull Request (PR):**
   - Go to `https://github.com/fossdot/bodhya-site`
   - Click **"Compare & pull request"**
   - Add a title and description of your changes
   - Click **"Create pull request"**

9. **Wait for review** ✨
   - Maintainers will review your PR
   - Make any requested changes
   - Once approved, your changes will be merged and deployed!

---

## Common Tasks

### Update Navigation Links

Edit `templates/base.html` → Find the `<nav>` section:
```html
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/get-involved">Get Involved</a>
</nav>
```

### Add a New Section to Homepage

Edit `content/_index.md` → Add Markdown content.

### Change Site Title or Description

Edit `config.toml`:
```toml
title = "Bodhya - New Title"
description = "New description here"
```

### Preview Changes Before Pushing

Always run `zola serve` and check `http://localhost:1111` before committing.

---

## Deployment

**Automatic deployment:** Every time you push to `main`, Netlify automatically:
1. Installs Zola (version specified in `netlify.toml`)
2. Runs `zola build`
3. Deploys to [bodhya.net](https://bodhya.net) 🚀

No manual steps needed after pushing!

---

## Markdown Cheat Sheet

For editing content in Markdown:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point
- Another point

1. Numbered list
2. Second item

[Link text](https://example.com)

![Image alt text](/path/to/image.png)

---
(Horizontal divider)

> Blockquote or highlight
```

---

## Troubleshooting

### "zola: command not found"
You haven't installed Zola yet. Run:
```bash
brew install zola  # macOS
# or
sudo snap install --classic zola  # Linux
```

### "Port 1111 is already in use"
Another process is using the port. Try:
```bash
zola serve --port 1112
```

### Changes not showing up locally
1. Make sure `zola serve` is running
2. Hard refresh your browser: `Cmd+Shift+R` (macOS) or `Ctrl+Shift+R` (Windows/Linux)
3. Check the terminal for build errors

### Git push rejected
Your branch is behind the remote. Pull first:
```bash
git pull origin main
git push origin your-branch-name
```

---

## Resources

- **Zola Docs:** [getzola.org/documentation](https://www.getzola.org/documentation/)
- **Markdown Guide:** [markdownguide.org](https://www.markdownguide.org/)
- **Git Basics:** [github.com/git-tips/tips](https://github.com/git-tips/tips)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com/)

---

## Questions or Ideas?

Have a question or want to suggest a feature?

- **Email:** [iamvishalarya@gmail.com](mailto:iamvishalarya@gmail.com)
- **Open an Issue:** [GitHub Issues](https://github.com/fossdot/bodhya-site/issues)
- **Join the Discussion:** [GitHub Discussions](https://github.com/fossdot/bodhya-site/discussions)

---


**Built with ❤️ for Bihar's students**

Want to contribute? We'd love to have you! Start with this README and reach out if you have questions. 🚀