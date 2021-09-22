import React, { useState, useEffect } from "react";
import "./MusicItem.scss";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

let interval;
function MusicItem({ item, className, playMusic, currentMusic }) {
  console.log(currentMusic);
  const [curTime, setCurTime] = useState(0);
  const duration = currentMusic ? currentMusic.audio.duration : null;
  useEffect(() => {
    clearInterval(interval);
    if (currentMusic) {
      interval = setInterval(() => {
        setCurTime(currentMusic.audio.currentTime);
      }, 100);
    } else if (interval) {
      clearInterval(interval);
    }
  }, [currentMusic]);
  console.log("time: ", curTime);
  return (
    <div
      onClick={() => playMusic(item.url, item.id)}
      className={"music-item " + (className ? className : "")}
    >
      <div className="music__wrapper">
        <div className="music-item__left">
          <div
            className={
              "music-item__icon " +
              (currentMusic != null
                ? currentMusic.play == true
                  ? "play"
                  : "pause"
                : "")
            }
          >
            <img src={item.image} alt="" className="music-item__ava" />
          </div>

          <div className="music-item__text">
            <p className="music-item__title">{item.title}</p>
          </div>
        </div>
        <p className="music-item__time">{"3:50"}</p>
      </div>
      <ProgressBar
        className={"progress " + (currentMusic ? "visible" : "")}
        current={curTime}
        end={duration}
      />
    </div>
  );
}

export default MusicItem;
