# Jirat Nimsombun — Personal Website

A minimal, single-column personal website for Jirat Nimsombun (`jarett / aomsin / aom`). It presents education, selected experience, engineering projects, leadership, a résumé, and direct contact links.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export for GitHub Pages

## Local development

This repository is already cloned at:

```text
/Users/aomnim/Documents/ChatGPT/personal-website
```

Open that same folder in Codex Desktop or VS Code. Both applications will work with the same files and Git branches.

Install dependencies and start the local site:

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

`pnpm build` produces the deployable static site in `out/`.

## Branches

- `main` — current production website
- `codex/archive-original-site-2026-10-15` — preserved original website
- `codex/site-redesign` — new Next.js redesign

The original site remains recoverable from the archive branch after the redesign is deployed to `main`.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy-pages.yml` is configured to:

1. Install the locked pnpm dependencies.
2. Run lint, type checking, and the production build.
3. Upload the `out/` static export.
4. Deploy it to GitHub Pages.

It deploys only from `main` or when manually started. Pushing the redesign branch does not replace the live site.

Before the first Next.js deployment, open **Repository Settings → Pages** and set the publishing source to **GitHub Actions**. Merge into `main` only after final approval.

## Connecting `jiratnim.com` later

Do not configure the domain until it has been purchased and is under your control.

When ready:

1. Verify `jiratnim.com` in your GitHub account’s Pages settings.
2. In this repository, open **Settings → Pages → Custom domain** and enter `jiratnim.com`.
3. At the domain registrar, add GitHub Pages’ current apex-domain DNS records.
4. Add a `www` CNAME record pointing to `aomsin832.github.io`.
5. Wait for GitHub’s DNS check, then enable **Enforce HTTPS**.

Because this site deploys through GitHub Actions, a tracked `CNAME` file is not required. Always follow the current [GitHub Pages custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) when connecting the domain.

## Content updates

The homepage content lives in `app/page.tsx`. Global typography, colors, spacing, and responsive behavior live in `app/globals.css`. Replace `public/Jirat_Nimsombun_CV.pdf` whenever the public résumé changes, keeping the filename stable so the site link continues to work.
