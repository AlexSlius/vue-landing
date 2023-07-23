<script setup>
import ModalLayout from "./ModalLayout.vue";

defineProps({
    isShow: {
        type: Boolean
    },
    closeModal: {
        type: Function
    },
    dataModal: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <ModalLayout :isShow="isShow" :closeModal="closeModal">
        <div class="work-popup-content">
            <div class="margin-b-30">
                <h3 class="margin-b-5">{{ dataModal.name }}</h3>
                <span>{{ dataModal.dopInfo }}</span>
            </div>
            <div class="row">
                <div class="col-sm-8 work-popup-content-divider sm-margin-b-20">
                    <div class="margin-t-10 sm-margin-t-0">
                        <div v-html="dataModal.desc"></div>
                        <ul class="list-inline work-popup-tag" v-if="dataModal.tags?.length > 0">
                            <li class="work-popup-tag-item" v-for="(itemTag, index) in dataModal.tags" :key="index">
                                <a class="work-popup-tag-link" :href="itemTag.href">{{ itemTag.name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-4" v-if="dataModal.projects?.length > 0">
                    <div class="margin-t-10 sm-margin-t-0">
                        <p class="margin-b-5" v-for="(itemProject, index) in dataModal.projects" :key="index"><strong>{{
                            itemProject.name }}</strong> {{ itemProject.namePiople }}</p>
                    </div>
                </div>
            </div>
        </div>
    </ModalLayout>
</template>