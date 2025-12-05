import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the root directory
  const env = loadEnv(mode, process.cwd(), '')
  
  // Use environment variable or default to your backend URL
  const backendUrl = env.VITE_BACKEND_URL || 'https://hmscity.onrender.com'
  
  console.log(`🚀 Using backend URL: ${backendUrl}`)
  
  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: 5173,
      proxy: {
        // Proxy all API requests to backend using the env variable
        '/api': {
          target: backendUrl,
          changeOrigin: true,
          secure: false,
        },
        '/auth': {
          target: backendUrl,
          changeOrigin: true,
          secure: false,
        },
        '/doctors': {
          target: backendUrl,
          changeOrigin: true,
          secure: false,
        },
        '/patients': {
          target: backendUrl,
          changeOrigin: true,
          secure: false,
        },
        '/bills': {
          target: backendUrl,
          changeOrigin: true,
          secure: false,
        },
        '/dashboard': {
          target: backendUrl,
          changeOrigin: true,
          secure: false,
        },
        '/reports': {
          target: backendUrl,
          changeOrigin: true,
          secure: false,
        }
      }
    },
    // Optional: Make env variables available to your React app
    define: {
      'process.env.VITE_BACKEND_URL': JSON.stringify(backendUrl)
    }
  }
})