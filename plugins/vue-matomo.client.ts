import { defineNuxtPlugin } from '#app'
import VueMatomo from 'vue-matomo'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    // Wait for the script to be loaded
    const waitForScript = () => {
      return new Promise((resolve) => {
        if (document.querySelector('script[src="/matomo/matomo.cjs"]')) {
          resolve(true)
        } else {
          const checkInterval = setInterval(() => {
            if (document.querySelector('script[src="/matomo/matomo.cjs"]')) {
              clearInterval(checkInterval)
              resolve(true)
            }
          }, 100)
        }
      })
    }

    waitForScript().then(() => {
      nuxtApp.vueApp.use(VueMatomo, {
        host: 'https://wellvetted.matomo.cloud',
        siteId: 1,
        trackerFileName: 'matomo',
        enableLinkTracking: true,
        requireConsent: false,
        trackInitialView: true,
        disableCookies: false,
        enableHeartBeatTimer: true,
        debug: process.env.NODE_ENV !== 'production',
        domains: ['*']
      })
    })
  }
}) 