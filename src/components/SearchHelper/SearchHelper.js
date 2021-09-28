import React, { useState } from "react";
import { findObjects } from "../../http/objectsAPI";
import { SearchBar } from "..";
import UserRow from "../UserRow/UserRow";
import { Link } from "react-router-dom";
import "./SearchHelper.scss";
function SearchHelper() {
  const [objects, setObjects] = useState([]);
  const findHandle = async (e) => {
    try {
      if (e.target.value.trim() === "") {
        setObjects([]);
        return;
      }
      const objects = await findObjects({ subString: e.target.value });
      console.log(objects);
      setObjects(objects);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="search-helper">
      <SearchBar onChange={findHandle} placeholder="Поиск" />
      {objects.length > 0 && (
        <div className="search-helper__box">
          {objects &&
            objects.map((obj) => {
              console.log(obj);
              return (
                <UserRow path={obj.link} name={`${obj.name} ${obj.lastName}`} />
              );
            })}
        </div>
      )}
    </div>
  );
}

export default SearchHelper;
