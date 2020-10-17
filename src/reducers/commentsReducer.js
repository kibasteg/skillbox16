import {initialStorage} from "../localStorage";
import {createReducer} from "@reduxjs/toolkit";
import {setComment, removeComment} from "../actions/commentsActions";

const initialState = initialStorage.comments || {comments: []};

export const commentsReducer = createReducer(initialState, (builder) => {

    builder

        .addCase(setComment, (state, action) => {

            const comment = action.payload;

            comment.id = `comment_${Math.ceil(Math.random() * 10000000).toString()}`;
            comment.date = (new Date()).toISOString();

            state.comments.push(comment);
        })

        .addCase(removeComment, (state, action) => {

            const commentIndex = state.comments.find(comment => comment.id === action.payload);

            state.comments.splice(commentIndex, 1);

        })
});