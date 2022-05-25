<script setup lang="ts">
import { AppRoutes } from '@/misc/enum';
import { useStore } from 'vuex';
// import { RouterView } from 'vue-router';
const store = useStore();

const logout = () => {
    store.dispatch('auth/logout');
};
</script>

<template>
    <main>
        <div
            class="vertical-layout vertical-menu-modern 2-columns navbar-floating footer-static"
            data-open="click"
            data-menu="vertical-menu-modern"
            data-col="2-columns"
        >
            <nav
                class="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow"
            >
                <div class="navbar-wrapper">
                    <div class="navbar-container content">
                        <div class="navbar-collapse" id="navbar-mobile">
                            <div
                                class="mr-auto float-left bookmark-wrapper d-flex align-items-center"
                            >
                                <ul class="nav navbar-nav">
                                    <li
                                        class="nav-item mobile-menu d-xl-none mr-auto"
                                    >
                                        <a
                                            class="nav-link nav-menu-main menu-toggle hidden-xs"
                                            href="#"
                                            ><i
                                                class="ficon feather icon-menu"
                                            ></i
                                        ></a>
                                    </li>
                                </ul>
                                <ul class="nav navbar-nav bookmark-icons">
                                    <!-- li.nav-item.mobile-menu.d-xl-none.mr-auto-->
                                    <!--   a.nav-link.nav-menu-main.menu-toggle.hidden-xs(href='#')-->
                                    <!--     i.ficon.feather.icon-menu-->
                                    <li class="nav-item d-none d-lg-block">
                                        <a
                                            class="nav-link"
                                            href="app-todo.html"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Todo"
                                            ><i
                                                class="ficon feather icon-check-square"
                                            ></i
                                        ></a>
                                    </li>
                                    <li class="nav-item d-none d-lg-block">
                                        <a
                                            class="nav-link"
                                            href="app-chat.html"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Chat"
                                            ><i
                                                class="ficon feather icon-message-square"
                                            ></i
                                        ></a>
                                    </li>
                                    <li class="nav-item d-none d-lg-block">
                                        <a
                                            class="nav-link"
                                            href="app-email.html"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Email"
                                            ><i
                                                class="ficon feather icon-mail"
                                            ></i
                                        ></a>
                                    </li>
                                    <li class="nav-item d-none d-lg-block">
                                        <a
                                            class="nav-link"
                                            href="app-calender.html"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Calendar"
                                            ><i
                                                class="ficon feather icon-calendar"
                                            ></i
                                        ></a>
                                    </li>
                                </ul>
                                <ul class="nav navbar-nav">
                                    <li class="nav-item d-none d-lg-block">
                                        <a class="nav-link bookmark-star"
                                            ><i
                                                class="ficon feather icon-star warning"
                                            ></i
                                        ></a>
                                        <div
                                            class="bookmark-input search-input"
                                        >
                                            <div class="bookmark-input-icon">
                                                <i
                                                    class="feather icon-search primary"
                                                ></i>
                                            </div>
                                            <input
                                                class="form-control input"
                                                type="text"
                                                placeholder="Explore Vuexy..."
                                                tabindex="0"
                                                data-search="template-list"
                                            />
                                            <ul
                                                class="search-list search-list-bookmark"
                                            ></ul>
                                        </div>
                                        <!-- select.bookmark-select-->
                                        <!--   option Chat-->
                                        <!--   option email-->
                                        <!--   option todo-->
                                        <!--   option Calendar-->
                                    </li>
                                </ul>
                            </div>

                            <ul class="nav navbar-nav float-right">
                                <div class="vue-logout">
                                    <li class="dropdown dropdown-user nav-item">
                                        <a
                                            @click.prevent="logout"
                                            class="dropdown-item"
                                            ><i class="feather icon-power"></i>
                                            Logout</a
                                        >
                                    </li>
                                </div>
                                <li class="dropdown dropdown-user nav-item">
                                    <a
                                        class="dropdown-toggle nav-link dropdown-user-link"
                                        href="#"
                                        data-toggle="dropdown"
                                    >
                                        <div class="user-nav d-sm-flex d-none">
                                            <span
                                                class="user-name text-bold-600"
                                                >John Doe</span
                                            ><span class="user-status"
                                                >Available</span
                                            >
                                        </div>
                                        <span
                                            ><img
                                                class="round"
                                                src="../../assets/app-assets/images/portrait/small/avatar-s-11.jpg"
                                                alt="avatar"
                                                height="40"
                                                width="40"
                                        /></span>
                                    </a>
                                    <div
                                        class="dropdown-menu dropdown-menu-right"
                                    >
                                        <a
                                            class="dropdown-item"
                                            href="page-user-profile.html"
                                            ><i class="feather icon-user"></i>
                                            Edit Profile</a
                                        ><a
                                            class="dropdown-item"
                                            href="app-email.html"
                                            ><i class="feather icon-mail"></i>
                                            My Inbox</a
                                        ><a
                                            class="dropdown-item"
                                            href="app-todo.html"
                                            ><i
                                                class="feather icon-check-square"
                                            ></i>
                                            Task</a
                                        ><a
                                            class="dropdown-item"
                                            href="app-chat.html"
                                            ><i
                                                class="feather icon-message-square"
                                            ></i>
                                            Chats</a
                                        >
                                        <div class="dropdown-divider"></div>
                                        <a
                                            class="dropdown-item"
                                            href="auth-login.html"
                                            ><i class="feather icon-power"></i>
                                            Logout</a
                                        >
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- BEGIN: Main Menu-->
            <div
                class="main-menu menu-fixed menu-light menu-accordion menu-shadow"
                data-scroll-to-active="true"
            >
                <div class="navbar-header">
                    <ul class="nav navbar-nav flex-row">
                        <li class="nav-item mr-auto">
                            <a
                                class="navbar-brand"
                                href="../../../html/ltr/vertical-menu-template/index.html"
                            >
                                <div class="brand-logo"></div>
                                <h2 class="brand-text mb-0">Vuexy</h2>
                            </a>
                        </li>
                        <li class="nav-item nav-toggle">
                            <a
                                class="nav-link modern-nav-toggle pr-0"
                                data-toggle="collapse"
                                ><i
                                    class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"
                                ></i
                                ><i
                                    class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary"
                                    data-ticon="icon-disc"
                                ></i
                            ></a>
                        </li>
                    </ul>
                </div>
                <div class="shadow-bottom"></div>
                <div class="main-menu-content">
                    <ul
                        class="navigation navigation-main"
                        id="main-menu-navigation"
                        data-menu="menu-navigation"
                    >
                        <li class="nav-item">
                            <router-link :to="AppRoutes.HOME">
                                <i class="feather icon-home"></i
                                ><span class="menu-title" data-i18n="Dashboard"
                                    >Dashboard</span
                                >
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- END: Main Menu-->

            <!-- BEGIN: Content-->
            <div class="app-content content">
                <div class="content-overlay"></div>
                <div class="header-navbar-shadow"></div>
                <div class="content-wrapper">
                    <div class="content-header row vue-content-header">
                        <div
                            class="content-header-left col-md-9 col-12 mb-2"
                        ></div>
                        <div
                            class="content-header-right text-md-right col-md-3 col-12 d-md-block d-none"
                        >
                            <div class="form-group breadcrum-right">
                                <div class="dropdown">
                                    <button
                                        class="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle"
                                        type="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i class="feather icon-settings"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-body vue-content-body">
                        <router-view />
                    </div>
                </div>
            </div>

            <div class="sidenav-overlay"></div>
            <div class="drag-target"></div>

            <!-- BEGIN: Footer-->
            <footer class="footer footer-static footer-light">
                <p class="clearfix blue-grey lighten-2 mb-0">
                    <span class="float-md-left d-block d-md-inline-block mt-25"
                        >COPYRIGHT &copy; 2020<a
                            class="text-bold-800 grey darken-2"
                            href="https://1.envato.market/pixinvent_portfolio"
                            target="_blank"
                            >Pixinvent,</a
                        >All rights Reserved</span
                    ><span class="float-md-right d-none d-md-block"
                        >Hand-crafted & Made with<i
                            class="feather icon-heart pink"
                        ></i
                    ></span>
                    <button
                        class="btn btn-primary btn-icon scroll-top"
                        type="button"
                    >
                        <i class="feather icon-arrow-up"></i>
                    </button>
                </p>
            </footer>
        </div>
    </main>
</template>

<style>
@media screen and (min-width: 1024px) {
    .vue-content-body {
        margin: 0 5rem 0 20rem;
    }

    .vue-content-header {
        margin-top: 5rem;
    }
}

@media (max-width: 1024px) {
    .vue-content-body {
        margin-left: 0 5rem 0 20rem;
        padding: 0 2rem 0 2rem;
    }

    .vue-content-header {
        margin-top: 5rem;
    }
}

.vue-logout {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
