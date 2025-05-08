import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.json'] // Add this resolve block
  },
  server: {
    port: 5173, // Explicitly set port (optional)
    open: true // Automatically open browser (optional)
  }
})
