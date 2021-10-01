import React, { useState } from "react";
import "./PostCard.scss";
import TextareaAutosize from "react-textarea-autosize";
import { MessageIcon } from "../Icons";
import { PhotoIcon } from "../Icons";
import PersonIcon from "../../assets/img/PersonIcon.png";
import InputFile from "../UI/InputFile/InputFile";
import IconText from "../UI/IconText/IconText";
import PlayIcon from "../Icons/PlayIcon";
function PostCard({ className, addPost, onClick }) {
  const [text, setText] = useState("");
  const [photos, setPhotos] = useState([]);
  const changeText = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  const createUrlFile = (file) => {
    const fileUrl = URL.createObjectURL(file);
    return fileUrl;
  };

  const addPostHandler = () => {
    addPost({ text });
    setText("");
  };

  const uploadPhoto = (e) => {
    const files = [...e.target.files];
    const urlPhotos = files.map((photo) => createUrlFile(photo));
    setPhotos(urlPhotos);
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
        <div className="post-card__content">
          <TextareaAutosize
            onChange={changeText}
            value={text}
            placeholder="Что у вас нового?"
            className="post-card__input"
            minRows="3"
          />
          {photos.map((photo) => {
            return <img className="post-card__photo" src={photo} />;
          })}
        </div>
      </div>
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
    </div>
  );
}

export default PostCard;
