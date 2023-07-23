<script setup>
import ModalLayout from "./ModalLayout.vue";

defineProps({
    isShow: {
        type: Boolean
    },
    videLink: {
        type: String
    },
    closeModal: {
        type: Function
    }
});

</script>

<template>
    <ModalLayout :isShow="isShow" :closeModal="closeModal">
        <div>
            <iframe width="560" height="315" :src="videLink" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </ModalLayout></template>