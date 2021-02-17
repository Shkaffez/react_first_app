import { authAPI } from "../../api/api";


const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

export const setAuthUserData = (userId, email, login, isAuth, loginError) => ({ type: SET_AUTH_USER_DATA,
                                                 payload: { userId, email, login, isAuth, loginError } });
export const setLoginError = (loginError) => ({ type: SET_LOGIN_ERROR, loginError })


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  loginError: undefined
  
}

const authReduser = (state = initialState, action) => {

  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload        
      }  
    case  SET_LOGIN_ERROR: 
    
      return {
        ...state,        
        loginError: action.loginError
      }
    default:
      return state;
  }
}

export const authentication = () => (dispatch) => {
    return authAPI.authMe().then(data => {
      if(data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true, undefined));        
      }  
  });
}


export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
      if(data.resultCode === 0) {
        dispatch(authentication());       
      }
      else {
        let message = data.messages.length > 0 ? data.messages[0] : "login error";   
           
        dispatch(setLoginError(message));
      }
  });
  }
}

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then(data => {
      if(data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, undefined));       
      }
  });
  }
}

export default authReduser;

