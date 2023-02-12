<template>
    <main v-if="currentRocket" class="container rocket-page">
        <h1 class="h1">{{ currentRocket.name }}</h1>

        <h2 class="subtitle">
            {{ currentRocket.description }}
        </h2>

        <div class="wrapper-rocket-features">
            <div class="rocket-features">
                <div class="rocket-feature rocket-height">
                    <div class="label">HEIGHT</div>

                    <div class="number">
                        <div class="nowrap">
                            <span class="biggest">{{ currentRocket.height.meters }}</span> m /
                        </div>

                        <span class="smallest nowrap">{{ currentRocket.height.feet }} ft</span>
                    </div>
                </div>

                <div class="rocket-feature rocket-diameter">
                    <div class="label">DIAMETER</div>

                    <div class="number">
                        <div class="nowrap">
                            <span class="biggest">{{ currentRocket.diameter.meters }}</span> m /
                        </div>

                        <span class="smallest nowrap">{{ currentRocket.diameter.feet }} ft</span>
                    </div>
                </div>

                <div class="rocket-feature rocket-mass">
                    <div class="label">MASS</div>

                    <div class="number">
                        <div class="nowrap">
                            <span class="biggest">{{ currentRocket.mass.kg }}</span> kg /
                        </div>

                        <span class="smallest nowrap">{{ currentRocket.mass.lb }} lb</span>
                    </div>
                </div>

                <ul class="rocket-feature rocket-payload">
                    <li v-for="(item, index) in currentRocket.payload_weights" class="payload-item" :key="index">
                        <div class="label">PAYLOAD TO {{ item.id.toUpperCase() }}</div>

                        <div class="number">
                            <div class="nowrap">
                                <span class="biggest">{{ item.kg }}</span> kg /
                            </div>

                            <span class="smallest nowrap">{{ item.lb }} lb</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="wrapper-rocket-img">
                <img
                    :src="srcImage"
                    :alt="currentRocket.name"
                    class="rocket-img"
                />
            </div>
        </div>
    </main>
</template>

<script>
import { inject } from 'vue';
import { ROCKETS } from '@/common/constants/rockets';

export default {
    name: 'RocketPage',
    setup() {
        const rockets = inject('rockets');

        return {
            rockets
        };
    },
    data() {
        return {
            ROCKETS,
        };
    },
    computed: {
        currentRocket() {
            const [rocket] = this.rockets?.filter((item) => {
                return item.name === this.$route.params.name;
            });

            return rocket;
        },
        srcImage() {
            if (!this.currentRocket) {
                return;
            }

            const rocketName = ROCKETS[this.currentRocket.name];
            return require(`@/assets/images/rockets/${rocketName}.png`);
        }
    },
};
</script>

<style lang="scss" scoped>
.h1 {
    margin-bottom: 2rem;
    text-align: center;
}

.wrapper-rocket-features {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    text-align: left;
}

.rocket-features {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;

    @media (max-width: 768px) {
        order: 2;
    }
}

.rocket-feature {
    margin-top: 3rem;
}

.wrapper-rocket-img {
    margin-top: 3rem;
    margin-right: 1.5rem;
    align-self: flex-start;
}

.rocket-img {
    max-height: 800px;

    @media (max-width: 768px) {
        max-height: 550px;
    }
}

.payload-item {
    margin-bottom: 2rem;
}
</style>
