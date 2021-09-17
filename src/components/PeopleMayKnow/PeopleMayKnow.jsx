import React from "react";
import "./PeopleMayKnow.scss";
import UserRow from "../UserRow/UserRow";

const people = [
  {
    name: "Ivan Eliseev",
  },
  {
    name: "Ivan Eliseev",
  },
  {
    name: "Ivan Eliseev",
  },
  {
    name: "Ivan Eliseev",
  },
  {
    name: "Ivan Eliseev",
  },
];

function PeopleMayKnow() {
  return (
    <div className="mayknow">
      <p className="mayknow__title">Возможные друзья</p>
      {people.map(({ name }) => {
        return <UserRow className="mayknow__user" name={name} />;
      })}
    </div>
  );
}

export default PeopleMayKnow;
