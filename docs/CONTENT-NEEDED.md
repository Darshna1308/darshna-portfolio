# Content still needed

Every item below currently renders as a lime **Placeholder** stamp or a "to confirm" note. Nothing here has been invented. `npm run check:content` prints the live list.

## 1. Project images

Save files in `public/images/`, then replace the `ph(...)` value in `src/data/projects.js` with real image details. Example:

```js
{ kind: 'desktop', src: '/images/nidhi-home-desktop.webp', alt: 'Nidhi Builders homepage showing …', width: 1600, height: 1000 }
```

Capture the real product only. Don't use mockups, stock images or generated screens. Export as WebP (or AVIF) at the size shown. Remove personal data (customer names, phone numbers, emails) before capturing.

| Where it appears | Exact capture | Ratio | Export size | File name |
| --- | --- | --- | --- | --- |
| Homepage feature 01 and case study hero | Nidhi Builders **homepage**, desktop browser window 1440px wide, top of the page, no browser chrome | 16:10 | 1600 × 1000 | `nidhi-home-desktop.webp` |
| Homepage feature 01 and case study hero | Nidhi Builders **property section** on a phone (DevTools device 390 × 844 or a real phone) | 9:19 | 780 × 1650 | `nidhi-property-mobile.webp` |
| Homepage feature 02 | AgentOps **running**: its interface, or real API or terminal output if it has no UI yet | 16:10 | 1600 × 1000 | `agentops-main.webp` |
| Homepage feature 03 | IntelliFlow **main screen after logging in**, desktop 1440px wide, using demo data | 16:10 | 1600 × 1000 | `intelliflow-main.webp` |

The lab notes (Echo, AGNIPARIKSHA, NEXUS DELTA) don't need images. Add one only if you have a real screen or diagram.

## 2. About / Profile section

| Item | Needed | Where to edit |
| --- | --- | --- |
| Portrait | A real photo of you, vertical 4:5, at least 1200 × 1500px, plain or uncluttered background, saved as `public/images/portrait.webp` | `site.portrait` in `src/data/site.js` (`{ src, alt, width, height, credit }`; credit = photographer, or "Self-portrait") |
| Third paragraph | 2–3 sentences in your own words: what drives you and what you want to work on next | `site.profile[2]` |
| CGPA | Confirm 7.92/10 is current and you want it shown (set `show: false` to hide) | `site.education.cgpa` |
| Optional | Internship availability (e.g. which months), location or relocation preference, languages | Tell me and I'll add a row to the facts list |

## 3. Links and calls to action

Without these, the only working contact route on the site is GitHub. Missing links show as placeholder text and are **not clickable**, so the site has no dead links.

| Link | Used by | Where to edit |
| --- | --- | --- |
| Public contact email | Contact section (becomes a `mailto:` link) | `site.links.email` |
| Résumé PDF | Contact section. Save as `public/Darshna-Parihar-Resume.pdf` and set the link to `/Darshna-Parihar-Resume.pdf` | `site.links.resume` |
| LinkedIn profile URL | Contact section | `site.links.linkedin` |
| Upwork profile URL | Commissions button and Contact section | `site.links.upwork` |
| Nidhi Builders live URL, and the owner's OK to name and show the site | Feature 01 and case study | `liveUrl` in `src/data/projects.js` |

## 4. Project facts to confirm

| Project | Confirm |
| --- | --- |
| All projects | Your role: solo or team, and what you personally built |
| Nidhi Builders | Status "Live"; case-study text for the problem, contribution, challenges, verified results and what's next |
| AgentOps, IntelliFlow | Status "In progress"; which features work today and which are planned; the architecture diagram matches the code |
| Echo | Status "Concept"; what exists today |
| AGNIPARIKSHA | Status "Prototype"; dataset, model and what it can show |
| NEXUS DELTA | Hackathon name and date, Round 2 result, your contribution |
| NexaSoul | What you ran or organised, and when |

Once a status is checked, set `statusConfirmed: true`.

## 5. Commissions

The three services are drafted from your stack and are marked `confirmed: false`. Edit the wording in `src/data/site.js` and set `confirmed: true` when you're happy with it. The section makes no promises about timelines, prices or results.
