// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image'
  ],
  experimental: { appManifest: false },
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
