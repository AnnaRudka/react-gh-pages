import React from "react";
import Post from "./Post";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  AddPostContainer,
  Input,
  Button,
  Textarea,
  SelectorBlock,
} from "./StyledComponents";
import RUDKA_PHOTO from "../images/anna_photo1.jpg";
import LIUBOMYR_PHOTO from "../images/liubomyr_photo.jpg";
import MEM_THIRD from "../images/mem3.png";

function AddPost() {
  const authors = [
    {
      name: "Anna Rudka",
      photo: RUDKA_PHOTO,
      nickname: "@kucherjashka",
    },
    {
      name: "Liubomyr Kapov",
      photo: LIUBOMYR_PHOTO,
      nickname: "@kapoliub",
    },
  ];
  const [postText, setPostText] = useState("Hello");
  const [postImage, setPostImage] = useState(MEM_THIRD);
  const [postAuthor, setPostAuthor] = useState([authors[1]]);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "text":
        setPostText(value);
        break;
      case "post-image":
        setPostImage(value);
        break;
      case "post-author":
        setPostAuthor(authors[value]);
        break;
      default:
        break;
    }
  };

  const addPost = {
    type: "new-post",
    payload: {
      content: postText,
      image: postImage,
      name: postAuthor.name,
      photo: postAuthor.photo,
      nickname: postAuthor.nickname,
    },
  };

  const addNewPost = (e) => {
    e.preventDefault();
    dispatch(addPost);
  };

  return (
    <div>
      <AddPostContainer>
        <h3>Add new post: </h3>
        <Textarea
          name="text"
          onInput={onChangeHandler}
          value={postText}
          id="post-text"
          placeholder="What's on your mind?"
        ></Textarea>
        <Input
          name="post-image"
          onInput={onChangeHandler}
          value={postImage}
          type="text"
          id="post-image"
          placeholder="Please add URL for image..."
        />
        <SelectorBlock>
          <label htmlFor="author">Select author</label>
          <select
            name="post-author"
            onInput={onChangeHandler}
            value={postAuthor}
          >
            <option value="0"></option>
            <option value="0">@kucherjashka</option>
            <option value="1">@kapoliub</option>
          </select>
        </SelectorBlock>
        <Button onClick={addNewPost}>Add post</Button>
      </AddPostContainer>
      <div className="container_posts">
        {posts.map((post, index) => (
          <Post {...post} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AddPost;
