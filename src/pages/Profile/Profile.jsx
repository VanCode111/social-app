import React, { useState, useEffect } from "react";
import "./Profile.scss";
import Template from "../../components/Template/Template";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/UI/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { uploadImage } from "../../http/ProfileAPI";
import Wall from "./Wall/Wall";
import { setImage } from "../../store/authSlice";

function Profile({ user, link }) {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const userAuth = useSelector((store) => store.auth);
  const ownPage = link ? userAuth.user.link === "/" + link : false;

  const selectFile = async (e) => {
    const img = e.target.files[0];
    if (!img) {
      return;
    }
    const formData = new FormData();
    formData.append("img", img);
    formData.append("userId", user.user);
    try {
      const res = await uploadImage(formData);
      setFile(res);
      dispatch(setImage(res));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    document.title = user.name + " " + user.lastName;
    if (file) {
      setFile(null);
    }
  }, [user]);
  return (
    <div className="profile">
      <Template
        otherCards={
          <div className="profile__person-card">
            <div
              className="profile__avatar-wrapper"
              style={{
                backgroundImage: `url(${
                  file ? file : user ? user.profileImage : ""
                })`,
              }}
            >
              {ownPage && (
                <div className="profile__avatar-popup">
                  <input
                    onChange={selectFile}
                    type="file"
                    className="profile__upload"
                  />
                </div>
              )}
            </div>
            {!ownPage && <Button text="Добавить" className="profile__sub" />}
          </div>
        }
        mainPage={
          <div className="profile__main">
            <div className="profile__info">
              <p className="profile__name">
                {!user ? (
                  <Loader className="profile__loader-name" />
                ) : (
                  `${user.name} ${user.lastName}`
                )}
              </p>
            </div>

            <Wall
              className="profile__wall"
              userId={user.user}
              postCreator={ownPage}
            />
          </div>
        }
      />
    </div>
  );
}

export default Profile;
