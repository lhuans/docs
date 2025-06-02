<script setup lang="ts">
import { useData, inBrowser } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import Giscus from '@giscus/vue';
import { watch } from 'vue';

const { page, isDark } = useData();
const { Layout } = DefaultTheme;
watch(isDark, (dark) => {
  if (!inBrowser) return;

  const iframe = document
    .querySelector('giscus-widget')
    ?.shadowRoot?.querySelector('iframe');

  iframe?.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: dark ? 'dark' : 'light' } } },
    'https://giscus.app'
  );
});
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <Giscus
        :key="page.filePath"
        repo="lhuans/docs"
        repo-id="R_kgDOOqP84g"
        category="General"
        category-id="DIC_kwDOOqP84s4Cq7iZ"
        mapping="pathname"
        strict="0"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="bottom"
        theme="preferred_color_scheme"
        lang="zh-CN"
        loading="lazy"
        crossorigin="anonymous"
      />
    </template>
  </DefaultTheme.Layout>
</template>
