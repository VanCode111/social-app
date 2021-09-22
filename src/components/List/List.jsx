import React, { useEffect } from "react";
import { Component } from "react";
import MusicItem from "../MusicItem/MusicItem";
import "./List.scss";

function List({
  items,
  playMusic,
  currentMusic,
  audio,
  loading,
  loader,
  loaderList,
}) {
  const [loaders, setLoaders] = React.useState([]);

  useEffect(() => {
    const items = [];
    for (let i = 0; i < loaderList; i++) {
      items.push(loader);
    }
    setLoaders(items);
  }, []);
  return (
    <div className="list">
      {loading && loaders}
      {!loading &&
        items.map((item) => {
          return (
            <MusicItem
              key={item.id}
              curr={currentMusic?.id === item.id ? currentMusic : null}
              playMusic={playMusic}
              className="list__music"
              item={item}
              audio={audio}
            />
          );
        })}
    </div>
  );
}

export default List;
