import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';




const Dialogs = (props) => {

  

  let dialogsElements = props.dialogsProps.dialogs.map(element => <DialogItem name={element.name} id={element.id} />);
  let messagesElements = props.dialogsProps.messages.map(element => <Message message={element.message} id={element.id}/>)

  let message = React.createRef();
  let addMessage = () => {
    let text = message.current.value;
    alert(text);
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={style.messeges}>
        {messagesElements}
        <textarea ref={ message }></textarea>
        <button onClick= { addMessage }>addMessage</button>
      </div>
    </div>
  )
}

export default Dialogs;