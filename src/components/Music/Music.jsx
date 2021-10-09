import React, { useState, useEffect } from "react";
import "./Music.scss";
import { useSelector, useDispatch } from "react-redux";
import { setMusic, setTracks } from "../../store";
import { playMusic } from "../../audio";
import Tabs from "../Tabs/Tabs";
import OwnMusic from "../OwnMusic/OwnMusic";
import { getMusic, musicAPI } from "../../http/musicAPI";

let interval;

function Music({ audio }) {
  const dispatch = useDispatch();
  const [tracks, setTrack] = useState([]);
  const currentMusic = useSelector(({ tracks }) => tracks.currentMusic);
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
    interval = val;
    dispatch(setMusic(music));
  };

  useEffect(() => {
    document.title = "Музыка";
    const getTracks = async () => {
      const res = await getMusic();
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
