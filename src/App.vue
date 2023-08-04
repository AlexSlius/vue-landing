<script setup>
import { ref } from "vue";

import Header from "@/components/Header.vue";
import PromoBlock from "@/components/PromoBlock.vue";
import Products from "@/components/Products.vue";
import Services from "@/components/Services.vue";
import PromoBaner from "@/components/PromoBaner.vue";
import Work from "@/components/Work.vue";
import Pricings from "@/components/Pricings.vue";
import Testimonials from "@/components/Testimonials.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

import { scrollingByHasTag } from "@/helpers/scrolles.js";

const refDeviece = ref('pc');

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
  .test(navigator.userAgent)) {
    refDeviece.value = 'ph';
} else refDeviece.value = 'pc';
</script>

<template>
  <div v-addClassByScroll>
    <Header :typeDevice="refDeviece"/>
    <PromoBlock />
    <Products />
    <Services />
    <PromoBaner />
    <Work />
    <Pricings />
    <Testimonials />
    <Contact />
    <Footer />

    <button class="back-to-top" @click.prevent="scrollingByHasTag('#main')">Top</button>
  </div>
</template>

<style lang="scss">
// all styles
@import './assets/sass/main';
</style>
