const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';




export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUserAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (pageNumper) => ({ type: SET_CURRENT_PAGE, pageNumper });
export const setTotalUsersCountAC = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });


let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1
}

const usersReduser = (state = initialState, action) => {



  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      }
    case SET_USERS:      
      return {
        ...state,
        users: action.users
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumper

      }
    default:
      return state;
  }
}

export default usersReduser;

