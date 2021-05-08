import { BaseThunkType, InferActionTypes } from './ReduxStore';
import { ResultCodeEnum } from "../../api/api";
import { profileAPI } from "../../api/profileAPI";


const ADD_POST = 'samurai-network/postPage/ADD_POST';
const UPDATE_NEW_POST_TEXT = 'samurai-network/postPage/UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'samurai-network/postPage/SET_USER_PROFILE';
const SET_STATUS = 'samurai-network/postPage/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'samurai-network/postPage/SAVE_PHOTO_SUCCESS';
const SET_EDIT_PROFILE_DATA_ERROR = 'samurai-network/postPage/SET_EDIT_PROFILE_DATA_ERROR';



const Actions = {
addPost: (postText: string) => ({ type: ADD_POST, postText } as const),
updateNewPostText: (newText: string) => ({ type: UPDATE_NEW_POST_TEXT, newText } as const),
setUserProfile: (userProfile: UserProfileType) => ({ type: SET_USER_PROFILE, userProfile } as const),
setStatus: (status: string) => ({ type: SET_STATUS, status } as const),
savePhotoSuccess: (photos: PhotosType) => ({ type: SAVE_PHOTO_SUCCESS, photos } as const),
setEditProfileDataError: (editError: string) => ({ type: SET_EDIT_PROFILE_DATA_ERROR, editError } as const)
}


let initialState : InitialStateType = {
  posts: [
    { id: 1, message: "Hi, how are you?" },
    { id: 2, message: "It is my first post" }
  ],
  userProfile: null,
  status: "",
  editProfileDataError: undefined,
  newPostText: null
}

const postsReduser = (state = initialState, action: ActionsType) : InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let post = {
        id: Number(state.posts[state.posts.length - 1].id + 1),
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
        userProfile: {...state.userProfile, photos: action.photos} as UserProfileType
      }
    }

    case SET_EDIT_PROFILE_DATA_ERROR: {
      return {
        ...state,
        editProfileDataError: action.editError
      }
    }

    default:
      return state;
  }
}


export const getUserProfile = (userId: number) : BaseThunkType<ActionsType> => async (dispatch) => {
  let data = await profileAPI.getProfile(userId);
  dispatch(Actions.setUserProfile(data));
}


export const requestUserstatus = (userId: number) : BaseThunkType<ActionsType> => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(Actions.setStatus(data));
}

export const updateStatus = (status: string) : BaseThunkType<ActionsType> => async (dispatch) => {
  let data = await profileAPI.updateStatus(status)
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(Actions.setStatus(status));
  }
}

export const savePhoto = (file: File) : BaseThunkType<ActionsType> => async (dispatch) => {
  let data = await profileAPI.savePhoto(file)
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(Actions.savePhotoSuccess(data.data)); 
  }
}

export const saveProfile = (profiile: UserProfileType) : BaseThunkType<ActionsType> => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  let data = await profileAPI.saveProfile(profiile)
  if (data.resultCode === ResultCodeEnum.Success) {
    if(userId != null) {
      dispatch(getUserProfile(userId));
    } else {
        throw new Error("userId can't be null")
    }
    

  } else {
    let message = data.messages.length > 0 ? data.messages[0] : "editting profile error";
    dispatch(Actions.setEditProfileDataError(message));

  }
}

type ActionsType = InferActionTypes<typeof Actions>;


type PostsItemType = {
  id: number
  message: string | null
}

type ContactsType = {
  facebook: string | null
  website: string | null
  vk: string | null
  twitter: string | null
  instagram: string | null
  youtube: string | null
  github: string | null
  mainLink: string | null
}

type PhotosType = {
  small: string | null
  large: string | null
}

export type UserProfileType = {
  aboutMe: string | null
  contacts: ContactsType
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string | null
  userId: number | null
  photos: PhotosType
}

export type InitialStateType = {
  posts: Array<PostsItemType>
  userProfile: UserProfileType | null
  status: string | null
  editProfileDataError: undefined | string
  newPostText: string | null
}


export default postsReduser;