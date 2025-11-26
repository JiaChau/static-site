## My Git Website

This is a minimal static website ready to be tracked with Git and hosted on a service like GitHub Pages.

### Files

- `index.html` – main page
- `styles.css` – basic styling
- `script.js` – placeholder JavaScript

### How to put this on Git

1. Initialize a repository in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   ```
2. Create an empty repo on your Git host (e.g., GitHub).
3. Add the remote and push:
   ```bash
   git remote add origin https://YOUR-GIT-HOST/YOUR-USER/YOUR-REPO.git
   git branch -M main
   git push -u origin main
   ```

To host on GitHub Pages, enable Pages in your repository settings and choose the `main` branch (often `/root` or `/docs` folder depending on the option you prefer).

