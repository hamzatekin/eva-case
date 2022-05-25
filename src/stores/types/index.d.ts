interface UserStoreType {
    user: User | null;
    token: string | null;
}

interface LocalStorageStoreType {
    localStorage: Storage;
}

interface SetItemParams {
    key: string;
    value: any;
}

interface LoadingStoreType {
    isLoading: boolean;
}

interface AuthStoreType {
    loggedIn: boolean;
    loginError: string | null;
}
