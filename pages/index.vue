<script setup>
import pageData from '@/data/index.json'
const page = ref(pageData)
//import { defineNuxtPlugin } from '#app'

definePageMeta({
  layout: "default",
});
</script>

<template>
  <div class="text-center p-8">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">🚧 Under Construction 🚧</h1>
    <p class="text-xl text-gray-600">We're working on something amazing. Please check back soon!</p>
  </div>
</template>
