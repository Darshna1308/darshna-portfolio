import { isPlaceholder } from '../data/placeholder.js'
import { site } from '../data/site.js'
import { MaybeLink } from './Field.jsx'
import styles from './Contact.module.css'

export default function Contact() {
  const { links } = site
  const email = isPlaceholder(links.email) ? links.email : `mailto:${links.email}`

  const rows = [
    { label: 'Email', href: email, text: isPlaceholder(links.email) ? 'Write to me' : links.email },
    { label: 'Résumé', href: links.resume, text: 'Download the PDF' },
    { label: 'GitHub', href: links.github, text: 'github.com/Darshna1308' },
    { label: 'LinkedIn', href: links.linkedin, text: 'Connect on LinkedIn' },
    { label: 'Upwork', href: links.upwork, text: 'Hire me on Upwork' },
  ]

  return (
    <footer id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={`wrap grid ${styles.inner}`}>
        <h2 id="contact-title" className={styles.heading} data-reveal="">
          Let&rsquo;s <em>talk.</em>
        </h2>

        <p className={styles.lede} data-reveal="">
          Recruiters: my résumé and code are one click away. Clients: tell me what you&rsquo;re building and I&rsquo;ll
          reply with an honest view of whether I can help.
        </p>

        <ul className={styles.links}>
          {rows.map((row) => (
            <li key={row.label} data-reveal="">
              <span className={styles.label}>{row.label}</span>
              <MaybeLink href={row.href} className={styles.link}>
                {row.text}
              </MaybeLink>
            </li>
          ))}
        </ul>

        <div className={styles.colophon}>
          <h3 className={styles.colophonTitle}>Colophon</h3>
          <p>
            Set in Fraunces, Newsreader and IBM Plex Mono. Built with React and Vite, styled with plain CSS Modules. No 3D,
            no tracking scripts.
          </p>
          <p className={styles.copy}>
            © {new Date().getFullYear()} {site.name} · Working Notes {site.issue}
          </p>
        </div>
      </div>
    </footer>
  )
}
