import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "FlipBidd",
        short_name: "FlipBidd",
        description: "Real Estate Investment Platform",
        theme_color: "#003F79",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/logo1.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logo2_copy.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});