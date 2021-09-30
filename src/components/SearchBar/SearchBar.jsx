import React from "react";
import "./SearchBar.scss";
import PropTypes from "prop-types";

function SearchBar({ placeholder, className, onChange, onClick }) {
  return (
    <div className={"search-bar " + className}>
      <input
        onClick={onClick}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        className="search-bar__input"
      />
      <button className="search-bar__button"></button>
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default SearchBar;
