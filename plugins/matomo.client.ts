import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Initialize _paq array
    window._paq = window._paq || []
    
    // Load the Matomo script
    const script = document.createElement('script')
    script.src = '/matomo/matomo.js' // Using local script
    script.async = true
    script.defer = true
    
    // Add error handling
    script.onerror = (error) => {
      console.error('Failed to load Matomo script:', error)
    }
    
    // Add load handling
    script.onload = () => {
      console.log('Matomo script loaded successfully')
    }
    
    document.head.appendChild(script)
  }
}) 