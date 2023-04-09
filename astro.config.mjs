import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    mdx(),
    tailwind({}),
    sitemap(),
  ],
  site: 'https://blog.firedew.eu',
  vite: {
    server: {
      watch: {
        ignored: ['**/.idea/*']
      }
    }
  }
});
