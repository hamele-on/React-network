import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post"


const MyPosts = () => {
  return (
    <div>
      MyPosts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remyve post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi this my now  acuont" likeCounts='15'/>
        <Post message="How are you?" likeCounts='16' />
       
      </div>

    </div>
  );

}

export default MyPosts;
