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

### Already added (24 Oct 2026)

| File | Source | Used in |
| --- | --- | --- |
| `public/images/portrait-480.webp`, `portrait-960.webp` | Your photo (960 × 1280, resized and re-encoded only, no retouching or cropping) | Profile |
| `public/images/nidhi-home-800.webp`, `-1600.webp` | Your Nidhi Builders homepage capture | Feature 01, case study |
| `public/images/agentops-overview-800.webp`, `-1600.webp` | Your AgentOps dashboard capture | Feature 02 |
| `public/images/intelliflow-entrance-800.webp`, `-1600.webp` | Your IntelliFlow entrance capture | Feature 03 |
| `public/images/echo-login-800.webp`, `-1600.webp` | Your Echo sign-in capture | Lab notes |

I matched each screenshot to its repository's source (for example, "Site Control" is in `AgentOps/frontend/src/App.jsx`). Captions say what each one shows and doesn't show.

### Still needed

| Where | Exact capture | Size | How to add |
| --- | --- | --- | --- |
| Feature 01 and case study (phone frame) | Nidhi Builders **ongoing or signature projects section** on a phone (DevTools 390 × 844) | at least 780 px wide | Send it to me, or export `nidhi-projects-mobile-400.webp` and `-800.webp` into `public/images/` and replace the `ph(...)` mobile entry in `src/data/projects.js` |
| Contact section | Résumé PDF | — | Save as `public/Darshna-Parihar-Resume.pdf` and set `site.links.resume` to `'/Darshna-Parihar-Resume.pdf'` |

Optional, any time: an IntelliFlow dashboard screen behind login (the current image shows only the entrance), and a phone capture of any project.

## B. Facts you must confirm

| Item | Where |
| --- | --- |
| Your About introduction, in your own words (2–3 short paragraphs) | `site.profile` |
| NEXUS DELTA: you confirmed all projects are solo, but its README lists Team DSA with three members. Which is correct for the site? | `labNotes`, `community` |
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
