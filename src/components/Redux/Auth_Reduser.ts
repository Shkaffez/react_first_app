import { ResultCodeEnum, ResultCodeWithCaptchaEnum } from "../../api/api";
import { securityAPI } from "../../api/securityAPI";
import { authAPI } from "../../api/authAPI";
import { BaseThunkType, InferActionTypes } from "./ReduxStore";


const SET_AUTH_USER_DATA = 'samurai-network/auth/SET_AUTH_USER_DATA';
const SET_LOGIN_ERROR = 'samurai-network/auth/SET_LOGIN_ERROR';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/ GET_CAPTCHA_URL_SUCCESS';


export const Actions = {
  setAuthUserData:
    (userId: number | null, email: string | null, login: string | null, isAuth: boolean, loginError: string | null) =>
      ({ type: SET_AUTH_USER_DATA, payload: { userId, email, login, isAuth, loginError } } as const),

  setLoginError: (loginError: string) =>
    ({ type: SET_LOGIN_ERROR, payload: { loginError } }),

  getCaptchaUrlSuccess: (captchaUrl: string) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } } as const)
}


const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  loginError: null as string | null,
  captchaUrl: null as string | null,

}


const authReduser = (state = initialState, action: ActionTypes): InitialStateType => {

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
        ...action.payload
      }

    }
    default:
      return state;
  }
}


export const authentication = () : BaseThunkType<ActionTypes> => async (dispatch) => {
  const data = await authAPI.authMe();
  if (data.resultCode === ResultCodeEnum.Success) {
    const { id, email, login } = data.data;
    dispatch(Actions.setAuthUserData(id, email, login, true, null));
  }
}


export const login = 
(email : string, password : string, rememberMe : boolean, captcha : string) : BaseThunkType<ActionTypes> =>
 async (dispatch: any) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodeEnum.Success) {
      dispatch(authentication());
    }
    else {
      if (data.resultCode === ResultCodeWithCaptchaEnum.CaptchaIsRequired) {
        dispatch(getCaptchaUrl());
      }
      const message = data.messages.length > 0 ? data.messages[0] : "login error";
      dispatch(Actions.setLoginError(message));
    }
  }


export const logout = () : BaseThunkType<ActionTypes> => async (dispatch) => {
  const data = await authAPI.logout()
  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(Actions.setAuthUserData(null, null, null, false, null));
  }
}


export const getCaptchaUrl = () : BaseThunkType<ActionTypes> => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data;

  dispatch(Actions.getCaptchaUrlSuccess(captchaUrl));
}


export default authReduser;


type InitialStateType = typeof initialState;

type ActionTypes = InferActionTypes<typeof Actions>;