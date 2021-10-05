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
function Post({
  className,
  profile,
  authorLink,
  post,
  deletePost,
  settings,
  children,
  bottom,
}) {
  const history = useHistory();
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
  const { name, lastName, profileImage } = profile;
  const authorName = name + " " + lastName;
  const clickAuthor = () => {
    history.push(authorLink, { type: "user", profile });
  };
  return (
    <div className={"post " + className}>
      <div className="post__container">
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
                <MouseOverHandler
                  mouseOverHandle={() => setDropDownIsOpen(true)}
                >
                  <Settings />
                </MouseOverHandler>
              </ButtonIcon>
            }
          >
            {settings}
          </DropDown>
        </div>
        <div className="post__content">{children}</div>
      </div>
      <div className="post__bottom">{bottom}</div>
    </div>
  );
}

Post.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
  authorLink: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
  className: PropTypes.string,
  deletePost: PropTypes.func,
};

export default Post;
