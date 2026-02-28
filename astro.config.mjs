// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://danielsocra.github.io',
  base: 'become1-de',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  },
  server: {
    host: '0.0.0.0',
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: 'all',
  },
});
