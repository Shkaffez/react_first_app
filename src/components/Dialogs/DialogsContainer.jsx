import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../Redux/DialogsPage_Reduser';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
  return {
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  newMessageText: state.dialogsPage.newMessageText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(addMessageActionCreator()),
    updateNewMessageText: (text) => dispatch(updateNewMessageTextActionCreator(text))
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;