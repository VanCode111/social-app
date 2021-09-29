import React, { useState, useEffect } from "react";
import "./Profile.scss";
import Template from "../../components/Template/Template";
import Loader from "../../components/Loader/Loader";
import Button from "../../components/UI/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { uploadImage } from "../../http/ProfileAPI";
import { getProfilePosts } from "../../http/ProfileAPI";

import PostCreator from "../../components/PostCreator/PostCreator";
import { setImage } from "../../store/authSlice";

function Profile({ user, link }) {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const userAuth = useSelector((store) => store.auth);
  const ownPage = link ? userAuth.user.link === "/" + link : false;
  console.log(user);
  const getPosts = async (userId) => {
    try {
      const posts = await getProfilePosts({ userId });
      setPosts(posts);
    } catch (e) {
      console.log(e);
    }
  };
  const selectFile = async (e) => {
    console.log(e.target.files);
    const img = e.target.files[0];
    if (!img) {
      return;
    }
    const formData = new FormData();
    formData.append("img", img);
    console.log("asafsaga", user);
    formData.append("userId", user.user);
    try {
      const res = await uploadImage(formData);

      console.log("asfasf", res);
      setFile(res);
      dispatch(setImage(res));
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (user) {
      getPosts(user.user);
      document.title = user.name + " " + user.lastName;
    }
  }, [user]);
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
            {
              <PostCreator
                postCreator={ownPage}
                userId={user ? user.user : null}
                posts={posts}
                className="profile__post-card"
              />
            }
          </div>
        }
      />
    </div>
  );
}

export default Profile;
