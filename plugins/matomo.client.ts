import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Initialize _paq array
    window._paq = window._paq || []
    
    // Configure Matomo
    window._paq.push(['setTrackerUrl', 'https://wellvetted.matomo.cloud/matomo.php'])
    window._paq.push(['setSiteId', '1'])
    window._paq.push(['enableLinkTracking'])
    window._paq.push(['trackPageView'])
    window._paq.push(['enableHeartBeatTimer'])
    
    // Debug mode in development
    if (process.env.NODE_ENV !== 'production') {
      window._paq.push(['setDebug', true])
    }
    
    // Load the Matomo script
    const script = document.createElement('script')
    script.src = '/matomo/matomo.js'
    script.async = true
    script.defer = true
    
    // Add error handling
    script.onerror = (error) => {
      console.error('Failed to load Matomo script:', error)
    }
    
    // Add load handling
    script.onload = () => {
      console.log('Matomo script loaded successfully')
      // Verify tracking is working
      if (window._paq) {
        console.log('Matomo tracking initialized:', window._paq)
      }
    }
    
    document.head.appendChild(script)
  }
}) 