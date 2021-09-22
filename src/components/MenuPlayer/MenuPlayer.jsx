import React, { useState } from "react";
import "./MenuPlayers.scss";
import PlayIcon from "../Icons/PlayIcon";
import PauseIcon from "../Icons/PauseIcon";

let audio = null;
const audios = [
  {
    url: "https://m.vk.com/mp3/audio_api_unavailable.mp3?extra=encodeextraurl",
  },
  {
    title: "Bad Habits",
    url: "https://s264iva.storage.yandex.net/get-mp3/968aaae3e9b3ac302caf6a00007805ab/0005cc550782c74a/rmusic/U2FsdGVkX18QHjaTXUCOfXSYEJHs_ixpCbQWpzvqMFlDGYHG5I6GwgbsavOF3kZxufQWdK6Y5PS-bCQyawQnTW4fTklUJYfLK_K8Afautio/7945871740fa505642392543f1528653ab7771812be8b6724a104b46df8a3219/36171?track-id=85864771&play=false",
  },
];

function MenuPlayer() {
  const [play, setPlay] = useState(false);
  const [activeAudio, setActiveAudio] = useState(null);
  const handleAudio = () => {
    if (activeAudio === null) {
      setActiveAudio(0);
      audio = new Audio(audios[0].url);
    }

    if (play == false) {
      audio.play();
    } else if (play == true) {
      audio.pause();
    }

    setPlay((prev) => !prev);
  };

  const changeAudio = (direction) => {
    console.log(activeAudio);
    if (direction == "right") {
      const index = activeAudio < audios.length - 1 ? activeAudio + 1 : 0;
      if (audio) {
        audio.pause();
      }
      console.log(activeAudio);
      audio = new Audio(audios[index].url);
      if (play) {
        audio.play();
      }
      setActiveAudio(index);
    }
  };
  return (
    <div className="menu-player">
      <p className="menu-player__title">
        {activeAudio ? audios[activeAudio].title : " "}
      </p>

      <div className="menu-player__block">
        <div className="player-buttons">
          <button className="player-buttons__left player-buttons__item">
            -
          </button>
          <button
            onClick={handleAudio}
            className="player-buttons__play player-buttons__item"
          >
            {!play ? (
              <div className="play">
                <PlayIcon />{" "}
              </div>
            ) : (
              <PauseIcon />
            )}
          </button>
          <button
            className="player-buttons__left player-buttons__item"
            onClick={() => changeAudio("right")}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuPlayer;
