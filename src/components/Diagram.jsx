import styles from './Diagram.module.css'

const ARROW_TEXT = { '→': 'sends to', '←': 'is called by', '↔': 'exchanges data with' }

// A hand-drawn-style architecture strip: nodes left to right (top to bottom on phones).
export default function Diagram({ nodes, caption, title = 'How it fits together' }) {
  const description = nodes
    .slice(1)
    .map((node, i) => `${nodes[i].label} ${ARROW_TEXT[node.link] || 'connects to'} ${node.label}`)
    .join('. ')

  return (
    <figure className={styles.diagram}>
      <p className={styles.title}>{title}</p>
      <ol className={styles.chain}>
        {nodes.map((node, i) => (
          <li key={node.label} className={styles.item}>
            {i > 0 && <Connector dir={node.link} />}
            <span className={styles.node} style={{ '--tilt': `${i % 2 ? 0.8 : -0.8}deg` }}>
              <span className={styles.label}>{node.label}</span>
              <span className={styles.sub}>{node.sub}</span>
            </span>
          </li>
        ))}
      </ol>
      <p className="visually-hidden">{description}.</p>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}

function Connector({ dir }) {
  const start = dir === '←' || dir === '↔'
  const end = dir === '→' || dir === '↔'
  return (
    <svg className={styles.connector} viewBox="0 0 56 20" aria-hidden="true">
      <path d="M4 10 C18 6 36 14 52 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {end && <path d="M45 4 L52 10 L45 16" fill="none" stroke="currentColor" strokeWidth="1.5" />}
      {start && <path d="M11 4 L4 10 L11 16" fill="none" stroke="currentColor" strokeWidth="1.5" />}
    </svg>
  )
}
