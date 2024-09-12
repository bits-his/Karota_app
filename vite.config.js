import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    allowNodeBuiltins: true,
  },
  server: {
    host: true, // Makes the server listen on all network interfaces
    port: 5173, // Default port; you can change if needed
  },
  plugins: [react()],
});

