import { authAPI, securityAPI } from "../../api/api";


const SET_AUTH_USER_DATA = 'samurai-network/auth/SET_AUTH_USER_DATA';
const SET_LOGIN_ERROR = 'samurai-network/auth/SET_LOGIN_ERROR';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/ GET_CAPTCHA_URL_SUCCESS';

export const setAuthUserData = (userId, email, login, isAuth, loginError) => ({
  type: SET_AUTH_USER_DATA,
  payload: { userId, email, login, isAuth, loginError }
});
export const setLoginError = (loginError) => ({ type: SET_LOGIN_ERROR, payload: { loginError } });
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS,  captchaUrl });


const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  loginError: undefined,
  captchaUrl: null,

}

const authReduser = (state = initialState, action) => {

  switch (action.type) {
    case SET_AUTH_USER_DATA:
    case SET_LOGIN_ERROR:
      
      return {
        ...state,
        ...action.payload
      }
      case GET_CAPTCHA_URL_SUCCESS: {
        return {          
          ...state,
          captchaUrl: action.captchaUrl

        }

      }
    default:
      return state;
  }
}

export const authentication = () => async (dispatch) => {
  const data = await authAPI.authMe();
  if (data.resultCode === 0) {
    const { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true, undefined));
  }
}


export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    dispatch(authentication());
  }
  else {
    if(data.resultCode === 10) {      
      dispatch(getCaptchaUrl());
    }
    const message = data.messages.length > 0 ? data.messages[0] : "login error";
    dispatch(setLoginError(message));
  }
}

export const logout = () => async (dispatch) => {
  const data = await authAPI.logout()
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false, undefined));
  }
}

export const getCaptchaUrl = () => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();  
  const captchaUrl = data.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl));
}


export default authReduser;

