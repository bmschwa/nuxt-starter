<script setup>
import pageData from '@/data/index.json'
const page = ref(pageData)
//import { defineNuxtPlugin } from '#app'

definePageMeta({
  layout: "default",
});

const logoPath = '/images/wv_logo.svg'
</script>

<template>
  <div class="text-center p-4 sm:p-6 md:p-8">
    <ClientOnly>
      <div class="relative inline-block">
        <NuxtImg 
          :src="logoPath" 
          alt="WV Logo" 
          class="logo-image w-auto mx-auto"
        />
        <svg class="absolute top-0 left-0 w-full h-full" viewBox="-10 -10 120 120">
          <defs>
            <path id="curve" d="M 50,0 A 50,50 0 0,0 0,50 A 50,50 0 0,0 50,100 A 50,50 0 0,0 100,50 A 50,50 0 0,0 50,0" />
          </defs>
          <text class="curved-text">
            <textPath href="#curve" startOffset="50%" text-anchor="middle" dominant-baseline="hanging">
              In Development
            </textPath>
          </text>
        </svg>
      </div>
    </ClientOnly>
    <p class="text-lg text-gray-600">....</p>
  </div>
</template>

<style scoped>
.logo-image {
  height: clamp(16rem, 40vw, 48rem);
}

.curved-text {
  font-size: clamp(1rem, .85em, 10.5rem);
  font-weight: bold;
  fill: #1b2c5b;
  font-family: system-ui, -apple-system, sans-serif;
  letter-spacing: 0.00001em;
  transform: translateY(0.65em);
}

svg {
  pointer-events: none;
  overflow: visible;
}
</style>
