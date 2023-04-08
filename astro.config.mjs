import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), mdx()],
  site: 'https://blog.firedew.eu',
  vite: {
    server: {
      watch: {
        ignored: ['**/.idea/*']
      }
    }
  }
});
