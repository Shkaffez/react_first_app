const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});
export const updateNewMessageTextActionCreator = (text) => ({type:'UPDATE-NEW-MESSAGE-TEXT',
                                                            newMessage : text,
                                                            });    

const dialogsReduser = (state, action) => {
    switch(action.type) {
      case ADD_MESSAGE:
        let message = {
          id: parseInt(state.messages[state.messages.length - 1].id + 1),
          message: state.newMessageText
        }
    
        state.messages.push(message);
        state.newMessageText = '';        
        return state;
      case UPDATE_NEW_MESSAGE_TEXT:
        state.newMessageText = action.newMessage;        
        return state;
      default:
        return state;
      }
}

export default dialogsReduser;