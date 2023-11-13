import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/AllergensInHumanMilk/',
  plugins: [svelte()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "./src/theme/_smui-theme.scss";
        `
      }
    }
  }
})
