import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ai-cluster-agent-ui/',   // <-- replace with your repo name
  plugins: [react()],
})
