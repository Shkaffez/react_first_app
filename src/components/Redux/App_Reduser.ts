import { authentication } from "./Auth_Reduser";
import { InferActionTypes } from "./ReduxStore";


const INITIALIZED_SUCCSESS = 'INITIALIZED_SUCCSESS';



const Actions = {
  initializedSuccsess: () => ({ type: INITIALIZED_SUCCSESS } as const)
}

type ActionsType = InferActionTypes<typeof Actions>;




let initialState  = {
  isInitialized: false,
}

const appReduser = (state = initialState, action : ActionsType) : InitialStateType => {

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

export const initializeApp  = () => (dispatch : any) => {
    let promise =  dispatch(authentication());

    promise.then(() => {
      dispatch(Actions.initializedSuccsess());
    });
}

type InitialStateType = typeof initialState;

export default appReduser;

