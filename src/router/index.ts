import { AppRouteNames, AppRoutes } from '@/misc/enum';
import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: AppRoutes.LOGIN,
            name: AppRouteNames.LOGIN,
            component: LoginView,
        },
        {
            path: AppRoutes.HOME,
            name: AppRouteNames.HOME,
            component: () => import('../views/HomeView.vue'),
            meta: { requiresAuth: true },
        },
    ],
});

export default router;
