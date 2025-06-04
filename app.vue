<script setup>
useHead({
  htmlAttrs: { lang: "en-US" },
  title: "Under Construction",
  meta: [
    {
      name: "description",
      content: "Our website is under construction. Please check back soon!",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/images/wv_logo.svg'
    }
  ],
  bodyAttrs: {
    class: "font-sans",
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
