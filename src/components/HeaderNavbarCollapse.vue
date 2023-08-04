<script setup>
import { scrollingByHasTag } from "@/helpers/scrolles.js";

defineProps({
    links: {
        type: Array,
        required: true
    },
    typeDevice: {
        type: String
    },
    showMobMenu: {
        type: Boolean
    },
    closeMobMenu: {
        type: Function,
    }
});
</script>

<template>
    <div class="collapse navbar-collapse nav-collapse " :class="{ 'open': showMobMenu }">
        <div class="menu-container">
            <ul class="nav navbar-nav navbar-nav-right" v-addClassActiveLink>
                <li v-for="(itemLink, index) in  links " :key="index" class="nav-item">
                    <a class="nav-item-child nav-item-hover" :href="itemLink.path" @click.prevent="() => {
                        scrollingByHasTag(itemLink.path); ((typeDevice == 'ph') &&
                            closeMobMenu())
                    }">{{
    itemLink.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>