import React from "react";
import "./Suggestions.css";
import { Avatar } from "@mui/material";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>P</Avatar>
            </span>
            <div className="username__info">
              <span className="username">pradeep</span>
              <span className="relation">New to instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>M</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Murali</span>
              <span className="relation">New to instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>P</Avatar>
            </span>
            <div className="username__info">
              <span className="username">praba</span>
              <span className="relation">New to instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>V</Avatar>
            </span>
            <div className="username__info">
              <span className="username">Vimal</span>
              <span className="relation">New to instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
