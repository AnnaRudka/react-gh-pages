import React from "react";
import "./style/post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faShare,
  faDownload,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

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
      <div className="post_container">
        <div className="post-header">
          <div className="autor_photo">
            <img className="photo" src={photo} alt="profileImage" />
          </div>
          <div className="content">
            <div className="autor-info">
              <div className="info-item name">{name}</div>
              <div className="info-item">
                <FontAwesomeIcon icon={faCheckCircle} />
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
            <FontAwesomeIcon icon={faComment} className="icon" />
            <span>{comments}</span>
          </div>
          <div className="details-item">
            <FontAwesomeIcon icon={faShare} className="icon" />
            <span>{reposts}</span>
          </div>
          <div className="details-item">
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <span>{likes}</span>
          </div>
          <div className="details-item">
            <FontAwesomeIcon icon={faDownload} className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
