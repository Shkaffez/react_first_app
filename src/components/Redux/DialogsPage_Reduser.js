const ADD_MESSAGE = 'ADD-MESSAGE';


export const addMessageActionCreator = (message) => ({type: 'ADD-MESSAGE', message});


let initialState = {  
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
    
}

const dialogsReduser = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MESSAGE:    
        let message = {
          
          id: parseInt(state.messages[state.messages.length - 1].id + 1),
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

export default dialogsReduser;

