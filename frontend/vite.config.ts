import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    proxy: {
      // Proxy all API requests to backend
      '/api': {
        target: 'https://hmscity.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/auth': {
        target: 'https://hmscity.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/doctors': {
        target: 'https://hmscity.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/patients': {
        target: 'https://hmscity.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/bills': {
        target: 'https://hmscity.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/dashboard': {
        target: 'https://hmscity.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/reports': {
        target: 'https://hmscity.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})