<template>
  <header class="py-6">
    <div class="container mx-auto px-4">
      <div class="flex justify-end">
        <nav class="space-x-4">
          <!-- <a href="/" class="text-gray-600 hover:text-gray-800">Home</a> -->
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const handleImageError = (e) => {
  console.error('Logo failed to load:', e);
  // Optionally set a fallback image
  // e.target.src = '/images/fallback-logo.png';
}
</script> 