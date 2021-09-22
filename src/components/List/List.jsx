import React from "react";
import { Component } from "react";
import MusicItem from "../MusicItem/MusicItem";
import "./List.scss";

function List({ items, playMusic, currentMusic }) {
  return (
    <div className="list">
      {items.map((item) => {
        return (
          <MusicItem
            currentMusic={currentMusic?.id === item.id ? currentMusic : null}
            playMusic={playMusic}
            className="list__music"
            item={item}
          />
        );
      })}
    </div>
  );
}

export default List;
