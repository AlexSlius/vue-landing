<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import dataReviews from "@/data/dataReviews.json";

import 'swiper/css';
</script>

<template>
  <div class="content-md container">
    <div class="row">
      <div class="col-sm-9">
        <h2>Customer Reviews</h2>

        <swiper :slides-per-view="1" :space-between="20" :loop="true">
          <swiper-slide v-for="(itemReviews, index) in dataReviews" key="index">
            <blockquote class="blockquote">
              <div class="margin-b-20">{{ itemReviews.description }}</div>
              <p><span class="fweight-700 color-link">{{ itemReviews.name }}</span>, {{ itemReviews.customer }}</p>
            </blockquote>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!--// end row -->
  </div>
</template>