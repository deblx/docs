import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

const source = 'docs'
const expected = [
  'index.md', 'verification.md', 'support.md',
  ...['loading-screen-pro', 'quick-notes', 'duplicate-asset-detector', 'asset-size-analyzer'].flatMap((slug) =>
    ['index.md', 'installation.md', 'features.md', 'usage.md', 'troubleshooting.md', 'faq.md'].map((page) => `${slug}/${page}`)
  )
]
const missing = []
for (const path of expected) {
  try {
    const text = await readFile(join(source, path), 'utf8')
    if (!text.trim()) missing.push(path)
  } catch {
    missing.push(path)
  }
}
if (missing.length) {
  console.error('Missing or empty documentation files:', missing.join(', '))
  process.exitCode = 1
} else {
  console.log(`Documentation inventory OK: ${expected.length} pages`)
}
