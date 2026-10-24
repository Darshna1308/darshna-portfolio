import { ph } from './placeholder.js'

// A real screenshot exported at 800 and 1600px wide in public/images/<name>-<width>.webp.
const shot = (name, height1600, alt, caption) => ({
  kind: 'desktop',
  src: `/images/${name}-1600.webp`,
  srcSet: `/images/${name}-800.webp 800w, /images/${name}-1600.webp 1600w`,
  width: 1600,
  height: height1600,
  alt,
  caption,
})

// Status vocabulary shown in the margin notes. Keep claims honest:
// `statusConfirmed: false` renders a "to confirm" note until Darshna verifies it.
// Feature lists describe what exists in each project's source code (checked 24 Oct 2026),
// not usage or business results.
export const STATUS = {
  live: 'Live',
  inProgress: 'In progress',
  prototype: 'Prototype',
  hackathon: 'Hackathon prototype',
  concept: 'Concept',
}

export const projects = [
  {
    slug: 'nidhi-builders',
    number: '01',
    title: 'Nidhi Builders',
    kicker: 'Client website',
    status: 'live',
    statusConfirmed: true,
    summary:
      'A responsive website for a construction and property business in Jodhpur, presenting its ongoing and signature projects with direct WhatsApp enquiry links.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS', 'Framer Motion', 'Vercel'],
    working: [
      'Responsive layout for phones and desktops',
      'Ongoing-projects list and a signature-project showcase with video',
      'WhatsApp chat links in a floating button and the contact section',
    ],
    planned: [],
    role: 'Solo project',
    liveUrl: 'https://nidhi-builder-s.vercel.app/',
    repo: 'https://github.com/Darshna1308/Nidhi-Builder-s',
    media: [
      shot(
        'nidhi-home',
        872,
        'Nidhi Builders homepage hero: the headline “Building Tomorrow’s Landmarks” over a photo of a glass office building, with navigation and consultation buttons.',
        'Live site, desktop homepage. The figures shown (projects, years, satisfaction) are the business’s own copy, not results of this project.',
      ),
      { kind: 'mobile', alt: ph('Nidhi Builders projects section on a phone, 390px wide (9:19)', { optional: true }) },
    ],
    layout: 'lead',
    // A left-to-right chain; `link` is the arrow from the previous node (→ ← ↔).
    architecture: {
      caption: 'Checked against the source code.',
      nodes: [
        { label: 'Visitor', sub: 'phone or desktop' },
        { label: 'Vercel', sub: 'hosting', link: '→' },
        { label: 'React + Vite site', sub: 'static build', link: '→' },
        { label: 'WhatsApp', sub: 'wa.me chat link', link: '→' },
      ],
    },
    caseStudy: {
      problem: [
        'A construction and property business needed a website to present its projects and receive enquiries.',
        ph('The owner’s situation before the site, in Darshna’s words', { optional: true }),
      ],
      contribution: [
        'I built the site independently with React and Vite and deployed it on Vercel.',
        ph('Design decisions you made and how you worked with the owner', { optional: true }),
      ],
      implementation: [
        'React 19 with Vite, one folder per section component, plain CSS plus shared responsive styles.',
        'Framer Motion handles scroll-triggered entrance animations; icons come from Lucide.',
        'A floating WhatsApp button and a WhatsApp card in the contact section open a chat through a wa.me link.',
      ],
      challenges: [ph('One or two real problems and how you solved them', { optional: true })],
      results: [
        'The site is deployed and publicly reachable at nidhi-builder-s.vercel.app.',
        ph('Any outcome the owner can confirm. No invented metrics.', { optional: true }),
      ],
      next: [ph('What you would improve next', { optional: true })],
    },
  },
  {
    slug: 'agentops',
    number: '02',
    title: 'AgentOps',
    kicker: 'AI observability dashboard',
    status: 'inProgress',
    statusConfirmed: false,
    summary:
      'A dashboard for monitoring AI-agent runs. An Express API routes each prompt through tools or a Python service that calls Groq, then logs the route, tools, latency, tokens and a quality score to MongoDB.',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'Python', 'FastAPI', 'Groq', 'MongoDB', 'Docker'],
    working: [
      'Dashboard login with JWT and bcryptjs-hashed passwords',
      'Per-run log of route, tools used, latency and token usage',
      'Two built-in tools: a calculator and a text analyzer',
      'Rule-based relevance and quality scoring of each response',
      'Human feedback on each run',
      'Docker Compose setup for MongoDB, the AI service and the API',
    ],
    planned: [ph('Features still planned', { optional: true })],
    role: 'Solo project',
    repo: 'https://github.com/Darshna1308/AgentOps',
    media: [
      shot(
        'agentops-overview',
        870,
        'AgentOps dashboard overview: a six-stage run pipeline from prompt to result, above counters for total runs, success rate, failed runs, latency and tokens.',
        'Dashboard overview from a local run. The counters reflect test runs, not production usage.',
      ),
    ],
    layout: 'right',
    architecture: {
      caption: 'Checked against the source code.',
      nodes: [
        { label: 'React dashboard', sub: 'Vite' },
        { label: 'Express API', sub: 'JWT · runs in MongoDB', link: '→' },
        { label: 'FastAPI service', sub: 'Python', link: '→' },
        { label: 'Groq', sub: 'LLM inference', link: '→' },
      ],
    },
  },
  {
    slug: 'intelliflow',
    number: '03',
    title: 'IntelliFlow',
    kicker: 'Workflow & approvals app',
    status: 'inProgress',
    statusConfirmed: true,
    summary:
      'A workflow and approval platform for document-driven requests, with separate dashboards for requesters, reviewers and admins, document uploads and an audit trail.',
    stack: ['React', 'Vite', 'Express', 'MongoDB Atlas', 'Mongoose', 'JWT', 'bcryptjs', 'Multer', 'Docker'],
    working: [
      'Role-based login with JWT and bcryptjs',
      'User, reviewer and admin dashboards',
      'Request creation with document uploads',
      'Reviewer assignment and comments',
      'Audit log and deadline indicators',
    ],
    planned: [ph('Features still planned', { optional: true })],
    role: 'Solo project',
    repo: 'https://github.com/Darshna1308/IntelliFlow',
    media: [
      shot(
        'intelliflow-entrance',
        869,
        'IntelliFlow entrance screen styled as a library, with three books for choosing the User, Reviewer or Admin role.',
        'Role-selection entrance. The request dashboards behind each role are not shown here.',
      ),
    ],
    layout: 'left',
    architecture: {
      caption: 'Checked against the source code.',
      nodes: [
        { label: 'React client', sub: 'role dashboards' },
        { label: 'Express API', sub: 'JWT · Multer uploads', link: '↔' },
        { label: 'MongoDB', sub: 'Mongoose models', link: '↔' },
      ],
    },
  },
]

