# Aviva Bulow Mehlow — Portfolio

Live site: https://aviva-bulow.github.io/Aviva-Mehlow/

My personal portfolio site: a single-page site covering background, work
experience, skills, and projects, plus a contact form.

## Tech stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Contact form built on a custom `useContactForm` hook (validation +
  submission state), delivering messages via [Formspree](https://formspree.io/)
- Deployed to [GitHub Pages](https://pages.github.com/) via GitHub Actions on
  every push to `main`

## Running locally

```bash
npm install
npm run dev
```

To enable the contact form locally, copy `.env.example` to `.env` and fill in
a Formspree endpoint:

```bash
cp .env.example .env
```

## Building

```bash
npm run build   # type-checks and builds to dist/
npm run preview # serve the production build locally
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. The workflow reads the Formspree
endpoint from the `VITE_FORMSPREE_ENDPOINT` repository secret.
