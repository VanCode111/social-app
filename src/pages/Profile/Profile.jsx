import React, { useState } from "react";
import "./Profile.scss";
import Template from "../../components/Template/Template";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/UI/Button/Button";
import { uploadImage } from "../../http/ProfileAPI";

function Profile({ user }) {
  const [file, setFile] = useState(null);
  const selectFile = async (e) => {
    console.log(e.target.files);
    const img = e.target.files[0];
    if (!img) {
      return;
    }
    const formData = new FormData();
    formData.append("img", img);
    try {
      const res = await uploadImage(formData);
      setFile(res);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="profile">
      <Template
        otherCards={
          <div className="profile__person-card">
            <div
              className="profile__avatar-wrapper"
              style={{ backgroundImage: `url(${file ? file : ""})` }}
            >
              <div className="profile__avatar-popup">
                <input
                  onChange={selectFile}
                  type="file"
                  className="profile__upload"
                />
              </div>
            </div>
            <Button text="Добавить" className="profile__sub" />
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
