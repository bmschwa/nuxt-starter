<script setup>
import pageData from '@/data/index.json'
const page = ref(pageData)

//import Vue from 'vue'
//import VueMatomo from 'vue-matomo'

/*

    .use(VueMatomo, {
            // Configure your matomo server and site by providing
            host: 'https://wellvetted.matomo.cloud/',
            siteId: 1,
        })
        .mount('#app')

        window._paq.push(['trackPageView']);
*/
definePageMeta({
  layout: "default",
});
</script>

<template>
  <Container>
    <Hero
      :title="page.hero.title"
      :description="page.hero.description"
      :image="page.hero.image"
      :imageAlt="page.hero.imageAlt"
      :buttons="page.hero.buttons"
    ></Hero>
    <Logos :title="page.logos.title" :icons="page.logos.icons"></Logos>
    <Features
      :title="page.features.title"
      :description="page.features.description"
      :items="page.features.items"
    ></Features>
    <Testimonials
      :title="page.testimonials.title"
      :description="page.testimonials.description"
      :items="page.testimonials.items"
    ></Testimonials>
    <Cta
      :title="page.cta.title"
      :description="page.cta.description"
      :buttons="page.cta.buttons"
    ></Cta>
  </Container>
</template>
