import React, { useState } from "react";
import "./Post.scss";
import ButtonIcon from "../UI/ButtonIcon/ButtonIcon";
import { BellIcon } from "../Icons";
import UserRow from "../UserRow/UserRow";
import PropTypes from "prop-types";
import CellButton from "../UI/CellButton/CellButton";
import DropDown from "../UI/DropDown/DropDown";
import { useHistory } from "react-router-dom";
function Post({ className, profile, authorLink, text }) {
  const history = useHistory();
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
  const { name, lastName, profileImage } = profile;
  const authorName = name + " " + lastName;
  const clickAuthor = () => {
    history.push(authorLink, { type: "user", profile });
  };
  return (
    <div className={"post " + className}>
      <div className="post__header">
        <div className="post__header-left">
          <UserRow
            path={authorLink}
            clickHandler={clickAuthor}
            img={profileImage}
            name={authorName}
          />
        </div>
        <DropDown
          isOpen={dropDownIsOpen}
          clickOutSide={() => setDropDownIsOpen(false)}
          headElement={
            <ButtonIcon
              onClick={() => setDropDownIsOpen((prev) => !prev)}
              className="post__setting"
            >
              <BellIcon />
            </ButtonIcon>
          }
        >
          <CellButton>
            <p>Иван Елисеев</p>
          </CellButton>
        </DropDown>
      </div>
      <div className="post__content">
        <p className="post__text">{text}</p>
      </div>
    </div>
  );
}

Post.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
  authorLink: PropTypes.string.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Post;
