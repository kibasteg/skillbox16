import React from 'react';

import {removeComment} from "../../actions/commentsActions";
import {selectComments} from "../../selectors/commentsSelectors";
import {useSelector, useDispatch} from "react-redux";

function DateLoc(props)
{
    const date = new Date(props.date);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

function Comment(props) {

    const dispatch = useDispatch();
    const comment = props.comment;

    const handleRemove = () => {

        dispatch(removeComment(comment.id))
    };

    return (
        <div className="comment">
            <div className="comment__author">{comment.author}</div>
            <div className="comment__text">{comment.text}</div>
            <div className="comment__captions">
                <span className="comment__date"><DateLoc date={comment.date} /></span>
                <span className="comment__btn comment__btn--del" onClick={handleRemove}>remove</span>
            </div>
        </div>
    );
};

export default function Comments() {

    const comments = useSelector(selectComments);

    let listComments;

    if (comments.length)
        listComments = comments.map(comment => <Comment key={comment.id} comment={comment} />);
    else
        listComments = <div className="comment comments-empty">No comments</div>;

    return (

        <div>{listComments}</div>
    );
};