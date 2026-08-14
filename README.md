# Egesa Medical Clinic

Marketing website for Egesa Medical Clinic — a community health facility in Kisii, Kenya. Built as a fast, accessible single-page app with React 19 + Vite.

## Stack

- **React 19** + **TypeScript**
- **Vite 8** (SPA build)
- **Tailwind CSS v4** (with dark mode)
- **React Router 7** — client-side routing
- **react-helmet-async** — per-route SEO meta
- **Lucide React** — icons

## Scripts

```bash
npm run dev      # start the dev server (Vite)
npm run build    # type-check (tsc -b) + production build (vite build)
npm run lint     # lint with oxlint (0-config, fast)
npm run preview  # preview the production build locally
```

## Pages / Routes

| Route            | Page                                  |
| ---------------- | ------------------------------------- |
| `/`              | Home (hero carousel, services, top treatments, team, testimonials, CTA) |
| `/about`         | About — mission, vision, values       |
| `/services`      | Services overview                     |
| `/laboratory`    | Laboratory & diagnostics price list   |
| `/clinics`      | Special clinic weekly schedule        |
| `/rights`        | Patient rights                        |
| `/family-planning` | Family planning education           |
| `/contact`       | Contact, map, enquiry form            |
| `/appointment`   | Appointment booking                   |

## SEO

The site ships crawlability essentials out of the box:

- **Per-route meta** — every page sets its own `<title>`, `description`, canonical, and Open Graph tags via `react-helmet-async` (`src/App.tsx` wraps the app in `HelmetProvider`).
- **`public/sitemap.xml`** — lists all 9 routes.
- **`public/robots.txt`** — allows crawling and points to the sitemap.
- **JSON-LD** — `index.html` includes a `MedicalBusiness` schema (name, phone, address, geo, opening hours, sameAs).

Canonical domain: `https://egesamedicalclinic.com`.

> Note: this is a client-rendered SPA. Search engines execute JS to read per-route meta; submit `sitemap.xml` in Google Search Console and verify ownership for best indexing.

## Deployment

Deploys to **Vercel** (`egesa-medical-clinic` project, aliased to `https://egesamedicalclinic.com`).

- Push to `main` triggers a git deployment, **or**
- `vercel deploy --prod` from a local checkout.

The `vercel.json` forces the Vite framework (`buildCommand: npm run build`, `outputDirectory: dist`) with an SPA rewrite fallback.

## Project Structure

```
src/
  components/   # Navbar, Footer, SHAInfoBar (unused), ui primitives
  data/         # siteData.ts — clinic info, services, schedules
  pages/        # one file per route (each with its own <Helmet>)
  App.tsx       # router + HelmetProvider
  main.tsx      # entry
  index.css     # Tailwind + theme tokens
public/         # static assets, images, sitemap.xml, robots.txt
```
