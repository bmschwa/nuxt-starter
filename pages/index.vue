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
  <div class="text-center p-8">
    <ClientOnly>
      <NuxtImg 
        :src="logoPath" 
        alt="WV Logo" 
        class="h-64 w-auto mx-auto mb-8"
      />
    </ClientOnly>
    <h1 class="text-4xl font-bold text-gray-800 mb-4">In Development</h1>
    <p class="text-xl text-gray-600">....</p>
  </div>
</template>
