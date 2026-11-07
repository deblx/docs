import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

if (process.env.DEBLX_DOCS_PREVIEW !== 'true') {
  const root = join('docs', 'public')
  const pages = ['verification', 'getting-started', 'compatibility', 'glossary', 'support', 'privacy', 'contributing', 'workflows',
    ...['loading-screen-pro', 'quick-notes', 'duplicate-asset-detector', 'asset-size-analyzer'].flatMap(slug =>
      ['installation', 'features', 'usage', 'troubleshooting', 'faq'].map(section => slug + '/' + section))]

  const redirect = url =>
    '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex,follow"><meta http-equiv="refresh" content="0;url=' +
    url + '"><link rel="canonical" href="https://docs.deblx.com' + url +
    '"></head><body><p>Moved to <a href="' + url + '">' + url + '</a>.</p></body></html>'

  await mkdir(join(root, 'docs'), { recursive: true })
  await writeFile(join(root, 'docs', 'index.html'), redirect('/'))

  for (const path of pages) {
    const newRoute = '/' + path
    const oldPrefixed = join(root, 'docs', path)
    await mkdir(oldPrefixed, { recursive: true })
    await writeFile(join(oldPrefixed, 'index.html'), redirect(newRoute))

    const oldDirectory = join(root, path)
    await mkdir(oldDirectory, { recursive: true })
    await writeFile(join(oldDirectory, 'index.html'), redirect(newRoute))
  }

  await mkdir(join(root, 'markdown-page'), { recursive: true })
  await writeFile(join(root, 'markdown-page', 'index.html'), redirect('/'))
}
