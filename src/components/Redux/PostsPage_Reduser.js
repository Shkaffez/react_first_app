import { profileAPI } from "../../api/api";

const ADD_POST = 'samurai-network/postPage/ADD_POST';
const UPDATE_NEW_POST_TEXT = 'samurai-network/postPage/UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'samurai-network/postPage/SET_USER_PROFILE';
const SET_STATUS = 'samurai-network/postPage/SET_STATUS';

export const addPost = (postText) => ({ type: ADD_POST, postText });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile: userProfile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?" },
    { id: 2, message: "It is my first post" }
  ],
  userProfile: null,
  status: "",
}

const postsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let post = {
        id: parseInt(state.posts[state.posts.length - 1].id + 1),
        message: action.postText
      }
      return {
        ...state,
        posts: [...state.posts, post],
      };

    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        userProfile: action.userProfile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }

    default:
      return state;
  }
}

export const getUserProfile = (userId) => async (dispatch) => {
  let data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
}


export const requesUserstatus = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
}

export default postsReduser;