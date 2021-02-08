import { authAPI } from "../../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA,
                                                 payload: { userId, email, login, isAuth } });


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
  
}

const authReduser = (state = initialState, action) => {

  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload        
      }    
    default:
      return state;
  }
}

export const authentication = () => (dispatch) => {
    authAPI.authMe().then(data => {
      if(data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));        
      }  
  });
}


export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
      if(data.resultCode === 0) {
        dispatch(authentication());       
      }
  });
  }
}

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then(data => {
      if(data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));       
      }
  });
  }
}

export default authReduser;

