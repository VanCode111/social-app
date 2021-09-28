import React from "react";
import "./Profile.scss";
import Template from "../../components/Template/Template";
import Loader from "../../components/Loader/Loader";

function Profile({ user }) {
  return (
    <div className="profile">
      <Template
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
