// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  experimental: { appManifest: false },
  modules: ["nuxt-icon", "@nuxt/image"],
  compatibilityDate: "2024-12-18",
  nitro: {
    routeRules: {
      '/.well-known/appspecific/com.chrome.devtools.json': {
        static: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    }
  }
});
