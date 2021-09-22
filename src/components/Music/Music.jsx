import React, { useState, useEffect } from "react";
import "./Music.scss";
import List from "../List/List";
import MusicItem from "../MusicItem/MusicItem";
import "./Music.scss";
import { useSelector, useDispatch } from "react-redux";
import { setMusic, setTracks } from "../../store";
import Loader from "../../components/Loader/Loader";
import { playMusic } from "../../audio";
import Tabs from "../Tabs/Tabs";
import OwnMusic from "../OwnMusic/OwnMusic";

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
      <Tabs
        tabs={[
          { name: "Моя музыка", id: 1 },
          { name: "Рекомендации", id: 2 },
        ]}
      >
        <OwnMusic handleMusic={handleMusic} audio={audio} id={1} />
      </Tabs>
    </div>
  );
}

export default Music;
