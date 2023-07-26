<script setup>
import CardPricing from "@/components/CardPricing.vue";
import dataPricings from "@/data/dataPricing.json";
</script>

<template>
    <div id="pricing">
        <div class="bg-color-sky-light">
            <div class="content-lg container">
                <div class="row row-space-2">
                    <CardPricing v-for="(itemCard, index) in dataPricings" :key="index" :index="index" :data="itemCard" />
                </div>
            </div>
        </div>
    </div>
</template>