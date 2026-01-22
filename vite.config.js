// vite.config.js
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
  base: '/ai-cluster-agent-ui/',  // important for GitHub Pages
  plugins: [react()],
});
