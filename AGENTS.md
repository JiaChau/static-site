# Repository Guidelines

## Project Structure & Module Organization
- `index.html` hosts the primary experience (hero, showcase, services, links, inline master résumé). Keep sections semantic, maintain the inline PDF embed, and link to the timeline via CTA buttons.
- `timeline.html` is a dedicated scrollable milestone page; keep entries short, stacked, and ready for IDE-edited content.
- `styles.css` contains all styling; build on the dark, glassy Apple-inspired palette (deep charcoal, soft gradients, luminous accents), keep transitions smooth-yet-lightweight, and respect `prefers-reduced-motion` helpers.
- `script.js` stays minimal inside `DOMContentLoaded`, using `data-page` hooks (`home` vs `timeline`) to prep embeds or scroll panels without leaking globals.
- `README.md` remains a visitor-facing overview that explains what the site showcases—not a developer manual.
- Add static assets under an `assets/` folder and reference them with relative paths (e.g., `assets/images/`, `assets/pdfs/master-resume.pdf`).

## Local Run & Build Commands
- Build-free static site. From the repo root, preview locally with `python3 -m http.server 8000` and open `http://localhost:8000`.
- Run `git status` before committing to ensure only intended files are staged.

## Coding Style & Naming Conventions
- Indent with 2 spaces in HTML, CSS, and JS; keep lines roughly under 100 characters.
- HTML: lower-case elements, meaningful headings, and kebab-case class names (e.g., `site-header`, `content`).
- CSS: prefer hyphenated class selectors, reuse the 1.5rem–3rem spacing rhythm, keep gradients consistent, and use lightweight transitions with `prefers-reduced-motion` fallbacks.
- JS: prefer `const`/`let`, arrow functions for callbacks, early returns, and minimal console noise. Keep vanilla JS (no frameworks) unless discussed first.

## Testing Guidelines
- Manual pass for each change: load `index.html`, confirm the hero gradient, inline résumé embed, and footer render correctly; open `timeline.html` and scroll through entries; keep the console clean.
- Basic accessibility checks: tab through interactive elements (including the résumé object fallback), ensure headings remain in order, and verify text contrast against the dark background.
- If adding images or fonts, confirm they load from `assets/` without mixed-content warnings when served over HTTPS.

## Commit & Pull Request Guidelines
- Commit messages: imperative mood, short scope-first phrasing when helpful (e.g., `Add CTA link`, `Tidy layout spacing`).
- Pull requests should include: a brief summary, linked issue (if any), screenshots or GIFs for visual changes, and a short note on how you tested locally.
- Keep PRs small and focused; prefer separate PRs for content, styling, and script changes.

## Publishing & Hosting Notes
- For GitHub Pages, serve from the repository root: push to `main`, then enable Pages in repository settings pointing to that branch.
- After publishing, verify assets load via the hosted URL and the console stays clean in both desktop and mobile browsers.
