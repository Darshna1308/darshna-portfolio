import { STATUS } from '../data/projects.js'
import styles from './MarginNote.module.css'

// A handwritten-feeling annotation that lives in the margin column.
export default function MarginNote({ children, arrow = false, tone = 'cobalt', className = '' }) {
  return (
    <p className={`${styles.note} ${styles[tone]} ${className}`}>
      {arrow && (
        <svg className={styles.arrow} viewBox="0 0 60 24" aria-hidden="true">
          <path d="M58 4 C40 2 22 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 18 L14 17 M6 18 L9 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )}
      {children}
    </p>
  )
}

export function StatusNote({ status, confirmed = true, label = true, className = '' }) {
  return (
    <p className={`${styles.status} ${className}`}>
      {label && <span className={styles.statusLabel}>Status</span>}
      <span className={`${styles.statusValue} ${styles[`s_${status}`] || ''}`}>{STATUS[status]}</span>
      {!confirmed && <span className={styles.confirm}>to confirm</span>}
    </p>
  )
}
