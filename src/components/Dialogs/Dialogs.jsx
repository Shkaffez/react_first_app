import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';




const Dialogs = (props) => {

  

  let dialogsElements = props.store.getState().dialogsPage.dialogs.map(element => <DialogItem name={element.name} id={element.id} />);
  let messagesElements = props.store.getState().dialogsPage.messages.map(element => <Message message={element.message} id={element.id}/>)

  let message = React.createRef();

  let addMessage = () => {
    // props.store.addMessage();
    props.store.dispatch({type: 'ADD-MESSAGE'})
    
  }

  let onMessageChange = () => {
    let text = message.current.value;
    // props.store.updateNewMessageText(text);
    props.store.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT',
                          newMessage : text,
                        })
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messeges}>
        {messagesElements}
        <textarea onChange={ onMessageChange } ref={ message } value={props.store.getState().dialogsPage.newMessageText}></textarea>
        <button onClick= { addMessage }>addMessage</button>
      </div>
    </div>
  )
}

export default Dialogs;