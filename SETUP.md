# Setup Guide

This site is a Vite + React + TypeScript + Tailwind project prepared for deployment on GitHub Pages with the custom domain `spncrstphn.dev`.

## Local development

1. Install dependencies with `npm install`.
2. Start the dev server with `npm run dev`.
3. Build a production bundle with `npm run build`.
4. Preview the production build locally with `npm run preview`.

## Project structure

- `src/data/site.ts` contains the core content for the site, including profile text, projects, and contact details.
- `src/pages/` contains the main route pages: home, about, projects, and contact.
- `src/components/` contains the terminal-style layout and animation helpers.
- `public/CNAME` ensures GitHub Pages publishes the custom domain.
- `.github/workflows/deploy.yml` builds and deploys the site through GitHub Actions.

## GitHub Pages deployment

1. Push the repository to GitHub.
2. In the GitHub repo, open `Settings` -> `Pages`.
3. Set the source to `GitHub Actions`.
4. Make sure the default branch is `main` so the included workflow runs on push.
5. After the workflow completes, GitHub Pages will serve the built site using the `CNAME` file.

## Custom domain DNS

Point `spncrstphn.dev` at GitHub Pages by configuring your DNS provider with the records GitHub currently requires for apex domains and any `www` alias you want to use. The exact record values are listed in GitHub's Pages custom domain documentation and should be copied from there when you configure DNS.

## Customizing the content

1. Update `src/data/site.ts` with your real project descriptions, links, contact details, and professional summary.
2. Adjust colors and typography in `tailwind.config.ts` and `src/index.css` if you want to change the terminal theme.
3. Add screenshots or downloadable assets under `public/` if you want richer project cards later.

## Routing note

The app uses `HashRouter` so direct navigation works correctly on GitHub Pages without server-side rewrite support.
