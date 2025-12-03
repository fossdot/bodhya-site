# Bodhya Website

Building tech opportunities for Bihar students. This is the source code for [bodhya.net](https://bodhya.net).

## Tech Stack

- **Static Site Generator:** [Zola](https://www.getzola.org/) (Rust-based, lightning-fast)
- **Styling:** Custom minimal CSS (no frameworks)
- **Hosting:** [Netlify](https://netlify.com) (free tier)
- **Version Control:** Git + GitHub

## Quick Start

### Prerequisites

- **Linux/macOS:** Homebrew or package manager
- **Windows:** WSL2 recommended
- **Git:** [Install here](https://git-scm.com/)

### Installation

1. **Install Zola:**
   ```bash
   # Linux (Ubuntu/Debian)
   sudo snap install --classic zola
   
   # macOS
   brew install zola
   
   # All platforms (via Cargo)
   cargo install --locked zola
   
   # Verify
   zola --version
   ```

2. **Clone and run:**
   ```bash
   git clone https://github.com/fossdot/bodhya-site.git
   cd bodhya-site
   zola serve
   ```

Visit `http://localhost:1111` – auto-reloads on changes!

## Project Structure

```
bodhya-site/
├── config.toml           # Site configuration
├── content/              # Markdown pages
├── static/               # Images, fonts, assets
├── templates/            # HTML templates
├── sass/                 # Stylesheets
└── README.md            # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

## Resources

- [Zola Docs](https://www.getzola.org/documentation/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Git Basics](https://github.com/git-tips/tips)
- [Netlify Docs](https://docs.netlify.com/)

## Questions or Ideas?

Reach out through any of these:

- **Email:** [iamvishalarya@gmail.com](mailto:iamvishalarya@gmail.com)
- **GitHub Issues:** [Open an issue](https://github.com/fossdot/bodhya-site/issues)
- **GitHub Discussions:** [Join the discussion](https://github.com/fossdot/bodhya-site/discussions)

---

**Built with ❤️ for Bihar’s students**

Want to contribute? We’d love to have you! Start with this README and reach out if you have questions. 🚀
