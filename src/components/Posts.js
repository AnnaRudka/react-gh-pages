import React from "react";
import Post from "./Post";
import MEM_FIRST from "../images/mem1.jpg";
import MEM_SECOND from "../images/mem2.jpeg";
import RUDKA_PHOTO from "../images/anna_photo1.jpg";

const posts = [
  {
    id: 0,
    name: "Anna Rudka",
    photo: RUDKA_PHOTO,
    nickname: "@kucherjashka",
    content: "After first homework in React:",
    image: MEM_FIRST,
    date: "28.07.2021",
    comments: 24,
    reposts: 15,
    likes: 89,
  },
  {
    id: 1,
    name: "Anna Rudka",
    photo: RUDKA_PHOTO,
    nickname: "@kucherjashka",
    content: "After second homework...",
    image: MEM_SECOND,
    date: "31.07.2021",
    comments: 51,
    reposts: 34,
    likes: 105,
  },
];

const Posts = () => {
  return (
    <div className="container_posts">
      {posts.map((post, index) => (
        <Post {...post} key={index} />
      ))}
    </div>
  );
};

export default Posts;
