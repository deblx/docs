import { mkdir, writeFile, rm } from 'node:fs/promises'
import { join } from 'node:path'

const isPreview = process.env.DEBLX_DOCS_PREVIEW === 'true'
if (!isPreview) {
  const root = 'docs/public'
  const prefix = '/docs/'
  const paths = ['verification', 'getting-started', 'compatibility', 'glossary', 'support', 'privacy', 'contributing', 'workflows',
    ...['loading-screen-pro','quick-notes','duplicate-asset-detector','asset-size-analyzer'].flatMap(slug =>
      ['installation','features','usage','troubleshooting','faq'].map(section=>slug+'/'+section))]
  for (const path of paths) {
    const dir = join(root,path)
    await mkdir(dir, { recursive:true })
    const url = prefix + path + '.html'
    const html = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url='+url+'"><link rel="canonical" href="'+url+'"></head><body><p>Moved to <a href="'+url+'">'+url+'</a>.</p></body></html>'
    await writeFile(join(dir,'index.html'),html)
  }
  await mkdir(join(root,'markdown-page'), {recursive:true})
  await writeFile(join(root,'markdown-page','index.html'), '<!doctype html><html><head><meta http-equiv="refresh" content="0;url=/docs/"></head><body><a href="/docs/">Documentation</a></body></html>')
}
