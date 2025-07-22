// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  devToolbar: {
    enabled: false
  },

  output: 'server',
  adapter: vercel({}),
});