import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
import { ChatBubbleOutline } from "@mui/icons-material";
import { Telegram } from "@mui/icons-material";
import { BookmarkBorder } from "@mui/icons-material";

function Post({ user, postImage, likes, timeStamp }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          &nbsp;&nbsp;{user} . <span>{timeStamp}</span>
        </div>

        <MoreHoriz />
      </div>
      <div className="post__image">
        <img src={postImage} alt=""></img>
      </div>
      <div className="post__footer">
        <div className="post_footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorder className="posticon" />
            <ChatBubbleOutline className="posticon" />
            <Telegram className="posticon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorder className="posticon" />
          </div>
        </div>
        Liked by {likes} people
      </div>
    </div>
  );
}

export default Post;
