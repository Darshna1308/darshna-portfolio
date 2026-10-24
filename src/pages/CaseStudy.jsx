import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import Contact from '../components/Contact.jsx'
import Diagram from '../components/Diagram.jsx'
import Field, { MaybeLink } from '../components/Field.jsx'
import MarginNote, { StatusNote } from '../components/MarginNote.jsx'
import ProjectMedia from '../components/ProjectMedia.jsx'
import { visible } from '../data/placeholder.js'
import { findProject, projects } from '../data/projects.js'
import { site } from '../data/site.js'
import useReveal from '../hooks/useReveal.js'
import NotFound from './NotFound.jsx'
import styles from './CaseStudy.module.css'

// One template for every case study. A project gets a page by adding a `caseStudy` block to its data.
const SECTIONS = [
  ['problem', 'The problem'],
  ['contribution', 'My contribution'],
  ['implementation', 'Implementation'],
  ['challenges', 'Challenges'],
  ['results', 'Verified results'],
  ['next', 'What’s next'],
]

export default function CaseStudy() {
  const { slug } = useParams()
  const project = findProject(slug)
  useReveal(slug)

  useEffect(() => {
    if (project) document.title = `${project.title} — Case study — ${site.name}`
  }, [project])

  if (!project?.caseStudy) return <NotFound pending={Boolean(project)} />

  const { caseStudy, architecture, media } = project
  const withStudies = projects.filter((p) => p.caseStudy)
  const next = withStudies[(withStudies.indexOf(project) + 1) % withStudies.length]

  return (
    <>
      <main id="main" tabIndex={-1} className={styles.page}>
        <header className={`wrap grid ${styles.head}`}>
          <p className={styles.back}>
            <Link to={`/#${project.slug}`}>← Back to the issue</Link>
          </p>
          <p className={styles.folio}>
            Case study · Feature {project.number} · {project.kicker}
          </p>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.summary}>{project.summary}</p>

          <dl className={styles.meta}>
            <div>
              <dt>Status</dt>
              <dd>
                <StatusNote status={project.status} confirmed={project.statusConfirmed} label={false} />
              </dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>
                <Field value={project.role} />
              </dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{project.stack.join(' · ')}</dd>
            </div>
            {project.repo && (
              <div>
                <dt>Code</dt>
                <dd>
                  <MaybeLink href={project.repo}>Source on GitHub</MaybeLink>
                </dd>
              </div>
            )}
            {project.liveUrl && (
              <div>
                <dt>Live</dt>
                <dd>
                  <MaybeLink href={project.liveUrl}>Visit the site</MaybeLink>
                </dd>
              </div>
            )}
          </dl>
        </header>

        <div className={`wrap grid ${styles.hero}`} data-reveal="">
          {visible(media).map((item, i) => (
            <ProjectMedia key={i} item={item} className={styles[`m_${item.kind}`]} />
          ))}
        </div>

        <div className={`wrap ${styles.chapters}`}>
          {SECTIONS.filter(([key]) => visible(caseStudy[key]).length > 0).map(([key, heading], i) => (
            <section key={key} className={`grid ${styles.chapter}`} aria-labelledby={`cs-${key}`} data-reveal="">
              <h2 id={`cs-${key}`} className={styles.chapterTitle}>
                <span className={styles.chapterNo}>0{i + 1}</span>
                {heading}
              </h2>
              <div className={styles.chapterBody}>
                {visible(caseStudy[key]).map((para, j) => (
                  <p key={j}>
                    <Field value={para} />
                  </p>
                ))}
                {key === 'implementation' && architecture && (
                  <Diagram nodes={architecture.nodes} caption={architecture.caption} />
                )}
              </div>
              {key === 'results' && (
                <MarginNote className={styles.chapterNote}>
                  Only outcomes that can be checked. No invented numbers.
                </MarginNote>
              )}
            </section>
          ))}
        </div>

        <nav className={`wrap ${styles.next}`} aria-label="More work">
          {next && next !== project ? (
            <Link to={`/work/${next.slug}`}>
              <span className={styles.nextLabel}>Next case study</span>
              <span className={styles.nextTitle}>{next.title} →</span>
            </Link>
          ) : (
            <Link to="/#work">
              <span className={styles.nextLabel}>More case studies are being written</span>
              <span className={styles.nextTitle}>See all the work →</span>
            </Link>
          )}
        </nav>
      </main>
      <Contact />
    </>
  )
}
