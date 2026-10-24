import { isHidden } from '../data/placeholder.js'
import { community } from '../data/site.js'
import Field from './Field.jsx'
import styles from './Community.module.css'

export default function Community() {
  return (
    <section id="community" className={`wrap grid ${styles.section}`} aria-labelledby="community-title">
      <h2 id="community-title" className={styles.heading} data-reveal="">
        Community
        <br />
        <em>&amp; rooms</em> I&rsquo;ve <em>helped run</em>
      </h2>

      <ul className={styles.list}>
        {community.map((entry) => (
          <li key={entry.org} className={styles.entry} data-reveal="">
            <h3 className={styles.org}>{entry.org}</h3>
            <p className={styles.role}>{entry.role}</p>
            <p className={styles.context}>{entry.context}</p>
            {!isHidden(entry.detail) && (
              <p className={styles.detail}>
                <Field value={entry.detail} />
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
