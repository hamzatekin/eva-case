export const firstItem = (list: any[]) => {
    if (!list || !list.length) {
        return '';
    }

    return list[0];
};

export const sortString = (a: string, b: string) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};

export const lastItem = (list: any[]) => {
    if (!list || !list.length) {
        return '';
    }
    return list[list.length - 1];
};
