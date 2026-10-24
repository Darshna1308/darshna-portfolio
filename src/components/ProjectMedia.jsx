import { isPlaceholder } from '../data/placeholder.js'
import { PlaceholderMedia } from './Placeholder.jsx'
import styles from './ProjectMedia.module.css'

const RATIOS = { desktop: '16 / 10', mobile: '9 / 19', square: '1 / 1' }

// Real screenshot when `src` exists; otherwise a stamped placeholder.
// Real images keep their own proportions so nothing in the capture is cropped.
export default function ProjectMedia({ item, className = '', sizes = '(min-width: 56rem) 60vw, 100vw' }) {
  if (!item.src || isPlaceholder(item.alt)) {
    return (
      <PlaceholderMedia
        label={isPlaceholder(item.alt) ? item.alt.label : item.alt}
        ratio={RATIOS[item.kind] || RATIOS.desktop}
        className={className}
      />
    )
  }
  return (
    <figure className={`${styles.figure} ${className}`}>
      <img
        className={styles.img}
        src={item.src}
        srcSet={item.srcSet}
        sizes={item.srcSet ? sizes : undefined}
        alt={item.alt}
        width={item.width}
        height={item.height}
        loading="lazy"
        decoding="async"
      />
      {item.caption && <figcaption className={styles.caption}>{item.caption}</figcaption>}
    </figure>
  )
}
