const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});
export const updateNewMessageTextActionCreator = (text) => ({type:'UPDATE-NEW-MESSAGE-TEXT',
                                                            newMessage : text,
                                                            });    

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
    newMessageText: '',  
}

const dialogsReduser = (state = initialState, action) => {

    

    switch(action.type) {
      case ADD_MESSAGE: 
        let message = {
          id: parseInt(state.messages[state.messages.length - 1].id + 1),
          message: state.newMessageText
        }        
        return {
          ...state,
          messages: [...state.messages, message],
          newMessageText: ''
        }                
             
      case UPDATE_NEW_MESSAGE_TEXT: 
        return {
          ...state,
          newMessageText: action.newMessage
        }                 
        
      
      default:
        return state;
      }
}

export default dialogsReduser;

