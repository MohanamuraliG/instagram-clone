import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Post from "./posts/Post";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "pradeep_",
      postImage:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      likes: 12,
      timeStamp: "2d",
    },
    {
      user: "monae_",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      likes: 50,
      timeStamp: "1h",
    },
    {
      user: "ebson_",
      postImage:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
      likes: 2,
      timeStamp: "1d",
    },
    {
      user: "azhagu_",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
      likes: 69,
      timeStamp: "3d",
    },
    {
      user: "ponnusamy_",
      postImage: "https://picsum.photos/300/200",
      likes: 1,
      timeStamp: "1h",
    },
    
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timeStamp={post.timeStamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
