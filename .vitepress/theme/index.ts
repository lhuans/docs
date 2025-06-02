import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'


export default {
  Layout,
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
  }
} satisfies Theme
