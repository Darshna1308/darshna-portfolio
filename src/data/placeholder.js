// A value that is still missing. Rendered with a visible "Placeholder" stamp and
// reported by `npm run check:content` so nothing temporary ships unnoticed.
export const ph = (label) => ({ placeholder: true, label })

export const isPlaceholder = (value) => Boolean(value && value.placeholder === true)
