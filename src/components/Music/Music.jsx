import React, { useState, useEffect } from "react";
import "./Music.scss";
import List from "../List/List";
import MusicItem from "../MusicItem/MusicItem";
import "./Music.scss";
import { useSelector, useDispatch } from "react-redux";
import { setMusic } from "../../store";
import Loader from "../../components/Loader/Loader";

let interval;

function Music({ audio }) {
  console.log(audio);
  const dispatch = useDispatch();
  const [tracks, setTracks] = useState([]);
  const currentMusic = useSelector((store) => store.currentMusic);
  const [loading, setLoading] = useState(true);
  console.log(currentMusic);
  const disableMusic = async (a, disable) => {
    if (interval) {
      clearInterval(interval);
    }
    const au = audio;
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
      //au.play = false;
      audio.pause();
    } else {
      //au.play = true;
    }
  };

  const playMusic = async (url, id) => {
    let music = { id };
    if (currentMusic === null) {
      audio.src = url;
      music.play = true;
      audio.play();
      music.duration = audio.duration;
    } else if (currentMusic.id != id) {
      audio.currentTime = 0;
      audio.src = url;
      music.play = true;
      disableMusic(audio, false);
    } else {
      if (currentMusic.play) {
        music.play = false;
        disableMusic(audio, true);
      } else {
        music.play = true;
        disableMusic(audio, false);
      }
    }
    dispatch(setMusic(music));
  };
  useEffect(() => {
    const getTracks = async () => {
      const response = await fetch("http://localhost:3000/tracks");
      const res = await response.json();
      setTracks(res);
      setLoading(false);
    };
    getTracks();
  }, []);
  return (
    <div className="music">
      <h2 className="music__title">Музыка </h2>
      <List
        loading={loading}
        loader={<Loader className="music__loader" />}
        loaderList={5}
        playMusic={playMusic}
        currentMusic={currentMusic}
        component={MusicItem}
        items={tracks}
        audio={audio}
      />
    </div>
  );
}

export default Music;
