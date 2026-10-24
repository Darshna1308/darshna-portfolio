import { useEffect } from 'react'

import Commissions from '../components/Commissions.jsx'
import Community from '../components/Community.jsx'
import Contact from '../components/Contact.jsx'
import Contents from '../components/Contents.jsx'
import Cover from '../components/Cover.jsx'
import Feature from '../components/Feature.jsx'
import LabNotes from '../components/LabNotes.jsx'
import MarginNote from '../components/MarginNote.jsx'
import Profile from '../components/Profile.jsx'
import { projects } from '../data/projects.js'
import { site } from '../data/site.js'
import useReveal from '../hooks/useReveal.js'
import styles from './Home.module.css'

export default function Home() {
  useReveal('home')

  useEffect(() => {
    document.title = `${site.name} — Working Notes`
  }, [])

  return (
    <>
      <main id="main" tabIndex={-1}>
        <Cover />
        <Contents />

        <section id="work" aria-labelledby="work-title">
          <div className={`wrap grid ${styles.workHead}`}>
            <h2 id="work-title" className={styles.workTitle} data-reveal="">
              Selected <em>work</em>
            </h2>
            <MarginNote className={styles.workNote}>
              Real projects, labelled as live, in progress or prototype. Every screenshot is a capture of the project
              itself.
            </MarginNote>
          </div>
          {projects.map((project) => (
            <Feature key={project.slug} project={project} />
          ))}
        </section>

        <LabNotes />
        <Profile />
        <Community />
        <Commissions />
      </main>
      <Contact />
    </>
  )
}
