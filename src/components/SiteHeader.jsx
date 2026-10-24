import { Link } from 'react-router-dom'

import { site } from '../data/site.js'
import styles from './SiteHeader.module.css'

const NAV = [
  { href: '/#work', label: 'Work' },
  { href: '/#profile', label: 'Profile' },
  { href: '/#commissions', label: 'Commissions' },
  { href: '/#contact', label: 'Contact' },
]

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.inner}`}>
        <Link to="/" className={styles.brand}>
          <span className={styles.name}>{site.name}</span>
          <span className={styles.issue} aria-hidden="true">
            Working Notes · {site.issue}
          </span>
        </Link>
        <nav aria-label="Main">
          <ul className={styles.nav}>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
