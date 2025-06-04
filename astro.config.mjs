import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://chocolive24.github.io/',
  sitemap: {
    hostname: 'https://chocolive24.github.io/',
  },
  integrations: [mdx(), sitemap(), tailwind()],
  vite: {
    server: {
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.endsWith('.pdf')) {
            res.setHeader('Content-Type', 'application/pdf');
          }
          next();
        });
      },
    },
  },
});
