# Copilot instructions

## Project overview

- This repository is a private npm project for the FireDew Blog, built with Astro.
- Astro integrations currently include MDX, Vue, Tailwind, and sitemap generation. The site URL is configured in `astro.config.mjs`.
- Netlify publishes the `dist` directory and runs `npm run build`.

## Working in this repository

- Use npm and keep `package-lock.json` in sync with `package.json`. Prefer `npm ci` for clean installs; do not introduce another package manager or lockfile.
- Preserve the existing site behavior and conventions. Before changing content or rendering, inspect the related Astro pages, layouts, components, and content collections.
- Keep changes focused. Avoid unrelated formatting or dependency changes.
- There is no test or lint script currently defined in `package.json`. Do not claim those checks ran; do not add tooling unless the task calls for it.
- For changes affecting the site or its dependencies, run `npm ci` and `npm run build` when feasible. Report any checks that could not be run and why.

## Branching

- Create a new branch from `main` for every change; do not make changes directly on `main`.
- Prefix branch names with `feature/` for features, `fix/` for bug fixes, or `chore/` for maintenance and other changes. Follow the prefix with a short descriptive name.
