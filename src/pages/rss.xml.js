import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'FireDew | Blog',
    description: 'My tech blogs',
    site: 'https://blog.firedew.eu',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md(|x)')),
    customData: `<language>en-us</language>`,
  });
}
