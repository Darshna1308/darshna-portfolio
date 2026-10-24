// Lists every placeholder and unconfirmed status left in the site content.
// Run before deploying to production: `npm run check:content` exits with 1 while any remain.
import { projects, labNotes } from '../src/data/projects.js'
import { site, community, services } from '../src/data/site.js'

const found = []

function walk(value, path) {
  if (value && typeof value === 'object') {
    if (value.placeholder === true) {
      found.push(`${path}: ${value.label}`)
      return
    }
    if (value.statusConfirmed === false) found.push(`${path}.status: "${value.status}" not yet confirmed`)
    if (value.confirmed === false) found.push(`${path}: drafted wording not yet confirmed`)
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

if (found.length === 0) {
  console.log('Content check passed: no placeholders or unconfirmed statuses.')
} else {
  console.log(`${found.length} item(s) still need real content:\n`)
  found.forEach((line) => console.log(`  - ${line}`))
  process.exitCode = 1
}
