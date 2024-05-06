import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('pages/HomePage.vue') },
            {
                path: 'blog/:id',
                component: () => import('pages/SingleBlogPage.vue'),
            },
            {
                path: 'politicas',
                component: () => import('pages/PoliticsPage.vue'),
            },
            {
                path: 'rgdp',
                component: () => import('pages/RgdpPage.vue'),
            },
            {
                path: 'trabaja-con-nosotros',
                component: () => import('pages/JobsPage.vue'),
            },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
];

export default routes;
