import React, { useState } from "react";
import "./Profile.scss";
import Template from "../../components/Template/Template";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/UI/Button/Button";
import { useSelector } from "react-redux";
import { uploadImage } from "../../http/ProfileAPI";

function Profile({ user, link }) {
  const [file, setFile] = useState(null);
  const userAuth = useSelector((store) => store.auth);
  const ownPage = link ? userAuth.user.link === "/" + link : false;
  const selectFile = async (e) => {
    console.log(e.target.files);
    const img = e.target.files[0];
    if (!img) {
      return;
    }
    const formData = new FormData();
    formData.append("img", img);
    console.log("asfasf", user.user);
    formData.append("userId", user.user);
    try {
      const res = await uploadImage(formData);
      setFile(res);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(user);
  return (
    <div className="profile">
      <Template
        otherCards={
          <div className="profile__person-card">
            <div
              className="profile__avatar-wrapper"
              style={{
                backgroundImage: `url(${
                  user ? user.profileImage : "http://localhost:5000/Avatar.jpg"
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
          <div className="profile__info">
            <p className="profile__name">
              {!user ? (
                <Loader className="profile__loader-name" />
              ) : (
                `${user.name} ${user.lastName}`
              )}
            </p>
          </div>
        }
      />
    </div>
  );
}

export default Profile;
