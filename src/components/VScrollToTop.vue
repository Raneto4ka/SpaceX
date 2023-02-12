<template>
    <div
        v-if="isBtnShow"
        class="v-scroll-to-top"
        @click="scrollToTop"
    >
        <span class="icon">></span>
    </div>
</template>

<script>
import { throttle } from '@/common/helpers/functions';

export default {
    name: 'VScrollToTop',

    data() {
        return {
            isBtnShow: false
        };
    },

    computed: {
        minScrollOffset() {
            return window.innerHeight * 2;
        }
    },

    mounted() {
        this.checkVisibility();
        document.addEventListener('scroll', throttle(this.checkVisibility, 300));
    },

    beforeDestroy() {
        document.removeEventListener('scroll', this.checkVisibility);
    },


    methods: {
        checkVisibility() {
            this.isBtnShow = window.scrollY >= this.minScrollOffset;
        },

        scrollToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        },
    }
};
</script>

<style lang="scss" scoped>
.v-scroll-to-top {
    position: fixed;
    right: 24px;
    bottom: 80px;
    z-index: 2;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: $grey-300;
    font-size: 36px;
    font-weight: $font-weight-bold;
    line-height: 50px;
    text-align: center;
    color: $black;
    transform: rotate(-90deg);
    cursor: pointer;

    &:hover {
        .icon {
            color: $white;
        }
    }
}
</style>
