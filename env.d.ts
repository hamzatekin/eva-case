/// <reference types="vite/client" />

import 'vue-router';

declare module 'vue-router' {
    interface RouteMeta {
        requiresAuth: boolean;
        layout: 'private' | 'public';
    }
}
