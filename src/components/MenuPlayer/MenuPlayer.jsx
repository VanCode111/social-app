import React, { useState, useEffect } from "react";
import "./MenuPlayers.scss";
import PlayIcon from "../Icons/PlayIcon";
import PauseIcon from "../Icons/PauseIcon";
import Arrow from "../Icons/Arrow";
import { useDispatch, useSelector } from "react-redux";
import { setMusic } from "../../store";
import { playMusic, changeTrack } from "../../audio";

function MenuPlayer({ audio, currentMusic }) {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.tracks);
  const [activeAudio, setActiveAudio] = useState(null);
  const handleAudio = async () => {
    const { music } = await playMusic(
      currentMusic.url,
      currentMusic.id,
      currentMusic.title,
      audio,
      currentMusic
    );
    dispatch(setMusic(music));
  };

  useEffect(() => {
    audio.addEventListener("ended", () => {
      handleChangeTrack("right");
    });
  }, []);

  const handleChangeTrack = async (direction) => {
    const { music } = await changeTrack(direction, audio, tracks, currentMusic);
    console.log(music);
    dispatch(setMusic(music));
  };
  return (
    <div className="menu-player">
      <div className="menu-player__top-block">
        <img src={currentMusic.icon} alt="ava" className="menu-player__ava" />
        <p className="menu-player__title">{currentMusic.title}</p>
      </div>

      <div className="menu-player__block">
        <div className="player-buttons">
          <button
            onClick={() => handleChangeTrack("left")}
            className="player-buttons__left player-buttons__item"
          >
            <Arrow />
          </button>
          <button
            onClick={handleAudio}
            className="player-buttons__play player-buttons__item"
          >
            {!currentMusic.play ? (
              <div className="play">
                <PlayIcon />{" "}
              </div>
            ) : (
              <PauseIcon />
            )}
          </button>
          <button
            onClick={() => handleChangeTrack("right")}
            className="player-buttons__right player-buttons__item"
          >
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuPlayer;
