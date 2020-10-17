export const setComment = comment => ({
    type: 'comments/setComment',
    payload: comment
});

export const removeComment = commentId => ({
    type: 'comments/removeComment',
    payload: commentId
});