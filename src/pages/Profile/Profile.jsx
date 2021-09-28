import React from "react";
import "./Profile.scss";
import Template from "../../components/Template/Template";

function Profile({ user }) {
  return (
    <div className="profile">
      <Template
        mainPage={
          <div className="profile__info">
            <p className="profile__name">{user && user.email}</p>
          </div>
        }
      />
    </div>
  );
}

export default Profile;
