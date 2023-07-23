<script setup>
import CardService from "@/components/CardPrice.vue";
import dataServices from "@/data/dataServices.json";
</script>

<template>
  <div id="service">
    <div class="bg-color-sky-light" data-auto-height="true">
      <div class="content-lg container">
        <div class="margin-b-4">
          <div class="row row-space-2 ">
            <CardService v-for="item in dataServices" :key="item.id" :data="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>