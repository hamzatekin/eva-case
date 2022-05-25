import { EVA_TOKEN, EVA_USER, TOKEN, USER } from '@/misc/const';

export const getUser = () => {
    const user = window.localStorage.getItem(EVA_USER);

    if (!user) {
        return null;
    }

    return JSON.parse(user);
};

export const getToken = () => {
    const token = window.localStorage.getItem(EVA_TOKEN);

    if (!token || token === 'undefined') {
        return null;
    }

    return JSON.parse(token);
};

export const isLoggedIn = () => {
    const token = getToken();

    if (!token) {
        return false;
    }

    return true;
};
