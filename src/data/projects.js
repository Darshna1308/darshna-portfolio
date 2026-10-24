import { ph } from './placeholder.js'

// Status vocabulary shown in the margin notes. Keep claims honest:
// `statusConfirmed: false` renders a "to confirm" note until Darshna verifies it.
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
    statusConfirmed: false,
    summary:
      'A responsive website for a real construction and property business, presenting its properties and turning visitors into enquiries through contact and WhatsApp.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS', 'Vercel'],
    working: ['Responsive layout', 'Property presentation', 'Contact and WhatsApp enquiry'],
    planned: [],
    role: ph('Solo or team, and what Darshna built'),
    liveUrl: ph('Live site URL'),
    media: [
      { kind: 'desktop', alt: ph('Homepage screenshot, desktop') },
      { kind: 'mobile', alt: ph('Property page screenshot, mobile') },
    ],
    layout: 'lead',
    // A left-to-right chain; `link` is the arrow from the previous node (→ ← ↔).
    architecture: {
      caption: 'Drawn from the stated stack; to be checked against the code.',
      nodes: [
        { label: 'Visitor', sub: 'phone or desktop' },
        { label: 'Vercel', sub: 'hosting', link: '→' },
        { label: 'React + Vite site', sub: 'static build', link: '→' },
        { label: 'WhatsApp', sub: 'enquiry link', link: '→' },
      ],
    },
    caseStudy: {
      problem: [
        'A construction and property business needed a website to present its properties and receive enquiries.',
        ph('The owner’s situation before the site, in Darshna’s words'),
      ],
      contribution: [ph('Exactly what Darshna designed and built')],
      implementation: [
        'Built with React, Vite, JavaScript and plain CSS, and deployed on Vercel.',
        'The site includes contact options and a WhatsApp link so visitors can start an enquiry directly.',
      ],
      challenges: [ph('One or two real problems and how they were solved')],
      results: [
        ph('Verified outcome, e.g. the site is live and in use. No invented metrics.'),
      ],
      next: [ph('What would be improved next')],
    },
  },
  {
    slug: 'agentops',
    number: '02',
    title: 'AgentOps',
    kicker: 'AI-integrated system',
    status: 'inProgress',
    statusConfirmed: false,
    summary:
      'A Node.js backend working with a separate Python AI service, using MongoDB for storage and Groq for model inference.',
    stack: ['Node.js', 'Python', 'MongoDB', 'Groq'],
    working: [ph('Features that work today')],
    planned: [ph('Features still planned')],
    role: ph('Solo or team, and what Darshna built'),
    media: [{ kind: 'desktop', alt: ph('Interface or terminal screenshot') }],
    layout: 'right',
    architecture: {
      caption: 'Drawn from the stated stack; to be checked against the code.',
      nodes: [
        { label: 'MongoDB', sub: 'storage' },
        { label: 'Node.js backend', sub: 'API', link: '←' },
        { label: 'Python AI service', sub: 'separate service', link: '→' },
        { label: 'Groq', sub: 'LLM inference', link: '→' },
      ],
    },
  },
  {
    slug: 'intelliflow',
    number: '03',
    title: 'IntelliFlow',
    kicker: 'Full-stack web app',
    status: 'inProgress',
    statusConfirmed: false,
    summary:
      'A full-stack app with a React front end and an Express API on MongoDB Atlas, secured with JWT sessions and bcryptjs password hashing.',
    stack: ['React', 'Express', 'MongoDB Atlas', 'JWT', 'bcryptjs'],
    working: ['Sign-up and login with hashed passwords', ph('Core app features that work today')],
    planned: [ph('Features still planned')],
    role: ph('Solo or team, and what Darshna built'),
    media: [{ kind: 'desktop', alt: ph('Dashboard or main screen screenshot') }],
    layout: 'left',
    architecture: {
      caption: 'Drawn from the stated stack; to be checked against the code.',
      nodes: [
        { label: 'React client', sub: 'sends JWT' },
        { label: 'Express API', sub: 'JWT + bcryptjs', link: '↔' },
        { label: 'MongoDB Atlas', sub: 'users & data', link: '↔' },
      ],
    },
  },
]

// Shorter pieces: concepts, prototypes and hackathon work.
export const labNotes = [
  {
    slug: 'echo',
    title: 'Echo',
    status: 'concept',
    statusConfirmed: false,
    summary:
      'A digital memory vault, framed as an “emotional résumé”: a place to keep the moments and work that shaped a person.',
    exists: ph('What exists today: idea, designs or code'),
  },
  {
    slug: 'agnipariksha',
    title: 'AGNIPARIKSHA',
    status: 'prototype',
    statusConfirmed: false,
    summary:
      'Lot-aware screening and predictive intelligence, combining anomaly detection with predictive modelling.',
    exists: ph('Dataset, model and what the prototype can show'),
  },
  {
    slug: 'nexus-delta',
    title: 'NEXUS DELTA',
    status: 'hackathon',
    statusConfirmed: false,
    summary:
      'An evidence-first decision engine for workforce capability, built with a hackathon team that reached Round 2.',
    exists: ph('Hackathon name and Darshna’s contribution'),
  },
]

export const findProject = (slug) => projects.find((p) => p.slug === slug)
