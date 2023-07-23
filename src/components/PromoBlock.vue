<script setup>
import Modal from "@/components/modals/ModalVideo.vue";
import { ref } from "vue";

const isShowModal = ref(false);

const handleClickOpenModal = () => {
  isShowModal.value = true;
}

const handleCloseModal = () => {
  isShowModal.value = false;
}

</script>

<template>
  <Modal :isShow="isShowModal" :closeModal="handleCloseModal" :videLink="'https://www.youtube.com/embed/6M07ZrKn7yM'" />
  <div class="promo-block" id="main">
    <div class="container">
      <div class="margin-b-40">
        <h1 class="promo-block-title">Digital Product Agency.</h1>
        <p class="promo-block-text">Look no further. You came to the right ... place</p>
      </div>
      <a class="js_popup-youtube btn-theme btn-theme-md btn-white-bg text-uppercase"
        href="https://www.youtube.com/watch?v=0qisGSwZym4" title="Intro Video" @click.prevent="handleClickOpenModal">
        <i class="btn-icon icon-control-play"></i>
        Watch Intro Video</a>
    </div>
  </div>
</template>