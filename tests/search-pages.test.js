import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { industries, cityIndustries } from '../src/data/industries.js'
import { cities } from '../src/data/cities.js'
import { getMetadata } from '../src/data/metadata.js'

test('industry associations and prerendered pages have valid routes, content and canonical metadata', () => {
  for (const city of cities) {
    assert.ok(cityIndustries[city.slug], city.slug)
    for (const index of cityIndustries[city.slug].slugs) assert.ok(industries[index])
  }
  for (const industry of industries) {
    const path = `/industries/${industry.slug}`
    const html = readFileSync(`dist${path}/index.html`, 'utf8')
    assert.ok(html.includes(industry.name.replaceAll('&','&amp;')))
    assert.ok(html.includes(getMetadata(path).canonical))
    assert.ok(html.includes('question-3'))
    assert.ok(!html.includes('noindex'))
  }
})
