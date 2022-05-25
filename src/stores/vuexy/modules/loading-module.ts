import type { Module } from 'vuex';

const loadingModule: Module<LoadingStoreType, any> = {
    namespaced: true,
    state: {
        isLoading: false,
    },
    getters: {
        getIsLoading(state) {
            return state.isLoading;
        },
    },
    mutations: {
        setLoading(state, isLoading: boolean) {
            state.isLoading = isLoading;
        },
        toggleLoading(state) {
            state.isLoading = !state.isLoading;
        },
    },
    actions: {
        setLoading({ commit }, isLoading: boolean) {
            commit('setLoading', isLoading);
        },
        toggleLoading({ commit }) {
            commit('toggleLoading');
        },
    },
};

export default loadingModule;