// Shorter pieces: concepts, prototypes and hackathon work.
export const labNotes = [
  {
    slug: 'echo',
    title: 'Echo',
    status: 'prototype',
    statusConfirmed: true,
    summary:
      'A private memory vault: save a moment with its story, date, place, people, photos and a voice note, then browse a timeline or ask questions answered only from your own memories.',
    exists: 'Full-stack code: React and Three.js front end, Express and MongoDB back end, accounts, archive and search.',
    repo: 'https://github.com/Darshna1308/Echo',
    media: shot(
      'echo-login',
      871,
      'Echo login screen: a 3D carved jaali window casting patterned light on the left, and a “Welcome back” sign-in form on the right.',
      'Welcome and sign-in screen.',
    ),
  },
  {
    slug: 'nexus-delta',
    title: 'NEXUS DELTA',
    status: 'hackathon',
    statusConfirmed: true,
    summary:
      'An evidence-first capability decision engine for data-science teams: a Streamlit app that weighs internal evidence, job-market data and growth headroom, backed by scikit-learn models and analysis notebooks.',
    exists: 'Team repository with the Streamlit app, analysis notebooks and model outputs.',
    // Team credit and event per the repository README and Darshna; her own part as she confirmed it.
    credits: [
      ['Team', 'Team DSA: Anwesha Kar, Darshna Parihar, Saamyaraj Baidya'],
      ['Event', 'Build For Bharat 2.0, 7–8 October 2026'],
      ['My part', 'Researching similar concepts related to our idea, and working on the frontend'],
    ],
    repo: 'https://github.com/Darshna1308/nexus-delta-dsa',
    media: shot(
      'nexus-delta-overview',
      883,
      'NEXUS DELTA overview page: the question “Which capability should your data science team develop next?” beside a 3D map of India with pillars for data-role postings per city, above summary counters.',
      'Team DSA’s app, Overview page, signed in with a demo account. The figures come from the team’s dataset analysis.',
    ),
  },
]

export const findProject = (slug) => projects.find((p) => p.slug === slug)
