import React from 'react';
import { Redirect } from 'react-router-dom';
import { InputForm } from '../common/inputForm';
import DialogItem from './DialogItem/DialogsItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';




const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map(element => <DialogItem name={element.name} id={element.id}
                                                                                  key={element.id} />);
  let messagesElements = props.messages.map(element => <Message message={element.message} id={element.id}
                                                                                      key={element.id}  />)

  

  

 

  let addNewMessage = (values) => {
    props.addMessage(values.textArea);
  }

  if(!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messeges}>
        {messagesElements}
        <InputForm onSubmit={addNewMessage} />
        {/* <textarea onChange={ onMessageChange } ref={ message } value={props.newMessageText}></textarea>
        <button onClick= { addMessage }>addMessage</button> */}
      </div>
    </div>
  )
}

export default Dialogs;