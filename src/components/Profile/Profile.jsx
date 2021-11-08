import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
  return (
    <div>
      <div className={s.content}>
        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1280x10000:format=png/path/sa76e733a9e22af6d/image/i73bc67433a478723/version/1518633792/image.png" alt="" />
      </div>
      <div>
        AVA + DESCRIPTION
      </div>
      <MyPosts />
      <div>
      </div>
    </div>
  );

}

export default Profile;
