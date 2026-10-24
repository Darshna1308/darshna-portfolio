import { isPlaceholder } from '../data/placeholder.js'
import { PlaceholderText } from './Placeholder.jsx'

// Renders a content value, or a labelled placeholder when it is still missing.
export default function Field({ value }) {
  if (isPlaceholder(value)) return <PlaceholderText label={value.label} />
  return value
}

// A link whose URL may still be a placeholder.
export function MaybeLink({ href, children, ...rest }) {
  if (isPlaceholder(href)) {
    return (
      <span>
        {children} <PlaceholderText label={href.label} />
      </span>
    )
  }
  const external = /^https?:/.test(href)
  return (
    <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} {...rest}>
      {children}
      {external && <span className="visually-hidden"> (opens in a new tab)</span>}
    </a>
  )
}
