<template>
    <div class="wrapper-app">
        <v-header />
        <router-view />
        <v-footer />
    </div>
</template>

<script>
import { provide, readonly } from 'vue';
import { fetchData } from '@/hooks/fetchData';
import VHeader from './components/VHeader.vue';
import VFooter from './components/VFooter.vue';

export default {
    name: 'App',
    components: {
        VHeader,
        VFooter
    },
    setup() {
        const { dataApi: company } = fetchData('company');

        const { dataApi: rockets } = fetchData('rockets');

        provide('company', readonly(company));
        provide('rockets', readonly(rockets));

        return {
            company,
            rockets,
        };
    },
};
</script>

<style lang="scss" scoped>
    .wrapper-app {
        position: relative;
        background-color: $black;
        background-position: top center;
        background-repeat: repeat;
        background-size: auto;
        background-image: url('@/assets/images/space-bg.jpg');
    }
</style>
