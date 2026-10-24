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
| NEXUS DELTA | `Darshna1308/nexus-delta-dsa` README: Team DSA (Anwesha Kar, Darshna Parihar, Saamyaraj Baidya), Build For Bharat 2.0, Streamlit and scikit-learn | Kept as **team** work, as you confirmed. "Round 2" comes from you. The commit history doesn't show who built which part, so your contribution isn't stated. |

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

## B. Remaining content: essential before launch

These show as placeholders or "to confirm" on the public page and can't be left out without misleading or confusing visitors.

| # | Item | Where it shows | Where to edit |
| --- | --- | --- | --- |
| 1 | Your About introduction, in your own words (2–3 short paragraphs) | Profile | `site.profile` |
| 2 | Résumé PDF | Contact | `public/Darshna-Parihar-Resume.pdf`, then `site.links.resume` |
| 3 | Confirm AgentOps status: "In progress"? | Feature 02 | `projects.js` (`statusConfirmed`) |
| 4 | Confirm Echo status: "Prototype"? | Lab notes | `labNotes` |
| 5 | AGNIPARIKSHA: confirm "Prototype" and say what exists (repo link, data, model), or remove it from the site | Lab notes | `labNotes` |
| 6 | NEXUS DELTA: your own contribution within Team DSA, and the hackathon date. The repo confirms the team and Build For Bharat 2.0 but not who built what. | Lab notes, Community | `labNotes`, `community[1]` |

## C. Remaining content: can be added later

If these are still missing at launch, the right move is to hide the empty slot instead of showing a placeholder (a small code change, made only on request).

| # | Item | Where it shows |
| --- | --- | --- |
| 7 | Nidhi Builders phone screenshot (projects section, 390px wide) | Feature 01 and case study, phone frame |
| 8 | Nidhi case study: the owner's situation before the site | Case study, Problem |
| 9 | Nidhi case study: your design decisions and how you worked with the owner | Case study, Contribution |
| 10 | Nidhi case study: one or two real challenges and how you solved them | Case study, Challenges |
| 11 | Nidhi case study: any outcome the owner can confirm (no invented metrics) | Case study, Results |
| 12 | Nidhi case study: what you'd improve next | Case study, What's next |
| 13 | AgentOps: planned features | Feature 02 |
| 14 | IntelliFlow: planned features | Feature 03 |
| 15 | NexaSoul: what you ran or organised, and when | Community |

## D. Optional improvements

- **Nidhi Builders site:** its page title is `client` (the Vite default). A real title such as "Nidhi Builders, Jodhpur" would help search results and link previews. Wiring up the contact form would also let you list it as a working feature.
- **Profile heading:** "Learning by building." is placeholder editorial copy. Change it if it doesn't sound like you.
- **More case studies:** AgentOps and IntelliFlow have enough code to support full case studies once you have screenshots.
- **Echo repo:** `frontend/src/` contains Python `.whl` files that look like they were added by mistake.
