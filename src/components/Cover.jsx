import { useEffect, useState } from 'react'

import { site } from '../data/site.js'
import { prefersReducedMotion } from '../hooks/useReducedMotion.js'
import Highlight from './Highlight.jsx'
import MarginNote from './MarginNote.jsx'
import styles from './Cover.module.css'

const SEEN_KEY = 'dp-cover-seen'

// Play the reveal once per browser session, never with reduced motion.
function shouldPlay() {
  if (prefersReducedMotion()) return false
  try {
    return sessionStorage.getItem(SEEN_KEY) !== '1'
  } catch {
    return true
  }
}

export default function Cover() {
  const [playing, setPlaying] = useState(shouldPlay)

  useEffect(() => {
    if (!playing) return
    try {
      sessionStorage.setItem(SEEN_KEY, '1')
    } catch {
      /* storage unavailable: the reveal simply plays again next time */
    }
  }, [playing])

  const finish = () => setPlaying(false)

  return (
    <section
      className={`${styles.cover} ${playing ? styles.playing : ''}`}
      aria-labelledby="cover-title"
    >
      {playing && (
        <button type="button" className={styles.skip} onClick={finish}>
          Skip intro
        </button>
      )}

      <div className={`wrap ${styles.inner}`}>
        <div className={`${styles.masthead} ${styles.a1}`}>
          <span>Working Notes</span>
          <span>
            {site.issue} — {site.edition}
          </span>
          <span className={styles.mastheadEnd}>The portfolio of a software engineer in progress</span>
        </div>

        <h1 id="cover-title" className={styles.title}>
          <span className={styles.line}>
            <span className={`${styles.lineInner} ${styles.a2}`}>Darshna</span>
          </span>
          <span className={`${styles.line} ${styles.lineTwo}`}>
            <span className={`${styles.lineInner} ${styles.a3}`}>Parihar</span>
          </span>
        </h1>

        <div className={`${styles.rule} ${styles.a4}`} aria-hidden="true" />

        <div className={`grid ${styles.body}`}>
          <MarginNote arrow className={`${styles.note} ${styles.a5}`}>
            Notes in the margins say what is live, a prototype, or still planned.
          </MarginNote>

          <p className={`${styles.coverLine} ${styles.a5}`}>
            Building practical software, <Highlight>in public</Highlight>, while learning fast.
          </p>

          <dl className={`${styles.facts} ${styles.a6}`}>
            <div>
              <dt>Studying</dt>
              <dd>
                {site.education.degree}, {site.education.school}
              </dd>
            </div>
            <div>
              <dt>Years</dt>
              <dd>{site.education.years}</dd>
            </div>
            <div>
              <dt>Works in</dt>
              <dd>React · Node · Python · MongoDB</dd>
            </div>
          </dl>
        </div>

        <nav className={`grid ${styles.doors}`} aria-label="Start here">
          <a href="#commissions" className={`${styles.door} ${styles.a7}`}>
            <span className={styles.doorEyebrow}>For clients</span>
            <span className={styles.doorText}>Have a project in mind?</span>
            <span className={styles.doorCta}>See commissions →</span>
          </a>
          <a
            href="#work"
            className={`${styles.door} ${styles.doorAlt} ${styles.a7}`}
            onAnimationEnd={playing ? finish : undefined}
          >
            <span className={styles.doorEyebrow}>For recruiters</span>
            <span className={styles.doorText}>Hiring an intern?</span>
            <span className={styles.doorCta}>See the work &amp; résumé →</span>
          </a>
        </nav>
      </div>
    </section>
  )
}
