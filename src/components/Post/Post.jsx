import React, { useState } from "react";
import "./Post.scss";
import { MdDelete } from "react-icons/md";
import ButtonIcon from "../UI/ButtonIcon/ButtonIcon";
import { BellIcon } from "../Icons";
import { Settings } from "../Icons";
import MouseOverHandler from "../Handlers/MouseOverHandler";
import UserRow from "../UserRow/UserRow";
import PropTypes from "prop-types";
import IconText from "../UI/IconText/IconText";
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
              <MouseOverHandler mouseOverHandle={() => setDropDownIsOpen(true)}>
                <Settings />
              </MouseOverHandler>
            </ButtonIcon>
          }
        >
          <CellButton>
            <IconText
              icon={<MdDelete color="gray" size="1.5em" />}
              text="Удалить"
            />
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
