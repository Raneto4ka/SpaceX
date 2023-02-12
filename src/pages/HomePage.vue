<template>
    <main class="container main">
        <h1 class="title">
            <img
                :src="logo"
                width="500"
                class="logo"
                alt="SpaceX"
            />
        </h1>

        <h2 class="subtitle">
            {{ company.summary }}
        </h2>

        <div class="summary">
            <table class="base-table">
                <caption>Manager</caption>
                <tbody>
                    <tr>
                        <td>CEO</td>
                        <td>{{ company.ceo }}</td>
                    </tr>
                    <tr>
                        <td>COO</td>
                        <td>{{ company.coo }}</td>
                    </tr>
                    <tr>
                        <td>CTO</td>
                        <td>{{ company.cto }}</td>
                    </tr>
                    <tr>
                        <td>CTO PROPULSION</td>
                        <td>{{ company.cto_propulsion }}</td>
                    </tr>
                </tbody>
            </table>

            <table class="base-table">
                <caption>
                    Location
                </caption>
                <tbody>
                    <tr v-for="(item, name, index) in company.headquarters" :key="index">
                        <td>{{ name.toUpperCase() }}</td>
                        <td>{{ item }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
import { inject } from 'vue';
import logo from '@/assets/images/logo.svg';

export default {
    name: 'HomePage',
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
};
</script>

<style lang="scss" scoped>
    .logo {
        width: 500px;
        padding-bottom: 2rem;
    }

    .subtitle {
        margin-bottom: 2rem;
    }

    .summary {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .base-table {
        td {
            min-width: 200px;
            padding: 7px 14px;

            @media (max-width: 768px) {
                min-width: 120px;
                padding: 7px;
                font-size: $font-size-text-small;
            }
        }
    }
</style>
