import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The project root is the Gift folder, so the user's `Images/` and `Music/`
// folders sit right alongside this config and are easy to reference.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
