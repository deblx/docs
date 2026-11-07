<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <footer class="deblx-doc-footer">
    <div class="deblx-doc-footer__links">
      <a href="https://deblx.com" target="_blank" rel="noopener noreferrer">Deblx</a>
      <a href="https://changelog.deblx.com" target="_blank" rel="noopener noreferrer">Changelog</a>
      <a href="https://deblx.com/help" target="_blank" rel="noopener noreferrer">Support</a>
      <a href="https://deblx.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
      <a href="https://github.com/deblx/docs" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
    <div class="deblx-doc-footer__meta">
      <span>© {{ new Date().getFullYear() }} Deblx. All rights reserved.</span>
      <span>Hosted on <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">GitHub Pages</a></span>
    </div>
  </footer>
</template>
