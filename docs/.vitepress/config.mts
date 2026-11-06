import { defineConfig } from 'vitepress'

const github = 'https://github.com/deblx/docs'
const changelog = 'https://changelog.deblx.com'

const product = (title: string, slug: string) => ({
  text: title,
  collapsed: true,
  items: [
    { text: 'Overview', link: `/${slug}/` },
    { text: 'Installation', link: `/${slug}/installation` },
    { text: 'Features', link: `/${slug}/features` },
    { text: 'Usage Guide', link: `/${slug}/usage` },
    { text: 'Troubleshooting', link: `/${slug}/troubleshooting` },
    { text: 'FAQ', link: `/${slug}/faq` }
  ]
})

export default defineConfig({
  title: 'Deblx Documentation',
  description: 'Guides and technical documentation for Deblx Unreal Engine plugins.',
  lang: 'en-US',
  base: '/',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,
  sitemap: { hostname: 'https://docs.deblx.com/' },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#07080d' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Deblx Documentation' }]
  ],
  themeConfig: {
    siteTitle: 'Deblx Docs',
    nav: [
      { text: 'Documentation', link: '/' },
      { text: 'Website', link: 'https://deblx.com' },
      { text: 'Changelog', link: changelog },
      { text: 'Support', link: '/support' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Support & Resources', link: '/support' },
          { text: 'Discord Verification', link: '/verification' }
        ]
      },
      {
        text: 'Plugin Documentation',
        items: [
          product('Loading Screen Pro', 'loading-screen-pro'),
          product('Quick Notes / ToDo', 'quick-notes'),
          product('Duplicate Asset Detector Pro', 'duplicate-asset-detector'),
          product('Asset Size Analyzer', 'asset-size-analyzer')
        ]
      }
    ],
    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous', next: 'Next' },
    editLink: {
      pattern: github + '/edit/main/docs/:path',
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
