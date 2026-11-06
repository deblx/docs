import { defineConfig } from 'vitepress'

const github = 'https://github.com/deblx/docs'
const changelog = 'https://changelog.deblx.com'
const isPreview = process.env.DEBLX_DOCS_PREVIEW === 'true'
const siteBase = isPreview ? '/docs/preview/' : '/docs/'
const siteUrl = process.env.DEBLX_DOCS_SITE_URL || 'https://deblx.github.io/docs/'

const product = (title: string, slug: string) => ({
  text: title,
  collapsed: true,
  items: [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/' + slug + '/' },
        { text: 'Installation', link: '/' + slug + '/installation' }
      ]
    },
    {
      text: 'Guides',
      collapsed: false,
      items: [
        { text: 'Features', link: '/' + slug + '/features' },
        { text: 'Usage Guide', link: '/' + slug + '/usage' }
      ]
    },
    {
      text: 'Help',
      collapsed: false,
      items: [
        { text: 'Troubleshooting', link: '/' + slug + '/troubleshooting' },
        { text: 'FAQ', link: '/' + slug + '/faq' }
      ]
    }
  ]
})

export default defineConfig({
  title: 'Deblx Documentation',
  description: 'Guides and technical documentation for Deblx Unreal Engine plugins.',
  lang: 'en-US',
  base: siteBase,
  cleanUrls: !isPreview,
  appearance: 'dark',
  lastUpdated: true,
  ignoreDeadLinks: false,
  sitemap: isPreview ? undefined : { hostname: siteUrl },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: siteBase + 'favicon.png' }],
    ['meta', { name: 'theme-color', content: '#07080d' }],
    ...(isPreview ? [['meta', { name: 'robots', content: 'noindex, nofollow' }] as const] : []),
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Deblx Documentation' }]
  ],
  transformHead: ({ pageData }) => {
    if (isPreview) return []
    const path = pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
    const url = siteUrl + path
    return [['link', { rel: 'canonical', href: url }], ['meta', { property: 'og:url', content: url }]]
  },
  themeConfig: {
    logo: '/deblx-logo.png',
    siteTitle: 'Deblx Docs',
    nav: [
      {
        text: 'Plugins',
        items: [
          { text: 'Loading Screen Pro', link: '/loading-screen-pro/' },
          { text: 'Quick Notes / ToDo', link: '/quick-notes/' },
          { text: 'Duplicate Asset Detector Pro', link: '/duplicate-asset-detector/' },
          { text: 'Asset Size Analyzer', link: '/asset-size-analyzer/' }
        ]
      },
      { text: 'Website', link: 'https://deblx.com' },
      { text: 'Changelog', link: changelog },
      { text: 'Support', link: 'https://deblx.com/help' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Choose a Plugin', link: '/getting-started' },
          { text: 'Compatibility', link: '/compatibility' },
          { text: 'Common Workflows', link: '/workflows' }
        ]
      },
      {
        text: 'Documentation',
        items: [
          product('Loading Screen Pro', 'loading-screen-pro'),
          product('Quick Notes / ToDo', 'quick-notes'),
          product('Duplicate Asset Detector Pro', 'duplicate-asset-detector'),
          product('Asset Size Analyzer', 'asset-size-analyzer')
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Glossary', link: '/glossary' },
          { text: 'Discord Verification', link: '/verification' },
          { text: 'Support Portal', link: 'https://deblx.com/help' },
          { text: 'Support & Feedback', link: '/support' },
          { text: 'Privacy', link: '/privacy' },
          { text: 'Contributing', link: '/contributing' },
          { text: 'Changelog', link: changelog }
        ]
      }
    ],
    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous', next: 'Next' },
    editLink: {
      pattern: github + '/edit/' + (isPreview ? 'vitepress-migration' : 'main') + '/docs/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdated: { text: 'Last updated' },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search documentation'
          }
        }
      }
    },
    socialLinks: [{ icon: 'github', link: github }],
    externalLinkIcon: true,
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance'
  }
})
