import { isPlaceholder } from '../data/placeholder.js'
import { PlaceholderMedia } from './Placeholder.jsx'

const RATIOS = { desktop: '16 / 10', mobile: '9 / 19', square: '1 / 1' }

// Real screenshot when `src` exists; otherwise a stamped placeholder.
export default function ProjectMedia({ item, className = '' }) {
  const ratio = RATIOS[item.kind] || RATIOS.desktop
  if (!item.src || isPlaceholder(item.alt)) {
    return (
      <PlaceholderMedia
        label={isPlaceholder(item.alt) ? item.alt.label : item.alt}
        ratio={ratio}
        className={className}
      />
    )
  }
  return (
    <img
      className={className}
      src={item.src}
      alt={item.alt}
      width={item.width}
      height={item.height}
      loading="lazy"
      decoding="async"
      style={{ aspectRatio: ratio, objectFit: 'cover', width: '100%' }}
    />
  )
}
