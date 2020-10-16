import {createSlice} from "@reduxjs/toolkit";

const hasLocalStorage = window.localStorage ? true : false;

const saveCommentsToStorage = (comments) => {

    if (hasLocalStorage)
        if (comments.length)
            window.localStorage.setItem('comments', JSON.stringify(comments));
        else
            window.localStorage.removeItem('comments');
};

export const slice = createSlice({

    name: 'comments',

    initialState: {

        comments: hasLocalStorage ? (JSON.parse(window.localStorage.getItem('comments')) || []) : []
    },

    reducers: {

        setComment: (state, action) => {

            const comment = action.payload;

            comment.id = `comment_${Math.ceil(Math.random() * 10000000).toString()}`;
            comment.date = (new Date()).toISOString();

            state.comments.push(comment);

            saveCommentsToStorage(state.comments);

        },

        removeComment: (state, action) => {

            const commentIndex = state.comments.find(comment => comment.id === action.payload);

            state.comments.splice(commentIndex, 1);

            saveCommentsToStorage(state.comments);
        }

    }
});

export const {setComment, removeComment} = slice.actions;

export const selectComments = state => state.comments.comments;

export default slice.reducer;
