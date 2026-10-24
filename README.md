# Darshna Parihar — Working Notes

Personal portfolio in an editorial "working journal" style. Built with React + Vite and CSS Modules. No 3D, no animation library.

## Run it locally (Windows)

Requires [Node.js 22 LTS](https://nodejs.org/). In PowerShell:

```powershell
git clone https://github.com/Darshna1308/darshna-portfolio.git
cd darshna-portfolio
npm install
npm run dev
```

Open http://localhost:5173.

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build at http://localhost:4173 |
| `npm run check:content` | List every placeholder and unconfirmed status still on the site |

## Editing content

All words and links live in two files, not in the components:

- `src/data/site.js` — name, education, links, portrait, profile essay, community roles, services.
- `src/data/projects.js` — featured projects, lab notes and the case-study text.

Anything still missing is written as `ph('what is needed')`. It renders with a lime **Placeholder** stamp so it can never pass as real work. Replace it with the real value (a string, or for images `{ kind, src, alt, width, height }`) and the stamp disappears.

Each project has a `status` (`live`, `inProgress`, `prototype`, `hackathon`, `concept`) and `statusConfirmed`. Set `statusConfirmed: true` once you've checked it.

Run `npm run check:content` before a production deploy. It exits with an error while placeholders remain.

### Images

Put screenshots and the portrait in `public/images/` and reference them as `/images/file-name.webp`. Export at about 1600px wide (desktop shots) and 800px (phone shots), as WebP or AVIF.

### Case studies

One template (`src/pages/CaseStudy.jsx`) serves every case study at `/work/<slug>`. To publish one, add a `caseStudy` block to that project in `projects.js`. Projects without one show a "still being written" page.

## Structure

```
src/
  data/         site and project content
  components/   cover, contents, features, sections, primitives (MarginNote, Highlight, Diagram, Placeholder)
  pages/        Home, CaseStudy, NotFound
  styles/       tokens.css (colours, type scale, spacing) and global.css
  hooks/        scroll reveal and reduced-motion helpers
```

## Accessibility and motion

- The cover reveal plays once per browser session, has a Skip intro button, and never plays with reduced motion turned on.
- Scroll reveals and highlighter strokes are off with reduced motion. Content is visible without them.
- Skip-to-content link, visible focus outlines, semantic headings and labelled placeholders.

## Deploying

Vercel detects Vite automatically (build `npm run build`, output `dist`). `vercel.json` rewrites routes to `index.html` so `/work/...` links work on refresh.
