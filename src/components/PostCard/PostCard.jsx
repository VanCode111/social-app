import React, { useState } from "react";
import "./PostCard.scss";
import TextareaAutosize from "react-textarea-autosize";
import { MessageIcon } from "../Icons";
import PersonIcon from "../../assets/img/PersonIcon.png";

function PostCard({ className, addPost, onClick }) {
  const [text, setText] = useState("");

  const changeText = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  const addPostHandler = () => {
    addPost({ text });
    setText("");
  };

  const createPost = () => {
    if (!onClick) {
      return;
    }
    const post = {
      text,
    };

    onClick(post);
  };
  return (
    <div className={"post-card " + className}>
      <div className="post-card__top">
        <a href="" className="post-card__link">
          <img src={PersonIcon} alt="" className="post-card__img" />
        </a>
        <TextareaAutosize
          onChange={changeText}
          value={text}
          placeholder="Что у вас нового?"
          className="post-card__input"
          minRows="3"
        />
      </div>
      <div className="post-card__bottom">
        <ul className="post-card__list">
          <li className="post-card__item">
            <button className="post-card__item-btn">Фото</button>
          </li>
          <li className="post-card__item">
            <button className="post-card__item-btn">Видео</button>
          </li>
          <li className="post-card__item">
            <button className="post-card__item-btn">Событие</button>
          </li>
          <li className="post-card__item">
            <button className="post-card__item-btn">Статья</button>
          </li>
        </ul>
        <button onClick={createPost} className="post-card__btn">
          <MessageIcon />
        </button>
      </div>
    </div>
  );
}

export default PostCard;
