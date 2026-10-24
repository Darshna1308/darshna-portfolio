import { Link } from 'react-router-dom'

import { isPlaceholder } from '../data/placeholder.js'
import Diagram from './Diagram.jsx'
import Field, { MaybeLink } from './Field.jsx'
import MarginNote, { StatusNote } from './MarginNote.jsx'
import ProjectMedia from './ProjectMedia.jsx'
import styles from './Feature.module.css'

export default function Feature({ project }) {
  const { slug, number, title, kicker, layout, media, architecture, caseStudy } = project
  const isLead = layout === 'lead'

  return (
    <article id={slug} className={`wrap ${styles.feature} ${styles[layout]}`} aria-labelledby={`${slug}-title`}>
      <header className={styles.head} data-reveal="">
        <p className={styles.folio}>
          <span>Feature {number}</span>
          <span>{kicker}</span>
        </p>
        <h3 id={`${slug}-title`} className={styles.title}>
          <span className={styles.numeral} aria-hidden="true">
            {number}
          </span>
          {title}
        </h3>
      </header>

      <div className={`grid ${styles.body}`}>
        <div className={styles.media} data-reveal="">
          {media.map((item, i) => (
            <ProjectMedia key={i} item={item} className={styles[`m_${item.kind}`]} />
          ))}
        </div>

        <div className={styles.text} data-reveal="">
          <StatusNote status={project.status} confirmed={project.statusConfirmed} />
          <p className={styles.summary}>{project.summary}</p>

          <ul className={styles.stack} aria-label="Built with">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className={styles.lists}>
            <FeatureList title="Working now" items={project.working} />
            {project.planned.length > 0 && <FeatureList title="Planned" items={project.planned} />}
          </div>

          <p className={styles.actions}>
            {caseStudy && (
              <Link to={`/work/${slug}`} className={styles.primary}>
                Read the case study →
              </Link>
            )}
            {project.liveUrl && <MaybeLink href={project.liveUrl}>Visit the live site</MaybeLink>}
          </p>
        </div>

        <MarginNote className={styles.note} arrow={!isLead}>
          My role: <Field value={project.role} />
        </MarginNote>

        {!isLead && architecture && (
          <div className={styles.diagram} data-reveal="">
            <Diagram nodes={architecture.nodes} caption={architecture.caption} />
          </div>
        )}
      </div>
    </article>
  )
}

function FeatureList({ title, items }) {
  const allMissing = items.every(isPlaceholder)
  return (
    <div>
      <h4 className={styles.listTitle}>{title}</h4>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={allMissing ? styles.missing : undefined}>
            <Field value={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
