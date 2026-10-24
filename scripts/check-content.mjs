// Lists every placeholder and unconfirmed status left in the site content.
// Essential items (shown on the site as a "Placeholder" stamp or "to confirm" note) make
// `npm run check:content` exit with 1. Optional items are hidden on the site and only listed.
import { projects, labNotes, STATUS } from '../src/data/projects.js'
import { site, community, services } from '../src/data/site.js'

const essential = []
const optional = []

function walk(value, path) {
  if (value && typeof value === 'object') {
    if (value.placeholder === true) {
      ;(value.optional ? optional : essential).push(`${path}: ${value.label}`)
      return
    }
    if ('status' in value && !(value.status in STATUS)) essential.push(`${path}.status: "${value.status}" has no label`)
    if (value.statusConfirmed === false) essential.push(`${path}.status: "${value.status}" not yet confirmed`)
    if (value.confirmed === false) essential.push(`${path}: drafted wording not yet confirmed`)
    for (const [key, child] of Object.entries(value)) {
      walk(child, Array.isArray(value) ? `${path}[${key}]` : `${path}.${key}`)
    }
  }
}

walk(site, 'site')
walk(community, 'community')
walk(services, 'services')
projects.forEach((p) => walk(p, `projects.${p.slug}`))
labNotes.forEach((n) => walk(n, `labNotes.${n.slug}`))

if (optional.length) {
  console.log(`${optional.length} optional item(s), hidden on the site until supplied:\n`)
  optional.forEach((line) => console.log(`  - ${line}`))
  console.log('')
}

if (essential.length === 0) {
  console.log('Content check passed: no essential placeholders or unconfirmed statuses.')
} else {
  console.log(`${essential.length} essential item(s) still need real content before launch:\n`)
  essential.forEach((line) => console.log(`  - ${line}`))
  process.exitCode = 1
}
