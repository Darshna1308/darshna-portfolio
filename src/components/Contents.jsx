import { projects } from '../data/projects.js'
import styles from './Contents.module.css'

const ENTRIES = [
  ...projects.map((p) => ({ href: `#${p.slug}`, no: p.number, title: p.title, kind: p.kicker })),
  { href: '#lab-notes', no: '04', title: 'Lab notes', kind: 'Concepts & prototypes' },
  { href: '#profile', no: '05', title: 'Profile', kind: 'About Darshna' },
  { href: '#community', no: '06', title: 'Community', kind: 'Clubs & hackathons' },
  { href: '#commissions', no: '07', title: 'Commissions', kind: 'Freelance services' },
  { href: '#contact', no: '08', title: 'Contact', kind: 'Résumé & links' },
]

export default function Contents() {
  return (
    <section className={`wrap grid ${styles.contents}`} aria-labelledby="contents-title">
      <h2 id="contents-title" className={styles.heading} data-reveal="">
        In this
        <br />
        <em>issue</em>
      </h2>
      <ol className={styles.list}>
        {ENTRIES.map((entry) => (
          <li key={entry.href} data-reveal="">
            <a href={entry.href} className={styles.entry}>
              <span className={styles.no}>{entry.no}</span>
              <span className={styles.title}>{entry.title}</span>
              <span className={styles.leader} aria-hidden="true" />
              <span className={styles.kind}>{entry.kind}</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}
