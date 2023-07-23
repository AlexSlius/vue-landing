<script setup>
import IocnX from "@/svgIcons/IconX.vue";
defineProps({
    isShow: {
        type: Boolean,
    },
    closeModal: {
        type: Function
    }
});
</script>


<template>
    <Transition v-if="isShow">
        <div class="hystmodal">
            <div class="hystmodal__wrap">
                <div class="hystmodal__opas" @click.prevent="closeModal"></div>
                <div class="hystmodal__window" role="dialog" aria-modal="true">
                    <div class="hystmodal__top">
                        <button class="hystmodal__close" @click.prevent="closeModal">
                            <IocnX />
                        </button>
                    </div>
                    <div class="hystmodal__main">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped lang="scss">
.hystmodal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    z-index: 99999;
    padding: 30px 0;
}

.hystmodal__opas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 200;
}

.hystmodal__wrap {
    flex-shrink: 0;
    flex-grow: 0;
    width: 100%;
    min-height: 100%;
    margin: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    position: relative;
}

.hystmodal__window {
    margin: 50px 0;
    flex-shrink: 0;
    flex-grow: 0;
    background: #fff;
    width: 600px;
    max-width: 100%;
    overflow: visible;
    padding: 20px;
    position: relative;
    z-index: 2000;
}

.hystmodal__top {
    display: flex;
    justify-content: flex-end;
}

.hystmodal__close {
    width: 20px;
    height: 20px;
    border: none;
    cursor: pointer;
    background: transparent;
    padding: 0;

    svg {
        width: 100%;
        height: 100%;
        transition: 0.4s;
        stroke: #F73B3B;
    }

    &:hover {
        svg {
            stroke: blue;
        }
    }
}

.hystmodal__main {
    margin-top: 20px;
}
</style>