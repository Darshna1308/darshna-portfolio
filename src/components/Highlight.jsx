import styles from './Highlight.module.css'

// An acid-lime highlighter stroke drawn behind ink text as it scrolls into view.
export default function Highlight({ children }) {
  return (
    <mark className={styles.mark} data-mark="">
      {children}
    </mark>
  )
}
