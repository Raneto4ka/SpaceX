<template>
    <main class="container launches-page">
        <h1 class="h1">Launches</h1>

        <div class="launches-stat">
            <div v-for="(number, key, index) in launchesStat" class="stat-item" :key="index">
                <div class="number" :class="{ active: key === chosenSection }">
                    <span class="biggest">{{ number }}</span>
                </div>
                <div class="label" :class="{ active: key === chosenSection }">
                    {{ key.replace(/([A-Z])/g, ' $1').toUpperCase() }}
                </div>
                <a
                    href="#"
                    class="stat-link"
                    :class="{ disable: key === chosenSection }"
                    @click.prevent="loadMoreInfo(key)"
                >
                    See all
                </a>
            </div>
        </div>

        <div v-if="isInfoShow" class="launches-info" :class="chosenSection">
            <div
                v-for="(launch, index) in this[`${chosenSection}`]"
                class="launch-card"
                :key="index"
            >
                <h3 class="h3">{{ launch.name }}</h3>
                <p>{{ setDataLaunch(launch.date_unix) }}</p>
                <p>{{ launch.details }}</p>
            </div>
        </div>

        <div v-else class="wrapper-responsive-video">
            <video
                autoPlay
                loop
                muted
                class="responsive-video"
                :poster="poster"
            >
                <source type="video/mp4" src="https://www.spacex.com/media/mission_reusability.mp4" />
                <source type="video/webm" src="https://www.spacex.com/media/mission_reusability.webm" />
            </video>
        </div>

        <v-scroll-to-top />
    </main>
</template>

<script>
import { fetchData } from '@/hooks/fetchData';
import poster from '@/assets/images/poster.jpg';
import VScrollToTop from '@/components/VScrollToTop';

export default {
    name: 'LaunchesPage',
    components: {
        VScrollToTop,
    },
    setup() {
        const { dataApi: launches } = fetchData('launches');

        return {
            launches,
        };
    },
    data() {
        return {
            poster,
            launchesStat: {
                totalLaunches: 0,
                successfulLaunches: 0,
                unsuccessfulLaunches: 0,
                upcomingLaunches: 0
            },
            isInfoShow: false,
            chosenSection: ''
        };
    },
    computed: {
        totalLaunches() {
            const totalLaunches = this.launches?.filter((item) => {
                return !item.upcoming;
            });

            return totalLaunches;
        },
        successfulLaunches() {
            const successfulLaunches = this.launches?.filter((item) => {
                return item.success;
            });

            return successfulLaunches;
        },
        unsuccessfulLaunches() {
            const unsuccessfulLaunches = this.launches?.filter((item) => {
                return !item.success && !item.upcoming;
            });

            return unsuccessfulLaunches;
        },
        upcomingLaunches() {
            const upcomingLaunches = this.launches?.filter((item) => {
                return item.upcoming;
            });

            return upcomingLaunches;
        },
    },
    watch: {
        launches() {
            for (const launch in this.launchesStat) {
                this.startAnimation(launch);
            }
        }
    },
    methods: {
        startAnimation(destination) {
            const timeAnimation = 1000;
            const step = 1;

            let count = 0;
            const delay = Math.round(timeAnimation / (this[destination].length / step));

            const interval = setInterval(() => {
                count += step;

                if (count > this[destination].length) {
                    clearInterval(interval);
                    return;
                }

                this.launchesStat[destination] = count;
            }, delay);
        },

        loadMoreInfo(value) {
            this.isInfoShow = true;
            this.chosenSection = value;
        },

        setDataLaunch(data) {
            const newData = new Date(data * 1000);
            const result = newData.toString().substring(4, 15).replace(/\s([0-9]{4})/g, ', $1');

            return result;
        }
    }
};
</script>

<style lang="scss" scoped>
    h1 {
        text-align: center;
    }

    .number,
    .label {
        &.active {
            color: $active;
        }
    }

    .launches-page {
        min-height: 70vh;
        display: flex;
        flex-direction: column;
    }

    .wrapper-responsive-video {
        text-align: center;
    }

    .responsive-video {
        margin: 0 auto;
        width: 600px;
        height: 100%;

        @media (max-width: 768px) {
            display: none;
        }
    }

    .launches-stat {
        margin-top: 3rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: center;

        @media (max-width: 768px) {
            flex-direction: column;
        }
    }

    .stat-item {
        margin-bottom: 3rem;
    }

    .stat-link {
        display: block;
        margin-top: 1rem;

        &.disable {
            opacity: 0.5;
            pointer-events: none;
            cursor: auto;
        }
    }

    .launches-info {
        display: flex;
        flex-direction: column-reverse;
        text-align: left;

        &.upcomingLaunches {
            flex-direction: column;
        }
    }

    .launch-card {
        margin-bottom: 2rem;
    }
</style>
