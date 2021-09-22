import React, { useState, useEffect } from "react";
import "./Music.scss";
import List from "../List/List";
import MusicItem from "../MusicItem/MusicItem";
import "./Music.scss";
import { useSelector, useDispatch } from "react-redux";
import { setMusic, setTracks } from "../../store";
import Loader from "../../components/Loader/Loader";
import { playMusic } from "../../audio";

let interval;

function Music({ audio }) {
  const dispatch = useDispatch();
  const [tracks, setTrack] = useState([]);
  const currentMusic = useSelector((store) => store.currentMusic);
  const [loading, setLoading] = useState(true);

  const handleMusic = async (url, id, title, image) => {
    const { music, val } = await playMusic(
      url,
      id,
      title,
      audio,
      currentMusic,
      image
    );
    console.log(interval);
    interval = val;
    dispatch(setMusic(music));
  };

  useEffect(() => {
    const getTracks = async () => {
      const response = await fetch("http://localhost:3000/tracks");
      const res = await response.json();
      setTrack(res);
      dispatch(setTracks(res));
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
        playMusic={handleMusic}
        currentMusic={currentMusic}
        component={MusicItem}
        items={tracks}
        audio={audio}
      />
    </div>
  );
}

export default Music;
