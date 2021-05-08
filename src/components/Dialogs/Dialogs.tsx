import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { InputForm, IValues } from '../common/inputForm';
import { DialogsItemType, MessagesItemType } from '../Redux/DialogsPage_Reduser';
import DialogItem from './DialogItem/DialogsItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';

type PropsType = {
  dialogs: Array<DialogsItemType>
  messages: Array<MessagesItemType>
  addMessage: (message : string | undefined) => void
  isAuth: boolean
  onSubmit: (values : IValues) => void
}


const Dialogs : FC<PropsType> = (props) => {

  let dialogsElements = props.dialogs.map(element => <DialogItem name={element.name} id={element.id}
                                                                                  key={element.id} />);
  let messagesElements = props.messages.map(element => <Message message={element.message} id={element.id}
                                                                                      key={element.id}  />)

  

  

 

  let addNewMessage = (values : IValues) => {
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
      </div>
    </div>
  )
}

export default Dialogs;