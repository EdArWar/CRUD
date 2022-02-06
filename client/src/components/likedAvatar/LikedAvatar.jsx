import React from "react";
import "./LikedAvatar.scss";
import LikedAvatarItem from "./likedAvatarItem/LikedAvatarItem";

const LikedAvatar = () => {
  const arr = [1, 2, 3, 4, 5];

  return (
    <div className="like_avatar">
      {arr.map((item, i) => (
        <LikedAvatarItem key={item} />
      ))}
      <div className="like_avatar_more">
        <div className="like_avatar_more_dot"></div>
        <div className="like_avatar_more_dot"></div>
        <div className="like_avatar_more_dot"></div>
      </div>
    </div>
  );
};

export default LikedAvatar;
