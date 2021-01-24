import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../Redux/DialogsPage_Reduser';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
  return {
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  newMessageText: state.dialogsPage.newMessageText,
  
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(addMessageActionCreator()),
    updateNewMessageText: (text) => dispatch(updateNewMessageTextActionCreator(text))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);