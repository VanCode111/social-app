import React, { useState, useEffect } from "react";
import "./MusicItem.scss";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

function MusicItem({ item, className, playMusic, curr, audio }) {
  const [intervals, setIntervals] = useState(null);
  curr = curr;

  const [curTime, setCurTime] = useState(0);
  useEffect(() => {
    if (intervals) {
      clearInterval(intervals);
    }
    if (curr != null) {
      const interval = setInterval(() => {
        setCurTime(audio.currentTime);

        if (!curr.play) {
          clearInterval(interval);
        }
      }, 100);
      setIntervals(interval);
    }
  }, [curr]);
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
              (curr != null ? (curr.play == true ? "play" : "pause") : "")
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
        className={"progress " + (curr ? "visible" : "")}
        current={curTime}
        end={audio.duration}
      />
    </div>
  );
}

export default MusicItem;
