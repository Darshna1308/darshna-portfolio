# Content still needed

Updated 24 Oct 2026. Every item below renders as a lime **Placeholder** stamp or a "to confirm" note on the site. `npm run check:content` prints the live list and exits with an error while any remain.

## What was verified, and how

| Claim | Evidence | Limits |
| --- | --- | --- |
| Nidhi Builders is deployed at https://nidhi-builder-s.vercel.app/ | The URL returns the site's HTML | The page renders with JavaScript, so its content was checked in the source code, not in a browser. Being reachable says nothing about ownership or business results. |
| Nidhi Builders features and stack | Source in `Darshna1308/Nidhi-Builder-s`: React 19, Vite, Framer Motion, responsive CSS, wa.me WhatsApp links, ongoing and signature project sections | The contact **form** has no submit handler, so the site does not claim it works. |
| AgentOps features and stack | Source in `Darshna1308/AgentOps`: React dashboard, Express API with JWT and bcryptjs, FastAPI service calling Groq, MongoDB, Docker Compose, calculator and text-analyzer tools, rule-based scoring, feedback | Not run. "Implemented" means present in the code. |
| IntelliFlow features and status | Source in `Darshna1308/IntelliFlow`: role dashboards, JWT and bcryptjs, Multer uploads, comments, assignments, audit log, deadline indicators. Its README says "Under Development". | Not run. Whether the database is Atlas comes from you; the code just reads `MONGO_URI`. |
| Echo | Source in `Darshna1308/Echo`: React and Three.js front end, Express and MongoDB back end, accounts, archive and search | Now labelled "Prototype" (it has code, so it's no longer a "Concept"). Please confirm. |
| NEXUS DELTA | `Darshna1308/nexus-delta-dsa` README: Team DSA, Build For Bharat 2.0, Streamlit and scikit-learn | The README lists three team members, so this is presented as **team** work. "Round 2" comes from you. |

## A. Assets you must supply

### Portrait (Profile section)

- **Path:** `public/images/portrait.webp`
- **Format:** WebP, sRGB, quality about 80, ideally under 300 KB. JPEG (`portrait.jpg`) is fine if you can't export WebP.
- **Dimensions:** exactly **1200 × 1500 px** (4:5 portrait). Crop from a larger original, not upscaled. Leave some space around your head; the site does not crop it further.
- **Privacy:** remove location (GPS) metadata before committing.
- **Wiring:** in `src/data/site.js`, replace the `portrait` placeholder with:

```js
portrait: {
  src: '/images/portrait.webp',
  alt: 'Portrait of Darshna Parihar, <what is visible: setting, framing>',
  width: 1200,
  height: 1500,
  credit: '<photographer name, or Self-portrait>',
},
```

The alt text should say who it is and what is visible, in one sentence, without "image of". Width and height must be the file's real pixel size so the page doesn't jump while it loads.

### Project screenshots

Capture the real product only. Don't use mockups, stock images or generated screens. Remove personal data (phone numbers, emails, customer names) unless it's the business's public contact. Save in `public/images/` and replace the `ph(...)` entry in `src/data/projects.js` with `{ kind, src, alt, width, height }`.

| Where | Exact capture | Ratio | Export size | File name |
| --- | --- | --- | --- | --- |
| Feature 01 and case study | Nidhi Builders **homepage**, desktop browser 1440px wide, top of page, no browser UI | 16:10 | 1600 × 1000 | `nidhi-home-desktop.webp` |
| Feature 01 and case study | Nidhi Builders **ongoing or signature projects section** on a phone (DevTools 390 × 844) | 9:19 | 780 × 1650 | `nidhi-projects-mobile.webp` |
| Feature 02 | AgentOps **dashboard** with a few logged runs and the analytics panel | 16:10 | 1600 × 1000 | `agentops-dashboard.webp` |
| Feature 03 | IntelliFlow **reviewer or admin dashboard** after login, using demo data | 16:10 | 1600 × 1000 | `intelliflow-dashboard.webp` |

### Résumé

Save it as `public/Darshna-Parihar-Resume.pdf` and set `site.links.resume` to `'/Darshna-Parihar-Resume.pdf'`.

## B. Facts you must confirm

| Item | Where |
| --- | --- |
| Your About introduction, in your own words (2–3 short paragraphs) | `site.profile` |
| NexaSoul: what you ran or organised, and when | `community[0].detail` |
| NEXUS DELTA: your own part in the team build, and the hackathon date | `community[1].detail`, `labNotes` |
| AGNIPARIKSHA: repository link (none found on your GitHub), dataset, model, what it can show | `labNotes` |
| AgentOps status ("In progress"?) and planned features | `projects.js` |
| IntelliFlow planned features | `projects.js` |
| Echo status ("Prototype"?) | `labNotes` |
| Nidhi Builders case study: the owner's situation, your design decisions, challenges, any outcome the owner can confirm, what you'd improve next | `caseStudy` in `projects.js` |

## C. Optional improvements

- **Nidhi Builders site:** its page title is `client` (the Vite default). A real title such as "Nidhi Builders, Jodhpur" would help search results and link previews. Wiring up the contact form would also let you list it as a working feature.
- **Profile heading:** "Learning by building." is placeholder editorial copy. Change it if it doesn't sound like you.
- **More case studies:** AgentOps and IntelliFlow have enough code to support full case studies once you have screenshots.
- **Echo repo:** `frontend/src/` contains Python `.whl` files that look like they were added by mistake.
