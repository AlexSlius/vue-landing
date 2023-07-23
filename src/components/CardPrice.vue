<script setup>
defineProps({
    data: {
        iconClass: String,
        name: String,
        des: String,
        href: String
    }
});
</script>

<template>
    <div class="col-sm-4">
        <div class="service" data-height="height">
            <div class="service-element">
                <i class="service-icon" :class="data.iconClass"></i>
            </div>
            <div class="service-info">
                <h3>{{ data.name }}</h3>
                <p class="margin-b-5">{{ data.des }}</p>
            </div>
            <a :href="data.href" class="content-wrapper-link"></a>
        </div>
    </div>
</template>