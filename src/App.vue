<script setup>
import Header from "@/components/Header.vue";
import PromoBlock from "@/components/PromoBlock.vue";
import Products from "@/components/Products.vue";
import Service from "@/components/Service.vue";
import PromoBaner from "@/components/PromoBaner.vue";
import Work from "@/components/Work.vue";
import Pricing from "@/components/Pricing.vue";
import Testimonials from "@/components/Testimonials.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div>
    <Header />
    <PromoBlock />
    <Products />
    <Service />
    <PromoBaner />
    <Work />
    <Pricing />
    <Testimonials />
    <Contact />
    <Footer />
    <a href="javascript:void(0);" class="js-back-to-top back-to-top">Top</a>

  </div>
</template>

<style lang="scss">
// all styles
@import './assets/sass/main';
</style>
