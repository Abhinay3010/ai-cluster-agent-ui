// vite.config.js (CommonJS for GitHub Actions)
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
  base: '/ai-cluster-agent-ui/',
  plugins: [react()],
});
