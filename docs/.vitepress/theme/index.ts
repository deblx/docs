import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Breadcrumbs from './Breadcrumbs.vue'
import DocsFooter from './DocsFooter.vue'
import CookieNotice from './CookieNotice.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(Breadcrumbs),
      'doc-after': () => h(DocsFooter),
      'layout-bottom': () => h(CookieNotice)
    })
  }
}
