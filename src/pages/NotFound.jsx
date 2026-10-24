import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { site } from '../data/site.js'
import styles from './NotFound.module.css'

export default function NotFound({ pending = false }) {
  useEffect(() => {
    document.title = `${pending ? 'Case study in progress' : 'Page not found'} — ${site.name}`
  }, [pending])

  return (
    <main id="main" tabIndex={-1} className={`wrap ${styles.page}`}>
      <p className={styles.folio}>{pending ? 'Still being written' : 'Error 404'}</p>
      <h1 className={styles.title}>
        {pending ? (
          <>
            This story is <em>in draft.</em>
          </>
        ) : (
          <>
            Missing <em>page.</em>
          </>
        )}
      </h1>
      <p className={styles.text}>
        {pending
          ? 'A full case study for this project has not been published yet. The summary on the homepage is current.'
          : 'This page isn’t part of the issue. It may have moved, or the link may be mistyped.'}
      </p>
      <Link to="/#work" className={styles.link}>
        ← Back to the work
      </Link>
    </main>
  )
}
