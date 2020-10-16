import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {
    setComment
} from "../comments/commentsSlice";

function Form() {

    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleChangeAuthor = (ev) => {

        setAuthor(ev.target.value);
    };

    const handleChangeText = (ev) => {

        setText(ev.target.value);
    };

    const handleSend = ev => {

        ev.preventDefault();

        dispatch(setComment({author: author.trim(), text:text.trim()}));

        resetForm();



    };

    const resetForm = () => {

        setAuthor('');
        setText('');

    };

    return (
        <form className="form" onSubmit={handleSend}>
            <div className="form__row">
                <label className="form__label">Author:</label>
                <div className="form__controls">
                    <input className="form__input" type="text" onChange={handleChangeAuthor} value={author} placeholder="Иван Петров" />
                </div>
            </div>
            <div className="form__row">
                <label className="form__label">Text:</label>
                <div className="form__controls">
                    <textarea className="form__input" value={text} onChange={handleChangeText} placeholder="Текст комментария..." rows="4"></textarea>
                </div>
            </div>
            <div className="form__row">
                <button className="form__btn" type="submit" disabled={!(text.trim().length && author.trim().length)}>Send</button>
            </div>
        </form>
    )

}

export default Form;