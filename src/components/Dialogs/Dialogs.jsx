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
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <DialogItem name="Ivan" id="1" />
        <DialogItem name="Zlata" id="2" />
        <DialogItem name="Den" id="3" />
        <DialogItem name="Foksi" id="4" />
        <DialogItem name="Taldom" id="5" />
      </div>
      <div className={style.messeges}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="I'm fine" />
      </div>
    </div>
  )
}

export default Dialogs;