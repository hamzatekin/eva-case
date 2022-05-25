import { login } from '@/auth/eva-api';
import { DEFAULT_API_ERROR_MESSAGE } from '@/misc/const';
import { AppRoutes } from '@/misc/enum';
import router from '@/router';
import type { Module } from 'vuex';

const authModule: Module<AuthStoreType, any> = {
    namespaced: true,
    state: {
        loggedIn: false,
        loginError: null,
    },
    getters: {
        humanLoginError(state) {
            return state.loginError || '';
        },
    },
    mutations: {
        loggedIn(state) {
            state.loggedIn = true;
            state.loginError = null;

            router.push(AppRoutes.HOME);
        },

        loggedOut(state) {
            state.loggedIn = false;
            router.push(AppRoutes.LOGIN);
        },

        loginError(state, payload) {
            state.loginError = payload;
        },
    },

    actions: {
        async login({ dispatch, commit }, payload: LoginDto) {
            dispatch('loading/setLoading', true, { root: true });

            try {
                const { token, user } = await login(payload);

                dispatch('user/setToken', token, { root: true });
                dispatch('user/setUser', { user: { ...user } }, { root: true });

                dispatch('loading/setLoading', false, { root: true });
                commit('loggedIn');
            } catch (error: any) {
                console.log('error', error);
                commit(
                    'loginError',
                    error.response.data || DEFAULT_API_ERROR_MESSAGE
                );

                dispatch('loading/setLoading', false, { root: true });
            }
        },

        async logout({ dispatch, commit }) {
            dispatch('localStorage/removeToken', null, { root: true });
            dispatch('user/removeUser', null, { root: true });
            dispatch('user/removeToken', null, { root: true });
            commit('loggedOut');
        },
    },
};

export default authModule;
