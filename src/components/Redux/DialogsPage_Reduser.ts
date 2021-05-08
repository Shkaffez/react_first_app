import { InferActionTypes } from "./ReduxStore";

const ADD_MESSAGE = 'ADD-MESSAGE';

const Actions = {
  addMessageActionCreator: (message: string) => ({type: 'ADD-MESSAGE', message} as const)
}


let initialState  = {  
    dialogs: [
      { id: 1, name: "Ivan" },
      { id: 2, name: "Zlata" },
      { id: 3, name: "Den" },
      { id: 4, name: "Foksi" },
      { id: 5, name: "Taldom" }
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "I'm fine" }
    ],
    newMessageText: null as string | null
    
}

const dialogsReduser = (state = initialState, action: ActionTypes) : InitialStateType => {
  switch(action.type) {
    case ADD_MESSAGE:    
        let message  = {          
          id: Number(state.messages[state.messages.length - 1].id + 1),
          message: action.message
        }        
        return {
          ...state,
          messages: [...state.messages, message],          
        } 
      default:
        return state;
      }
}

type InitialStateType = typeof initialState;

type ActionTypes = InferActionTypes<typeof Actions>;

export default dialogsReduser;

