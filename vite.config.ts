import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// base og allowedHosts gjør at siden virker både bak Funnel-sti (etappe 1-3)
// og på eget subdomene (etappe 4). ELEV_WEB_BASE settes av provisjoneringen.
export default defineConfig({
  base: process.env.ELEV_WEB_BASE ?? "./",
  plugins: [svelte()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: true,
  },
});
