import React from "react";
import "./SearchBar.scss";

function SearchBar({ placeholder, className, onChange }) {
  return (
    <div className={"search-bar " + className}>
      <input
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        className="search-bar__input"
      />
      <button className="search-bar__button"></button>
    </div>
  );
}

export default SearchBar;
