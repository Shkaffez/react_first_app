import { profileAPI } from "../../api/api";

const ADD_POST = 'samurai-network/postPage/ADD_POST';
const UPDATE_NEW_POST_TEXT = 'samurai-network/postPage/UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'samurai-network/postPage/SET_USER_PROFILE';
const SET_STATUS = 'samurai-network/postPage/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'samurai-network/postPage/SAVE_PHOTO_SUCCESS';
const SET_EDIT_PROFILE_DATA_ERROR = 'samurai-network/postPage/SET_EDIT_PROFILE_DATA_ERROR';
// const SET_SAVE_PROFILE_SUCCESS = 'samurai-network/postPage/SET_SAVE_PROFILE_SUCCESS';

export const addPost = (postText) => ({ type: ADD_POST, postText });
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile: userProfile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });
export const setEditProfileDataError = (editError) => ({ type: SET_EDIT_PROFILE_DATA_ERROR, editError });
// export const setSaveProfileSuccess = (isSuccess) => ({ type: SET_SAVE_PROFILE_SUCCESS, isSuccess });


let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?" },
    { id: 2, message: "It is my first post" }
  ],
  userProfile: null,
  status: "",
  editProfileDataError: undefined,
  // saveProfileSuccess: false,
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

    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        userProfile: {...state.userProfile, photos: action.photos}
      }
    }

    case SET_EDIT_PROFILE_DATA_ERROR: {
      return {
        ...state,
        editProfileDataError: action.editError
      }
    }

    // case SET_SAVE_PROFILE_SUCCESS: {
    //   return {
    //     ...state,
    //     saveProfileSuccess: action.isSuccess
    //   }
    // }

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

export const savePhoto = (file) => async (dispatch) => {
  let data = await profileAPI.savePhoto(file)
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
}

export const saveProfile = (profiile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  let data = await profileAPI.saveProfile(profiile)
  if (data.resultCode === 0) {    
    dispatch(getUserProfile(userId));
    // dispatch(setSaveProfileSuccess(true));
  } else {    
    let message = data.messages.length > 0 ? data.messages[0] : "editting profile error";
    dispatch(setEditProfileDataError(message));
    // dispatch(setSaveProfileSuccess(false));    
  }
}

export default postsReduser;