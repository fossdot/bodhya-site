# Commit and Push Command

Commit changes to git and push to GitHub in one go.

## Instructions

This command automates the workflow of staging, committing, and pushing changes to the remote repository.

### Steps

1. **Check git status:**
   - Run `git status` to see what files have changed
   - Display the list of modified/untracked files to the user

2. **Get user confirmation:**
   - Ask the user which files to add (or suggest "all" if appropriate)
   - Show examples:
     - "All changes" → `git add .`
     - "Specific files" → `git add path/to/file1 path/to/file2`

3. **Get commit message:**
   - Ask the user for a clear, descriptive commit message
   - Suggest a format: "feat: description" or "fix: description" or "docs: description"
   - Ensure message is meaningful and follows git conventions

4. **Stage files:**
   - Run `git add` with the specified files
   - Report which files were staged

5. **Commit:**
   - Run `git commit -m "commit message"`
   - Show the commit hash and summary

6. **Push to GitHub:**
   - Run `git push origin main` (or current branch)
   - Report success or any push errors
   - If push fails, suggest fixes (e.g., pull before push)

7. **Final Report:**
   - Show commit details (hash, message, files changed)
   - Confirm push was successful
   - Provide link to view commit on GitHub

## Use This Command When
- You've made changes and want to save them to GitHub
- After running `/build-check` and verifying everything works
- After running `/optimize` and implementing improvements
- Ready to publish a new blog post or page
- Making any code changes that are ready for production

## Example Usage

```
In Claude Code:
/commit-and-push

[Claude shows what files changed]
What would you like to add? (all / specific files): all

What's your commit message?
> fix: improve mobile menu animation timing

[Claude runs git add ., git commit, git push]
✅ Committed: abc1234 "fix: improve mobile menu animation timing"
✅ Pushed to origin/main
📍 View on GitHub: https://github.com/fossdot/bodhya-site/commit/abc1234
```

## Commit Message Tips

- **Features**: `feat: add dark mode toggle`
- **Fixes**: `fix: resolve mobile nav overlap`
- **Docs**: `docs: update README with new commands`
- **Styles**: `style: improve hero section spacing`
- **Content**: `content: add new blog post about Bihar tech`
- **Refactor**: `refactor: simplify CSS in base.html`
- **Performance**: `perf: optimize image loading`

Keep messages under 72 characters for the first line, then add details if needed.

## Safety Checks

Before pushing, verify:
- ✅ Changes are intentional
- ✅ Build passes (`/build-check` ran successfully)
- ✅ No sensitive data in commits (.env, API keys, credentials)
- ✅ Commit message is clear and descriptive
- ✅ Pushing to the correct branch

## What NOT to Commit

❌ `public/` — This is generated output from `zola build`
❌ `.env` or `.env.local` — Never commit secrets
❌ `node_modules/` — Not applicable here (no npm project)
❌ `.git/` — Already ignored
❌ `.DS_Store` (macOS) — Already in `.gitignore`
