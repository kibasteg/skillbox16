const hasLocalStorage = window && window.localStorage;
const storageKey = 'comments';

export const initialStorage = hasLocalStorage ? JSON.parse(window.localStorage.getItem(storageKey) || "{}") : {};

export const updateStorage = (state) => {

    if (hasLocalStorage)
        window.localStorage.setItem(storageKey, JSON.stringify(state));
};