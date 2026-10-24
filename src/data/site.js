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
    // Latest CGPA Darshna stated. Set `show: false` to hide it; `confirmed` flags it in check:content.
    cgpa: { value: '7.92 / 10', show: true, confirmed: false },
  },

  links: {
    github: 'https://github.com/Darshna1308',
    linkedin: ph('LinkedIn profile URL'),
    upwork: ph('Upwork profile URL'),
    email: ph('Public contact email'),
    resume: ph('Résumé PDF'),
  },

  portrait: ph('Real portrait of Darshna, vertical 4:5, at least 1200 × 1500px'),

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

// Drafted from Darshna's real stack; `confirmed: false` until she approves the wording.
export const services = [
  {
    title: 'Websites for small businesses',
    body: 'A responsive website that presents what your business offers and gives visitors a clear way to contact you, such as a WhatsApp enquiry link.',
    proof: 'Example: Nidhi Builders',
    confirmed: false,
  },
  {
    title: 'React front ends',
    body: 'Turning a design or a rough idea into React components that work on phones and desktops.',
    proof: 'React, Vite, CSS',
    confirmed: false,
  },
  {
    title: 'Small full-stack MVPs',
    body: 'A small first version of an app with sign-up, login and a database, to try out an idea.',
    proof: 'Express, MongoDB, JWT auth',
    confirmed: false,
  },
]
