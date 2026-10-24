import styles from './Placeholder.module.css'

// Stand-in for a missing image. Always stamped so it can never pass as real project media.
export function PlaceholderMedia({ label, ratio = '16 / 10', tone = 'paper', className = '' }) {
  return (
    <div
      className={`${styles.media} ${styles[tone]} ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <span className={styles.stamp} aria-hidden="true">
        Placeholder
      </span>
      <span className={styles.caption} aria-hidden="true">
        {label}
      </span>
    </div>
  )
}

export function PlaceholderText({ label }) {
  return (
    <span className={styles.text}>
      <span className={styles.textTag}>Placeholder</span> {label}
    </span>
  )
}
