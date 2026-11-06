<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const names: Record<string, string> = {
  'loading-screen-pro': 'Loading Screen Pro',
  'quick-notes': 'Quick Notes / ToDo',
  'duplicate-asset-detector': 'Duplicate Asset Detector Pro',
  'asset-size-analyzer': 'Asset Size Analyzer',
  'getting-started': 'Choose a Plugin',
  compatibility: 'Compatibility',
  glossary: 'Glossary',
  verification: 'Discord Verification',
  support: 'Support'
}
const pages: Record<string, string> = {
  installation: 'Installation',
  features: 'Features',
  usage: 'Usage Guide',
  troubleshooting: 'Troubleshooting',
  faq: 'FAQ'
}
const crumbs = computed(() => {
  const path = route.path.replace(/\.html$/, '').replace(/\/+$/, '')
  const segments = path.split('/').filter(Boolean)
  if (!segments.length) return []
  const [section, page] = segments
  if (page) return [
    { text: 'Documentation', link: '/' },
    { text: names[section] || section, link: '/' + section + '/' },
    { text: pages[page] || page, link: '' }
  ]
  return [{ text: 'Documentation', link: '/' }, { text: names[section] || section, link: '' }]
})
</script>

<template>
  <nav v-if="crumbs.length" class="deblx-breadcrumbs" aria-label="Breadcrumb">
    <template v-for="(crumb, index) in crumbs" :key="index">
      <span v-if="index" class="deblx-breadcrumbs__divider" aria-hidden="true">/</span>
      <a v-if="crumb.link" :href="crumb.link">{{ crumb.text }}</a>
      <span v-else aria-current="page">{{ crumb.text }}</span>
    </template>
  </nav>
</template>
