import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInclude: [
      "**/*.js",
      "**/*.css",
      "**/*.html",
      "**/*.png",
      "**/*.svg",
      "**/*.jpg",
      "sw.js",
    ],
  },
  server: {
    port: 3000,
    proxy: {
      // cuando las peticiones empiecen con '/api', redirigir a la API de Belvo
      '/api': {
        target: 'https://sandbox.belvo.com', // URL de la API de Belvo
        changeOrigin: true, // necesario para virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  base: "./",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },

      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
      manifest: {
        name: "Belvo Bank",
        short_name: "Belvo Bank",
        theme_color: "#ffffff",
        scope: "/Frontend-EspinaNegra/#/",
        start_url: "/Frontend-EspinaNegra/#/",
        icons: [
          {
            src: "logoEspinaNegra.png", // <== don't add slash, for testing
            sizes: "5060x2154",
            type: "image/png",
          },
          {
            src: "logoEspinaNegra.png", // <== don't add slash, for testing
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logoEspinaNegra.png", // <== don't add slash, for testing
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "logoEspinaNegra.png", // <== don't remove slash, for testing
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable_512.png", // <== don't add slash, for testing
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
