import React, { useState, useEffect } from "react";
import List from "../List/List";
import MusicItem from "../MusicItem/MusicItem";
import { useSelector, useDispatch } from "react-redux";
import { setMusic, setTracks } from "../../store";
import Loader from "../../components/Loader/Loader";

function OwnMusic({ handleMusic, audio }) {
  const dispatch = useDispatch();
  const [tracks, setTrack] = useState([]);
  const currentMusic = useSelector(({ tracks }) => tracks.currentMusic);
  const [loading, setLoading] = useState(true);
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
    <div className="own-music">
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

export default OwnMusic;
