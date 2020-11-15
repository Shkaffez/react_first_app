import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

  let path = "/dialogs/" + props.id;

  return (

    <div className={style.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return <div className={style.messege}>{props.message}</div>;
}

const Dialogs = (props) => {

let dialogsData = [
  {id: 1, name: "Ivan"},
  {id: 2, name: "Zlata"},
  {id: 3, name: "Den"},
  {id: 4, name: "Foksi"},
  {id: 5, name: "Taldom"}  
];

let messageData = [
  {id: 1, message: "Hi"},
  {id: 2, message: "How are you?"},
  {id: 3, message: "I'm fine"}
];

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id} />
        <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id} />       
      </div>
      <div className={style.messeges}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
      </div>
    </div>
  )
}

export default Dialogs;