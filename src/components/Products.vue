<script setup>
import Product from "@/components/Product.vue";

import dataProducts from "@/data/dataProducts.json";
</script>

<template>
  <div id="products">
    <div class="container content-lg">
      <div class="row text-center margin-b-40">
        <div class="col-sm-6 col-sm-offset-3">
          <h2>Latest Products</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua
            enim minim veniam exercitation</p>
        </div>
      </div>

      <div class="row">
        <Product v-for="item in dataProducts" :key="item.id" :data="item" />
      </div>
    </div>

    <div class="container-full-width">
      <div class="row row-space-2">
        <div class="col-sm-6 sm-margin-b-4">
          <img class="img-responsive" src="@/assets/img/970x647/01.jpg" alt="Image">
        </div>
        <div class="col-sm-6">
          <img class="img-responsive" src="@/assets/img/970x647/03.jpg" alt="Image">
        </div>
      </div>
    </div>
  </div>
</template>