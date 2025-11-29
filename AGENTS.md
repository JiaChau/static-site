# Repository Guidelines

## Project Structure & Module Organization
- `index.html` holds the single-page layout; keep sections semantic (`header`, `main`, `footer`) and add new content inside those blocks.
- `styles.css` contains all styling; extend the existing palette (blue/purple gradient, light background) and keep related rules grouped together.
- `script.js` is for light client-side behavior; keep logic inside `DOMContentLoaded` and tuck helpers near their usage to avoid globals.
- Add static assets under an `assets/` folder and reference them with relative paths.

## Local Run & Build Commands
- Build-free static site. From the repo root, preview locally with `python3 -m http.server 8000` and open `http://localhost:8000`.
- Run `git status` before committing to ensure only intended files are staged.

## Coding Style & Naming Conventions
- Indent with 2 spaces in HTML, CSS, and JS; keep lines roughly under 100 characters.
- HTML: lower-case elements, meaningful headings, and kebab-case class names (e.g., `site-header`, `content`).
- CSS: prefer hyphenated class selectors, reuse existing spacing rhythm (1.5rem–3rem blocks), and keep gradients consistent unless intentionally redesigned.
- JS: prefer `const`/`let`, arrow functions for callbacks, early returns, and minimal console noise. Keep vanilla JS (no frameworks) unless discussed first.

## Testing Guidelines
- Manual pass for each change: load the page, confirm hero gradient renders, footer text reads correctly, and the console shows no errors.
- Basic accessibility checks: tab through interactive elements, ensure headings remain in order, and verify text contrast against the light background.
- If adding images or fonts, confirm they load from `assets/` without mixed-content warnings when served over HTTPS.

## Commit & Pull Request Guidelines
- Commit messages: imperative mood, short scope-first phrasing when helpful (e.g., `Add CTA link`, `Tidy layout spacing`).
- Pull requests should include: a brief summary, linked issue (if any), screenshots or GIFs for visual changes, and a short note on how you tested locally.
- Keep PRs small and focused; prefer separate PRs for content, styling, and script changes.

## Publishing & Hosting Notes
- For GitHub Pages, serve from the repository root: push to `main`, then enable Pages in repository settings pointing to that branch.
- After publishing, verify assets load via the hosted URL and the console stays clean in both desktop and mobile browsers.
