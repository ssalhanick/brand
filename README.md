# scottsalhanick.com

Personal brand and portfolio website for Scott Salhanick. Built with React and TypeScript, bundled with Vite, and deployed to InMotion Hosting via a GitHub Actions CI/CD pipeline on push to the `production` branch.

---

## Tech Stack

- **React 18** with TypeScript
- **Vite** for bundling and local development
- **Vanilla CSS** with a custom design token system
- **GitHub Actions** for automated FTP deployment

---

## Getting Started

### Prerequisites

- Node.js 20 or higher ([nodejs.org](https://nodejs.org))
- npm 9 or higher
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:ssalhanick/brand.git
   cd brand
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the local development server at localhost:5173 |
| `npm run build` | Type-check and build the production bundle to `/dist` |
| `npm run preview` | Preview the production build locally at localhost:4173 |
| `npm run lint` | Run ESLint across all `.ts` and `.tsx` files |

---

## Project Structure

```
/
+-- .github/
|   +-- workflows/
|       +-- deploy.yml       GitHub Actions CI/CD workflow
+-- public/
|   +-- .htaccess            Apache SPA routing redirect rule
|   +-- favicon.svg
+-- src/
|   +-- components/          Shared UI components (Nav, Footer)
|   +-- hooks/               Custom React hooks
|   +-- sections/            One file pair per page section
|   +-- App.tsx              Root component, section composition
|   +-- main.tsx             React DOM entry point
|   +-- index.css            Design tokens, reset, global utilities
+-- index.html               HTML shell, SEO meta, font loading
+-- package.json
+-- vite.config.ts
+-- tsconfig.json
```

---

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/deploy.yml`) runs automatically on every push to the `production` branch.

**Workflow steps:**

1. Checkout the repository
2. Set up Node.js 20
3. Install dependencies with `npm ci`
4. Build the project with `npm run build`
5. Deploy the `/dist` output to InMotion Hosting via FTP

**Required GitHub Secrets:**

| Secret | Description |
|---|---|
| `FTP_SERVER` | InMotion FTP hostname |
| `FTP_USERNAME` | cPanel username |
| `FTP_PASSWORD` | cPanel password |

Add secrets at: Repository Settings -> Secrets and variables -> Actions -> New repository secret

---

## Deploying to Production

To trigger a production deploy, push to the `production` branch:

```bash
git checkout production
git merge main
git push origin production
```

GitHub Actions will run the build and deploy automatically. Monitor progress in the repository's Actions tab.

---

## Design System

Design tokens are defined as CSS custom properties in `src/index.css`.

**Color palette:**

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#191919` | Page background |
| `--color-surface` | `#1f1f1f` | Alternate section background |
| `--color-navy` | `#2D4263` | Card backgrounds |
| `--color-accent` | `#C84B31` | CTAs, highlights, links |
| `--color-cream` | `#ECDBBA` | Primary text |
| `--color-muted` | `#a89880` | Secondary text |

**Typography:**

| Token | Font | Use |
|---|---|---|
| `--font-heading` | Inconsolata | All headings (h1-h6), buttons |
| `--font-body` | Spectral | Body copy, paragraphs |

---

## License

All rights reserved. This is a personal portfolio project and is not open for reuse or redistribution.