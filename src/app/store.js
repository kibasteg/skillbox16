import {configureStore} from '@reduxjs/toolkit';
import {commentsReducer} from "../reducers/commentsReducer"
import {updateStorage} from '../localStorage'

const store = configureStore({
    reducer: {
        comments: commentsReducer
    }
});

store.subscribe(() => {
    updateStorage(store.getState())
});

export default store;