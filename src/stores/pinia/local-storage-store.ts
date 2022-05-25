import { defineStore } from 'pinia';

const LOCAL_STORAGE_STORE_NAME = 'localStorage';

export const useLocalStorage = defineStore<string, LocalStorageStoreType>({
    id: LOCAL_STORAGE_STORE_NAME,
    state: () => ({
        localStorage: window.localStorage,
    }),
    getters: {
        getLocalStorage: (state) => state.localStorage,
    },
    actions: {
        getItem(key: string) {
            return localStorage.getItem(key);
        },
        setItem(item: SetItemParams) {
            this.localStorage.setItem(item.key, item.value);
        },
    },
});
