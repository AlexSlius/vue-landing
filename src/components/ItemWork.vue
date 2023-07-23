<script setup>
import { ref } from "vue";
import ModalWork from "@/components/modals/ModalWork.vue";

defineProps({
    dopClass: String,
    scrImage: String,
    dataModal: Object
});

let showModal = ref(false);

const openModal = () => {
    showModal.value = true;
}

const handleCloseModal = () => {
    showModal.value = false;
}
</script>

<template>
    <ModalWork :isShow="showModal" :closeModal="handleCloseModal" :dataModal="dataModal"/>
    <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-8 margin-b-4" :class="dopClass" @click="openModal">
        <div class="work">
            <div class="work-overlay">
                <img class="full-width img-responsive" :src="scrImage" alt="Portfolio Image">
            </div>
        </div>
    </div>
</template>