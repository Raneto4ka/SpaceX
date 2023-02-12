import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '@/pages/HomePage';
import RocketPage from '@/pages/RocketPage';
import LaunchesPage from '@/pages/LaunchesPage';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/:name',
        name: 'Rocket',
        component: RocketPage,
        props: true
    },
    {
        path: '/launches',
        name: 'Launches',
        component: LaunchesPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
