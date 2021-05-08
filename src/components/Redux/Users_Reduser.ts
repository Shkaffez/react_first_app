import { Dispatch } from "react";
import { ResultCodeEnum } from "../../api/api";
import { usersAPI } from "../../api/usersAPI";
import { updateObjectInArray } from "../../utils/object-helpers";
import { InferActionTypes, BaseThunkType } from "./ReduxStore";


export const Actions = {
  followSuccess: (userId: number) => ({ type: "FOLLOW", userId } as const),
  unfollowSuccess: (userId: number) => ({ type: "UNFOLLOW", userId } as const),
  setUser: (users: Array<IUsers>) => ({ type: "SET_USERS", users } as const),
  setCurrentPage: (pageNumper: number) => ({ type: "SET_CURRENT_PAGE", pageNumper } as const),
  setTotalItemsCount: (totalCount: number) => ({ type: "SET_TOTAL_USERS_COUNT", totalCount } as const),
  toggleIsFetching: (isFetching: boolean) => ({ type: "TOGGLE_IS_FETCHING", isFetching } as const),
  toggleFollowingInPropress: (isFetching: boolean, userId: number) => ({ type: "TOGGLE_FOLLOWING_IN_PROGRESS", isFetching, userId } as const)
}


let initialState = {
  users: [] as  Array<IUsers>,
  pageSize: 10 as number | null,
  totalItemsCount: 0 as number | null,
  currentPage: 1 as number | null,
  isFetching: false as boolean,
  followingInProgress: [] as Array<number>, //Array of users id
  portionSize: 10 as number | null,
}


const usersReduser = (state = initialState, action: ActionTypes): InintialStateType => {

  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
      }

    case "UNFOLLOW":
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
      }
    case "SET_USERS":
      return {
        ...state,
        users: action.users
      }
    case "SET_TOTAL_USERS_COUNT":
      return {
        ...state,
        totalItemsCount: action.totalCount
      }
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.pageNumper
      }
    case "TOGGLE_IS_FETCHING":
      return {
        ...state,
        isFetching: action.isFetching
      }
    case "TOGGLE_FOLLOWING_IN_PROGRESS":
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
}



export const requestUsers = (currentPage: number | null, pageSize: number | null): BaseThunkType<ActionTypes> =>
  async (dispatch) => {
    dispatch(Actions.toggleIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(Actions.toggleIsFetching(false));
    dispatch(Actions.setUser(data.items));
    dispatch(Actions.setTotalItemsCount(data.totalCount));
  }


let followUnfollowFlow = async (userId: number, dispatch: Dispatch<ActionTypes>,
  apiMethod: any,  actionCreator: (userId: number) => ActionTypes) => {
  dispatch(Actions.toggleFollowingInPropress(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(actionCreator(userId));
  }
  dispatch(Actions.toggleFollowingInPropress(false, userId));
}

export const follow = (userId: number): BaseThunkType<ActionTypes> => async (dispatch) => {
  followUnfollowFlow(userId, dispatch, usersAPI.follow.bind(usersAPI), Actions.followSuccess);
}

export const unfollow = (userId: number): BaseThunkType<ActionTypes> => async (dispatch) => {
  followUnfollowFlow(userId, dispatch, usersAPI.unfollow.bind(usersAPI), Actions.unfollowSuccess);
}



export default usersReduser;


export interface IUsers {
  name: string
  id: number
  photos: {
    small: null | string
    large: null | string
  }
  status: null | string
  followed: false
}

type InintialStateType  = typeof initialState;

type ActionTypes = InferActionTypes<typeof Actions>;

