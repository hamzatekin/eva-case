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
    },
    actions: {
        setItem({ commit }, item: SetItemParams) {
            commit('setItem', item);
        },
        getItem({ commit }, key: string) {
            commit('getItem', key);
        },
    },
};

export default localStorageModule;
