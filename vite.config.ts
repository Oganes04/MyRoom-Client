import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate', // Автоматическая регистрация service worker
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'MyRoom',
      short_name: 'MyRoom',
      description: 'client',
      theme_color: '#ffffff',
      display: "fullscreen"
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: true, // Включить поддержку PWA в режиме разработки
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})