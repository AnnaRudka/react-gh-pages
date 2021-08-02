import React from "react";
import "./post.css";
import active from "./icons/active.jpg";
import comment from "./icons/comment.png";
import like from "./icons/likes.png";
import save from "./icons/save.png";
import share from "./icons/share.png";

const Post = ({
  name,
  photo,
  nickname,
  content,
  image,
  date,
  comments,
  reposts,
  likes,
}) => {
  return (
    <div className="container_item">
      <div className="post_conteiner">
        <div className="post-header">
          <div className="autor_photo">
            <img className="photo" src={photo} alt="profileImage" />
          </div>
          <div className="content">
            <div className="autor-info">
              <div className="info-item name">{name}</div>
              <div className="info-item activity_icon">
                <img src={active} alt="icon" />
              </div>
              <div className="info-item nickname">{nickname}</div>
              <div className="info-item date">{date}</div>
            </div>
            <div className="post-text">{content}</div>
          </div>
        </div>
        <div className="picture_container">
          <img className="picture" src={image} alt="mem" />
        </div>
        <div className="post_details">
          <div className="details-item">
            <img className="details-icon" src={comment} alt="comments" />
            <span>{comments}</span>
          </div>
          <div className="details-item">
            <img className="details-icon" src={share} alt="sharings" />
            <span>{reposts}</span>
          </div>
          <div className="details-item">
            <img className="details-icon" src={like} alt="likes" />
            <span>{likes}</span>
          </div>
          <div className="details-item">
            <img className="details-icon" src={save} alt="download" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
