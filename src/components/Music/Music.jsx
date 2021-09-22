import React, { useState, useEffect } from "react";
import "./Music.scss";
import List from "../List/List";
import MusicItem from "../MusicItem/MusicItem";
import "./Music.scss";

let interval;

function Music() {
  const [tracks, setTracks] = useState([]);
  const [currentMusic, setCurrentMusic] = useState(null);

  const disableMusic = async (audio, disable) => {
    if (interval) {
      clearInterval(interval);
    }
    const au = audio;
    audio = audio.audio;
    if (!disable) {
      audio.play();
    }
    const volume = disable ? -0.1 : 0.1;
    await new Promise((resolve) => {
      interval = setInterval(() => {
        if (
          (disable && audio.volume <= 0.1) ||
          (!disable && audio.volume > 0.9)
        ) {
          resolve();
          clearInterval(interval);
        } else {
          audio.volume += volume;
        }
      }, 50);
    });
    if (disable) {
      au.play = false;
      audio.pause();
    } else {
      au.play = true;
    }
  };

  const playMusic = async (url, id) => {
    let audio;
    if (currentMusic === null) {
      audio = { audio: new Audio(url), id };
      audio.audio.play();
      audio.play = true;
    } else if (currentMusic.id != id) {
      console.log("safasf");
      currentMusic.audio.pause();
      audio = { audio: new Audio(url), id };
      audio.play = true;
      disableMusic(audio, false);
      console.log("audio: ", audio);
    } else {
      audio = { ...currentMusic };
      console.log(audio);
      if (audio.play) {
        audio.play = false;
        disableMusic(audio, true);
      } else {
        audio.play = true;
        disableMusic(audio, false);
      }
    }
    setCurrentMusic({ ...audio });
  };
  useEffect(() => {
    const getTracks = async () => {
      const response = await fetch("http://localhost:3000/tracks");
      const res = await response.json();
      setTracks(res);
    };
    getTracks();
  }, []);
  return (
    <div className="music">
      <h2 className="music__title">Музыка</h2>
      <List
        playMusic={playMusic}
        currentMusic={currentMusic}
        component={MusicItem}
        items={tracks}
      />
    </div>
  );
}

export default Music;
