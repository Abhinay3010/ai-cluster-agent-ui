import { defineConfig } from "vite";       // ✅ import defineConfig
import react from "@vitejs/plugin-react"; // ✅ import React plugin

export default defineConfig({             // ✅ use defineConfig
  plugins: [react()],
  base: "/ai-cluster-agent-ui/"           // ✅ must match repo name
});
