---
name: dependency-upgrades
description: Update project dependencies, including Astro, its integrations, and Tailwind, while managing compatibility and major-version migrations.
---

# Dependency upgrades

- Check current Node.js and package engine requirements before upgrading Astro or its integrations; update the documented/runtime versions used by local development, CI, and deployment when needed.
- Upgrade Astro and its official integrations as a compatible set. Review the relevant official migration guides and release notes for major-version changes before editing.
- Treat a Tailwind major-version migration as its own change, separate from the Astro upgrade. Verify the Astro integration, Vite configuration, Tailwind configuration, plugins, and styles together.
- Keep major upgrades isolated and reviewable; avoid combining unrelated dependency updates. Update the lockfile with npm and verify the production build.
- In the pull request summary, state the important breaking changes considered, files/configuration changed, commands run, and any remaining manual checks (including a deployed or local preview when relevant).
