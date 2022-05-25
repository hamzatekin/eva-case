import { EVA_TOKEN, EVA_USER } from '@/misc/const';
import type { Module } from 'vuex';

const localStorageModule: Module<LocalStorageStoreType, any> = {
    namespaced: true,
    state: {
        localStorage: window.localStorage,
    },
    getters: {
        getLocalStorage({ localStorage }) {
            return localStorage;
        },
    },
    mutations: {
        getItem({ localStorage }, key: string) {
            return localStorage.getItem(key);
        },
        setItem({ localStorage }, { key, value }: SetItemParams) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        removeToken({ localStorage }) {
            localStorage.removeItem(EVA_TOKEN);
        },
        removeUser({ localStorage }) {
            localStorage.removeItem(EVA_USER);
        },
    },
    actions: {
        setItem({ commit }, item: SetItemParams) {
            commit('setItem', item);
        },
        getItem({ commit }, key: string) {
            commit('getItem', key);
        },
        removeToken({ commit }) {
            commit('removeToken');
        },
        removeUser({ commit }) {
            commit('removeUser');
        },
    },
};

export default localStorageModule;
