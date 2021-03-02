import postsReduser from "./PostsPage_Reduser.js";
import { addPost } from "./PostsPage_Reduser.js";

it("length should be increment", () => {
  // test data
  let action = addPost("it-kamasutra");
  let state = {
    posts: [
      { id: 1, message: "Hi, how are you?" },
      { id: 2, message: "It is my first post" }
    ],      
  }
  // action
  let newState = postsReduser(state, action);

  // expectation
  expect(newState.posts.length).toBe(3);

});
