import MEM_FIRST from "../images/mem1.jpg";
import MEM_SECOND from "../images/mem2.jpeg";
import RUDKA_PHOTO from "../images/anna_photo1.jpg";

const initialState = {
  posts: [
    {
      id: 0,
      name: "Anna Rudka",
      photo: RUDKA_PHOTO,
      nickname: "@kucherjashka",
      content: "After first homework in React:",
      image: MEM_FIRST,
      date: "Aug 15",
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
      date: "Aug 26",
      comments: 51,
      reposts: 34,
      likes: 105,
    },
  ],
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case "new-post":
      return {
        ...state,
        posts: [
          {
            ...action.payload,
            id: Date.now(),
            date: `${Date().toString().slice(4, 10)}`,
            // comments: 0,
            // reposts: 0,
            // likes: 0,
          },
          ...state.posts,
        ],
      };
    default:
      return state;
  }
}
