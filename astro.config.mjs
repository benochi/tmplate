import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://your-domain.example',
  output: 'static',
  integrations: [icon(), sitemap()],
  vite: { plugins: [tailwindcss()] }
})
