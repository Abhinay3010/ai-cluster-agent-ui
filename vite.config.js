// vite.config.js
const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
  base: '/ai-cluster-agent-ui/', // must match your repo name
  plugins: [react()],
});
