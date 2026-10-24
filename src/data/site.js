import { ph } from './placeholder.js'

export const site = {
  name: 'Darshna Parihar',
  issue: 'No. 01',
  edition: 'Autumn 2026',
  coverLine: 'Building practical software, in public, while learning fast.',
  role: 'Computer science student & hands-on software engineer',

  education: {
    degree: 'B.E. Computer Science',
    school: 'Chandigarh University',
    years: '2024–2028',
    // Hidden at Darshna's request. Set `show: true` to display it.
    cgpa: { value: '7.92 / 10', show: false },
  },

  links: {
    github: 'https://github.com/Darshna1308',
    linkedin: 'https://www.linkedin.com/in/darshnapariharcu/',
    upwork: 'https://www.upwork.com/freelancers/~011981b0cd67d5e516',
    email: 'darshnaparihar1308@gmail.com',
    // Save the PDF as public/Darshna-Parihar-Resume.pdf, then set this to '/Darshna-Parihar-Resume.pdf'.
    resume: ph('Résumé PDF'),
  },

  // Replace with { src: '/images/portrait.webp', alt, width: 1200, height: 1500, credit }.
  // See docs/CONTENT-NEEDED.md for the exact file requirements.
  portrait: ph('Real portrait of Darshna: public/images/portrait.webp, 4:5, 1200 × 1500px'),

  // Darshna's own About introduction. Not written yet: never fill this in on her behalf.
  profile: [ph('Your About introduction, in your own words (2–3 short paragraphs)')],
}

export const community = [
  {
    org: 'NexaSoul',
    role: 'Operational Lead & Learning Coordinator',
    context: 'University frontend and full-stack development club',
    detail: ph('What Darshna ran or organised at NexaSoul, and when'),
  },
  {
    org: 'NEXUS DELTA',
    role: 'Team DSA member',
    context: 'Build For Bharat 2.0 · team reached Round 2',
    detail: ph('Your part in the team build, and the hackathon date'),
  },
]

// Approved by Darshna on 24 Oct 2026. No prices, timelines or guarantees.
export const services = [
  {
    title: 'Websites for small businesses',
    body: 'A responsive website that presents what your business offers and gives visitors a clear way to contact you, such as a WhatsApp enquiry link.',
    proof: 'Example: Nidhi Builders',
  },
  {
    title: 'React front ends',
    body: 'Turning a design or a rough idea into React components that work on phones and desktops.',
    proof: 'React, Vite, CSS',
  },
  {
    title: 'Small full-stack MVPs',
    body: 'A small first version of an app with sign-up, login and a database, to try out an idea.',
    proof: 'Express, MongoDB, JWT auth',
  },
]
