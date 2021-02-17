import { authAPI } from "../../api/api";
import { authentication } from "./Auth_Reduser";


const INITIALIZED_SUCCSESS = 'INITIALIZED_SUCCSESS';



export const initializedSuccsess = () => ({ type: INITIALIZED_SUCCSESS });


let initialState = {
  isInitialized: false,
  
  
}

const appReduser = (state = initialState, action) => {

  switch (action.type) {
    case INITIALIZED_SUCCSESS:
      return {
        ...state,
        isInitialized: true        
      }      
    default:
      return state;
  }
}

export const initializeApp = () => (dispatch) => {
    let promise =  dispatch(authentication());

    promise.then(() => {
      dispatch(initializedSuccsess());
    });
}



export default appReduser;

