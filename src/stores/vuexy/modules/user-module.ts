import { EVA_TOKEN, EVA_USER, TOKEN, USER } from '@/misc/const';
import type { Module } from 'vuex';

const userModule: Module<UserStoreType, any> = {
    namespaced: true,
    state: {
        user: null,
        token: null,
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getToken(state) {
            return state.token;
        },
    },
    mutations: {
        setUser(state, user: User) {
            state.user = user;
        },
        removeUser(state) {
            state.user = null;
        },
        setToken(state, token: string) {
            state.token = token;
        },
        removeToken(state) {
            state.token = null;
        },
    },
    actions: {
        setUser({ commit, dispatch }, user: User) {
            commit('setUser', user);
            dispatch(
                'localStorage/setItem',
                { key: EVA_USER, value: user },
                { root: true }
            );
        },
        removeUser({ commit, dispatch }) {
            commit('removeUser');
            dispatch('localStorage/removeItem', EVA_USER, { root: true });
        },
        setToken({ commit, dispatch }, token: string) {
            commit('setToken', token);
            dispatch(
                'localStorage/setItem',
                { key: EVA_TOKEN, value: token },
                { root: true }
            );
        },
        removeToken({ commit, dispatch }) {
            commit('removeToken');
            dispatch('localStorage/removeItem', EVA_TOKEN, { root: true });
        },
    },
};

export default userModule;

// import { defineStore } from 'pinia';

// export const USER_STORE_NAME = 'eva-user-store';

// export const useUserStore = defineStore<string, UserStoreStateType>({
//     id: USER_STORE_NAME,
//     state: () => ({
//         user: null,
//         token: null,
//     }),
//     getters: {
//         getUser: (state) => state.user,
//         getToken: (state) => state.token,
//     },
//     actions: {
//         setUser(user: User) {
//             this.user = user;
//         },
//         removeUser() {
//             this.user = null;
//         },
//         setToken(token: string) {
//             this.token = token;
//         },
//         removeToken() {
//             this.token = null;
//         },
//     },
// });
