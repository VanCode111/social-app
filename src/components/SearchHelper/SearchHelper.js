import React, { useState } from "react";
import { findObjects } from "../../http/objectsAPI";
import { SearchBar } from "..";
import UserRow from "../UserRow/UserRow";
import ClickOutside from "../ClickOutside/ClickOutside";
import { Link } from "react-router-dom";
import SyncLoader from "react-spinners/MoonLoader";
import "./SearchHelper.scss";
function SearchHelper() {
  // const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [objects, setObjects] = useState([]);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const typing = (e) => {
    setIsLoading(true);
    setDropDownOpen(true);
    setTimeout(() => {
      findHandle(e.target.value);
      setIsLoading(false);
    }, 100);
  };

  const clickOutSide = () => {
    setDropDownOpen(false);
  };
  const openDropDown = () => {
    setDropDownOpen(true);
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
    <ClickOutside clickHandle={clickOutSide}>
      <div className="search-helper">
        <SearchBar
          onClick={openDropDown}
          onChange={typing}
          placeholder="Поиск"
        />
        {objects.length > 0 && dropDownOpen && (
          <div className={"search-helper__box open"}>
            {isLoading ? (
              <div className="search-helper__loading">
                <SyncLoader color="#00acff" loading={true} size={40} />
              </div>
            ) : (
              objects &&
              objects.map((obj) => {
                return (
                  <UserRow
                    className="search-helper__item"
                    path={obj.link}
                    profile={obj.profile}
                    img={obj.profile.profileImage}
                    name={`${obj.profile.name} ${obj.profile.lastName}`}
                  />
                );
              })
            )}
          </div>
        )}
      </div>
    </ClickOutside>
  );
}

export default SearchHelper;
