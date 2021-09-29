import React from "react";
import "./Profile.scss";
import Template from "../../components/Template/Template";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/UI/Button/Button";

function Profile({ user }) {
  return (
    <div className="profile">
      <Template
        otherCards={
          <div className="profile__person-card">
            <div className="profile__avatar-wrapper">
              <div className="profile__avatar-popup"></div>
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
