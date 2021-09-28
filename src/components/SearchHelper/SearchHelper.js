import React, { useState } from "react";
import { findObjects } from "../../http/objectsAPI";
import { SearchBar } from "..";
function SearchHelper() {
  const [objects, setObjects] = useState([]);
  const findHandle = async (e) => {
    try {
      if (e.target.value === "") {
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
      <div className="search-helper__box">
        {objects &&
          objects.map((obj) => {
            return <p>{obj.name + " " + obj.lastName}</p>;
          })}
      </div>
    </div>
  );
}

export default SearchHelper;
