<script setup>
defineProps({
    data: {
        scrImage: String,
        name: String,
        type: String,
        href: String,
        des: String
    }
});
</script>

<template>
    <div class="col-sm-4 sm-margin-b-50">
        <div class="margin-b-20">
            <img class="img-responsive wow fadeIn" :src="data.scrImage" alt="Latest Products Image" data-wow-duration=".3"
                data-wow-delay=".1s">
        </div>
        <h4>
            <a :href="data.href">{{ data.name }}</a>
            <span class="text-uppercase margin-l-20">{{ data.type }}</span>
        </h4>
        <p>{{ data.des }}</p>
        <a class="link" :href="data.href">Read More</a>
    </div>
</template>