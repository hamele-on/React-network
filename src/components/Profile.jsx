import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1280x10000:format=png/path/sa76e733a9e22af6d/image/i73bc67433a478723/version/1518633792/image.png" alt="" />
      </div>
      <div>
        AVA + DESCRIPTION
      </div>
      <div>
        MY POSTS
        <div>
          NEW POST
        </div>
        <div className={s.posts}>
          <div className={s.item}>
            Post 1
          </div>

          <div className={s.item}>
            Post 2
          </div>

        </div>

      </div>
    </div>
  );

}

export default Profile;