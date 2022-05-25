import { createApp } from 'vue';
import { createPinia } from 'pinia';
import store from './stores/vuexy';

import App from './App.vue';

import router from './router';

import { isLoggedIn } from './auth/auth';
import { AppRouteNames } from './misc/enum';

// Template css files.
import './assets/index.css';

import './assets/app-assets/vendors/css/vendors.min.css';
import './assets/app-assets/vendors/css/ui/prism.min.css';
import './assets/app-assets/css/bootstrap.min.css';
import './assets/app-assets/css/bootstrap-extended.min.css';
import './assets/app-assets/css/colors.css';
import './assets/app-assets/css/components.min.css';
import './assets/app-assets/css/themes/dark-layout.min.css';
// import './assets/app-assets/css/themes/semi-dark-layout.css';
import './assets/app-assets/css/core/menu/menu-types/vertical-menu.min.css';
import './assets/app-assets/css/core/colors/palette-gradient.min.css';


import HighchartsVue from 'highcharts-vue';

router.beforeEach((to, _, next) => {
    // To prevent going to login page when user is already logged in
    if (to.name === AppRouteNames.LOGIN && isLoggedIn()) {
        next({ name: AppRouteNames.HOME });
        return;
    }

    if (to.meta.requiresAuth && !isLoggedIn()) {
        next({ name: AppRouteNames.LOGIN });
        return;
    }

    next();
});

const app = createApp(App);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
app.use(HighchartsVue);
app.use(store);
app.use(createPinia());
app.use(router);

app.mount('#app');
