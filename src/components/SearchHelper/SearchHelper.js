import React, { useState } from "react";
import { findObjects } from "../../http/objectsAPI";
import { SearchBar } from "..";
import UserRow from "../UserRow/UserRow";
import "./SearchHelper.scss";
function SearchHelper() {
  const [objects, setObjects] = useState([]);
  const typing = (e) => {
    setTimeout(() => {
      findHandle(e.target.value);
    }, 500);
  };
  const findHandle = async (str) => {
    try {
      if (str.trim() === "") {
        setObjects([]);
        return;
      }

      const promise = findObjects({ subString: str });
      const objects = await promise;
      setObjects(objects);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="search-helper">
      <SearchBar onChange={typing} placeholder="Поиск" />
      {objects.length > 0 && (
        <div className="search-helper__box">
          {objects &&
            objects.map((obj) => {
              return (
                <UserRow
                  className="search-helper__item"
                  path={obj.link}
                  profile={obj.profile}
                  name={`${obj.profile.name} ${obj.profile.lastName}`}
                />
              );
            })}
        </div>
      )}
    </div>
  );
}

export default SearchHelper;
