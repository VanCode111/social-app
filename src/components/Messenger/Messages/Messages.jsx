import React, { useRef, useEffect, useState } from "react";
import "./Messages.scss";
import Message from "../Message/Message";
import ImagePerson from "../../../assets/img/PersonIcon.png";
import AreaMessage from "../../UI/AreaMessage/AreaMessage";
import ButtonIcon from "../../UI/ButtonIcon/ButtonIcon";
import { PhotoIcon } from "../../Icons";

function Messages() {
  const scroll = useRef();
  const [textMessage, setTextMessage] = useState("");

  const changeText = (e) => {
    setTextMessage(e.target.value);
  };

  const changeHeight = () => {
    console.log(
      scroll.current.scrollHeight -
        scroll.current.clientHeight -
        scroll.current.scrollTop
    );
    if (
      scroll.current.scrollHeight -
        scroll.current.clientHeight -
        scroll.current.scrollTop <
      16
    ) {
      scroll.current.scrollTop = scroll.current.scrollHeight;
    }
  };
  return (
    <div className="messages">
      <div ref={scroll} className="messages__items">
        <div className="messages__message">
          <Message
            text="Это мое сообщение Это мое сообщение Это мое сообщение Это мое сообщение"
            authorImage={ImagePerson}
            orientation="left"
            color="gray"
          />
        </div>
        <div className="messages__message">
          <Message
            text="Это мое сообщение Это мое сообщение Это мое сообщение Это мое сообщение"
            authorImage={ImagePerson}
            orientation="right"
          />
        </div>
        <div className="messages__message">
          <Message
            text="Это мое сообщение Это мое сообщение Это мое сообщение Это мое сообщение"
            authorImage={ImagePerson}
            orientation="left"
            color="gray"
          />
        </div>
        <div className="messages__message">
          <Message
            text="Это мое сообщение Это мое сообщение Это мое сообщение Это мое сообщение"
            authorImage={ImagePerson}
            orientation="right"
          />
        </div>
        <div className="messages__message">
          <Message
            text="Это мое сообщение Это мое сообщение Это мое сообщение Это мое сообщение"
            authorImage={ImagePerson}
            orientation="left"
            color="gray"
          />
        </div>
        <div className="messages__message">
          <Message
            text="Это мое сообщение Это мое сообщение Это мое сообщение Это мое сообщение"
            authorImage={ImagePerson}
            orientation="right"
          />
        </div>
        <div className="messages__message">
          <Message
            text="Это мое сообщение Это мое сообщение Это мое сообщение Это мое сообщение"
            authorImage={ImagePerson}
            orientation="left"
            color="gray"
          />
        </div>
        <div className="messages__message">
          <Message
            text="Это мое сообщение Это мое сообщение Это мое сообщение Это мое сообщение"
            authorImage={ImagePerson}
            orientation="right"
          />
        </div>
        <div className="messages__message">
          <Message
            text="Это мое сообщение Это мое сообщение Это мое сообщение Это мое сообщение"
            authorImage={ImagePerson}
            orientation="left"
            color="gray"
          />
        </div>
        <div className="messages__message">
          <Message
            text="Это мое сообщение Это мое сообщение Это мое сообщение Это мое сообщение"
            authorImage={ImagePerson}
            orientation="right"
          />
        </div>
        <div className="messages__message">
          <Message
            text="Это мое сообщение Это мое сообщение Это мое сообщение Это мое сообщение"
            authorImage={ImagePerson}
            orientation="left"
            color="gray"
          />
        </div>
        <div className="messages__message">
          <Message
            text="Это мое сообщение Это мое сообщение Это мое сообщение Это мое сообщение"
            authorImage={ImagePerson}
            orientation="right"
          />
        </div>
      </div>

      <AreaMessage
        onChange={changeText}
        onHeightChange={changeHeight}
        placeholder="Новое сообщение"
        rightSide={
          <ButtonIcon>
            <PhotoIcon />
          </ButtonIcon>
        }
      />
    </div>
  );
}

export default Messages;
