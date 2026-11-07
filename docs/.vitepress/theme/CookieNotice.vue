<script setup lang="ts">
import { onMounted, ref } from 'vue'

const noticeKey = 'deblx-docs-essential-notice-v1'
const visible = ref(false)

onMounted(() => {
  try {
    visible.value = window.localStorage.getItem(noticeKey) !== 'dismissed'
  } catch {
    visible.value = true
  }
})

function dismiss() {
  visible.value = false
  try {
    window.localStorage.setItem(noticeKey, 'dismissed')
  } catch {
    // Dismiss for this page view even when storage is unavailable.
  }
}
</script>

<template>
  <aside v-if="visible" class="deblx-privacy-notice" role="note" aria-label="Privacy information">
    <div class="deblx-privacy-notice__content">
      <p>
        We use only technically necessary cookies and local storage for essential site
        functionality and security. No analytics or advertising cookies.
        <a href="https://deblx.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
      </p>
    </div>
    <button class="deblx-privacy-notice__dismiss" type="button" @click="dismiss">
      Got it
    </button>
  </aside>
</template>
