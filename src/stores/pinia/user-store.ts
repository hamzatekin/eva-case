import { defineStore } from 'pinia';

export const USER_STORE_NAME = 'eva-user-store';

export const useUserStore = defineStore<string, UserStoreType>({
    id: USER_STORE_NAME,
    state: () => ({
        user: null,
        token: null,
    }),
    getters: {
        getUser: (state) => state.user,
        getToken: (state) => state.token,
    },
    actions: {
        setUser(user: User) {
            this.user = user;
        },
        removeUser() {
            this.user = null;
        },
        setToken(token: string) {
            this.token = token;
        },
        removeToken() {
            this.token = null;
        },
    },
});
