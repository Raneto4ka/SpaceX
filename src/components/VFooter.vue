<template>
    <footer class="container footer">
        <img :src="logo" class="logo" alt="SpaceX" />

        <nav class="nav main-nav">
            <a
                :href="getLinks.twitter"
                target="_blank"
                class="nav-link"
                rel="noopener noreferrer"
            >
                Elon Musk Twitter
            </a>
            <a
                :href="getLinks.twitter"
                target="_blank"
                class="nav-link"
                rel="noopener noreferrer"
            >
                Twitter
            </a>
            <a
                :href="getLinks.flickr"
                target="_blank"
                class="nav-link"
                rel="noopener noreferrer"
            >
                Flickr
            </a>
            <a
                :href="getLinks.website"
                target="_blank"
                class="nav-link"
                rel="noopener noreferrer"
            >
                Website
            </a>
        </nav>
    </footer>
</template>

<script>
import { inject } from 'vue';
import logo from '@/assets/images/logo.svg';

export default {
    name: 'VFooter',
    setup() {
        const company = inject('company');

        return {
            company
        };
    },
    data() {
        return {
            logo,
        };
    },
    computed: {
        getLinks() {
            const links = this.company?.links || {};

            return links;
        }
    }
};
</script>

<style lang="scss" scoped>
    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .logo {
        margin-bottom: 1.5rem;
    }

</style>
