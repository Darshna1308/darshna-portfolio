import { labNotes } from '../data/projects.js'
import Field from './Field.jsx'
import MarginNote, { StatusNote } from './MarginNote.jsx'
import styles from './LabNotes.module.css'

export default function LabNotes() {
  return (
    <section id="lab-notes" className={`wrap ${styles.section}`} aria-labelledby="lab-title">
      <div className={`grid ${styles.head}`}>
        <h2 id="lab-title" className={styles.heading} data-reveal="">
          Lab <em>notes</em>
        </h2>
        <p className={styles.intro} data-reveal="">
          Shorter pieces: concepts, prototypes and hackathon work. Each one is labelled for what it is today, not what it
          might become.
        </p>
      </div>

      <ol className={`grid ${styles.list}`}>
        {labNotes.map((note, i) => (
          <li key={note.slug} id={note.slug} className={styles.item} data-reveal="">
            <span className={styles.index} aria-hidden="true">
              04.{i + 1}
            </span>
            <h3 className={styles.title}>{note.title}</h3>
            <StatusNote status={note.status} confirmed={note.statusConfirmed} />
            <p className={styles.summary}>{note.summary}</p>
            <p className={styles.exists}>
              <span className={styles.existsLabel}>What exists today</span>
              <Field value={note.exists} />
            </p>
          </li>
        ))}
      </ol>

      <MarginNote className={styles.note}>
        Experiments are where I learn fastest. They stay here, marked honestly, until they earn a full feature.
      </MarginNote>
    </section>
  )
}
