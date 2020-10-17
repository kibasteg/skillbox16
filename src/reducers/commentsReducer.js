import {initialStorage} from "../localStorage";

const initialState = initialStorage.comments || {comments: []};

export function commentsReducer(state = initialState, action) {

    switch (action.type) {

        case 'comments/setComment': {

            const comment = action.payload;

            comment.id = `comment_${Math.ceil(Math.random() * 10000000).toString()}`;
            comment.date = (new Date()).toISOString();

            const comments = [...state.comments, comment];

            return {...state, comments};
        }

        case 'comments/removeComment': {

            const commentIndex = state.comments.find(comment => comment.id === action.payload);

            const comments = [...state.comments];

            comments.splice(commentIndex, 1);

            return {...state, comments};
        }

        default: {

            return state;

        }
    }
}