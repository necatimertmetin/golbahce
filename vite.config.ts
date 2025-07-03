import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // önemli! 0.0.0.0 anlamına gelir
    port: 5173, // varsayılan port
  },
});
