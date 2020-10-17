import React from 'react';

import {removeComment} from "../../actions/commentsActions";
import {connect} from "react-redux";

function DateLoc(props)
{
    const date = new Date(props.date);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

const mapDispatchToProps = dispatch => ({

    removeComment: commentId => { dispatch(removeComment(commentId)) }

});

const Comment = connect(null, mapDispatchToProps)((props) => {

    const comment = props.comment;

    const handleRemove = () => {
        props.removeComment(comment.id);
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
});

function Comments(props) {

    const comments = props.comments;

    let listComments;

    if (comments.length)
        listComments = comments.map(comment => <Comment key={comment.id} comment={comment} />);
    else
        listComments = <div className="comment comments-empty">No comments</div>;

    return (

        <div>{listComments}</div>
    );
}

const mapStateToProps = (state) => ({

    comments: state.comments.comments

});


export default connect(mapStateToProps)(Comments);