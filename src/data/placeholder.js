// A value that is still missing. Rendered with a visible "Placeholder" stamp and
// reported by `npm run check:content` so nothing temporary ships unnoticed.
// `optional` placeholders are not shown on the site at all; their slot is hidden
// until real content arrives, and check:content lists them without failing.
export const ph = (label, { optional = false } = {}) => ({ placeholder: true, label, optional })

export const isPlaceholder = (value) => Boolean(value && value.placeholder === true)

export const isHidden = (value) => isPlaceholder(value) && value.optional === true

// Drops hidden (optional, still-missing) entries from a list of values or media items.
export const visible = (items = []) => items.filter((item) => !isHidden(item) && !isHidden(item?.alt))
