<template>
    <header class="container header">
        <router-link to="/" class="logo">
            <img
                :src="logo"
                width="139"
                height="17"
                alt="SpaceX"
            />
        </router-link>

        <nav class="nav main-nav">
            <router-link
                v-for="(rocket, index) in rocketNames"
                :to="{ name: 'Rocket', params: { name: `${rocket}` }}"
                class="nav-link"
                :key="[index]"
            >
                {{rocket}}
            </router-link>
        </nav>

        <nav class="nav secondary-nav">
            <router-link to="/launches" class="nav-link">Launches</router-link>
        </nav>
    </header>
</template>

<script>
import { inject } from 'vue';
import logo from '@/assets/images/logo.svg';

export default {
    name: 'VHeader',
    setup() {
        const rockets = inject('rockets');

        return {
            rockets
        };
    },
    data() {
        return {
            logo,
        };
    },
    computed: {
        rocketNames() {
            return this.rockets?.map((item) => item.name);
        }

    }
};
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        justify-content: space-between;
    }

    .secondary-nav {
        .nav-link {
            font-size: $font-size-text-small;
            color: $grey-300;

            &.router-link-active {
                color: $active;
            }
        }
    }

    @media (max-width: 768px) {
        header {
            flex-direction: column;
            align-items: center;
        }

        .logo {
            margin-bottom: 20px;
        }
    }
</style>
