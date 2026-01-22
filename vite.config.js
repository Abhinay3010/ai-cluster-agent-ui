import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ai-cluster-agent-ui/', // important for GitHub Pages
  plugins: [react()]
})
