import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Action, compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { addMessageActionCreator } from '../Redux/DialogsPage_Reduser';
import { AppStateType } from '../Redux/ReduxStore';
import Dialogs from './Dialogs';


const mapStateToProps = (state : AppStateType) => {
  return {
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  newMessageText: state.dialogsPage.newMessageText,
  
  }
}

const mapDispatchToProps = (dispatch : Dispatch<Action>) => {
  return {
    addMessage: (message : string) => dispatch(addMessageActionCreator(message)),
    
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);