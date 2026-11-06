const targets = ['https://deblx.com/press/', 'https://deblx.com/'];
const origin = 'https://deblx.com';
const urls = new Set();
for (const target of targets) {
  try {
    const response = await fetch(target, { redirect: 'follow', headers: { 'User-Agent': 'DeblxDocs/1.0 (+https://github.com/deblx/docs)' } });
    const source = await response.text();
    console.log('PAGE', target, 'STATUS', response.status, 'BYTES', source.length, 'CONTENT_TYPE', response.headers.get('content-type'));
    const attr = /(?:src|href)=["']([^"'<>]+)["']/gi;
    for (const match of source.matchAll(attr)) {
      const href = match[1];
      if (/\.js(?:[?#]|$)|\.png(?:[?#]|$)|\.svg(?:[?#]|$)|\.webp(?:[?#]|$)|favicon|press|logo|icon/i.test(href)) {
        console.log('ASSET_REFERENCE', href);
      }
      if (/\.js(?:[?#]|$)/.test(href)) urls.add(new URL(href, origin).href);
    }
    for (const term of ['Download PNG', 'Help & Support', 'press-logo', 'help.deblx.com', 'servicedesk']) {
      const at = source.toLowerCase().indexOf(term.toLowerCase());
      if (at >= 0) console.log('PAGE_MATCH', term, source.slice(Math.max(0, at - 250), at + 350).replace(/\s+/g, ' '));
    }
  } catch (e) { console.log('PAGE_ERROR', target, String(e)); }
}
for (const url of [...urls].slice(0, 8)) {
  try {
    const response = await fetch(url);
    const source = await response.text();
    console.log('BUNDLE', url, 'STATUS', response.status, 'BYTES', source.length);
    for (const term of ['Download PNG', 'Help & Support', 'press kit', 'deblx-logo', 'help.deblx.com', 'servicedesk', 'logo-512', 'favicon']) {
      const at = source.toLowerCase().indexOf(term.toLowerCase());
      if (at >= 0) console.log('BUNDLE_MATCH', term, source.slice(Math.max(0, at - 230), at + 400).replace(/\s+/g, ' '));
    }
    const candidates = [...source.matchAll(/[\x22\x27\x60]([^\x22\x27\x60<>\s]{1,180}\.(?:png|svg|webp|ico))(?:[?#][^\x22\x27\x60<>\s]*)?[\x22\x27\x60]/gi)].map(m=>m[1]);
    console.log('IMAGE_CANDIDATES', JSON.stringify([...new Set(candidates)].slice(0, 75)));
  } catch (e) { console.log('BUNDLE_ERROR', url, String(e)); }
}
