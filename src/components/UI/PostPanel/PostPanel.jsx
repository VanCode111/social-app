import React from "react";
import InputFile from "../InputFile/InputFile";
import IconText from "../IconText/IconText";
import { MessageIcon } from "../../Icons";
import PlayIcon from "../../Icons/PlayIcon";
import { PhotoIcon } from "../../Icons";
import "./PostPanel.scss";

function PostPanel({ uploadPhoto, createPost }) {
  return (
    <div className="post-card__bottom">
      <ul className="post-card__list">
        <li className="post-card__item">
          <InputFile selectFile={uploadPhoto}>
            <IconText text="Фото" icon={<PhotoIcon />} />
          </InputFile>
        </li>
        <li className="post-card__item">
          <InputFile onChange={uploadPhoto}>
            <IconText text="Видео" icon={<PlayIcon />} />
          </InputFile>
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
  );
}

export default PostPanel;
