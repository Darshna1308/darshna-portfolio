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
    // Shown only when Darshna confirms she wants it on the site.
    cgpa: { value: '7.92 / 10', show: true },
  },

  links: {
    github: 'https://github.com/Darshna1308',
    linkedin: ph('LinkedIn profile URL'),
    upwork: ph('Upwork profile URL'),
    email: ph('Public contact email'),
    resume: ph('Résumé PDF'),
  },

  portrait: ph('Portrait photograph of Darshna'),

  // First-person profile essay. Paragraphs marked as placeholders still need Darshna's own words.
  profile: [
    "I'm a computer science student at Chandigarh University who learns by building. Most of what I know about software I've learned by shipping something, finding where it breaks, and fixing it.",
    'My work so far spans responsive front ends, full-stack apps with authentication and databases, AI-integrated services and data-oriented experiments. Some are live, some are prototypes, and I label which is which.',
    ph('A paragraph in Darshna’s own words: what drives her, and what she wants to work on next'),
  ],
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
    role: 'Hackathon team member',
    context: 'Team reached Round 2',
    detail: ph('Hackathon name, date and Darshna’s part in the build'),
  },
]

export const services = [
  {
    title: 'Websites for small businesses',
    body: 'A fast, responsive site that presents what you offer and makes it easy to contact you, including WhatsApp enquiry buttons.',
    proof: 'As built for Nidhi Builders',
  },
  {
    title: 'React front ends',
    body: 'Turning a design or a rough idea into clean, accessible React components that work on phones as well as desktops.',
    proof: 'React, Vite, CSS Modules',
  },
  {
    title: 'Small full-stack MVPs',
    body: 'A first working version with sign-up, login and a database, so you can test an idea with real users.',
    proof: 'Express, MongoDB, JWT auth',
  },
]
