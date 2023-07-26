<script setup>
defineProps({
    index: Number,
    data: {
        name: String,
        price: Number,
        des: String,
        iconClass: String,
        list: Array,
        link: String
    }
});
</script>

<template>
    <div class="col-sm-4 " :class="{ 'sm-margin-b-4': (index == 1) }">
        <div class="pricing">
            <div class="margin-b-30">
                <i class="pricing-icon " :class="data.iconClass"></i>
                <h3>{{ data.name }}<span> - $</span> {{ data.price }}</h3>
                <p>{{ data.des }}</p>
            </div>
            <ul class="list-unstyled pricing-list margin-b-50" v-if="data.list?.length > 0">
                <li class="pricing-list-item" v-for="(item, index) in data.list" :key="index">{{ item }}</li>
            </ul>
            <a :href="data.link" class="btn-theme btn-theme-sm btn-default-bg text-uppercase">Choose</a>
        </div>
    </div>
</template>