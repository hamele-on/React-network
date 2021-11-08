import React from "react";
import s from "./Post.module.css";




const Post = (props) => {
 

  return (
  


    <div className={s.item}>
      <img src='https://cdn.gambit-rp.ru/wcloud/upload/photos/2021/03/sfxcZPAr1C3qT2576KNi_05_b403e5ccd158e809a7ddea60d0ef1fd3_avatar_full.jpg' />
      {props.message}
      <div>
        <span>{'Like'+' '+ props.likeCounts}</span>
      </div>

    </div>




  );

}

export default Post;
