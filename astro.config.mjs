import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    mdx(),
    sitemap(),
  ],
  site: 'https://blog.firedew.eu',
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: ['**/.idea/*']
      }
    }
  }
});
