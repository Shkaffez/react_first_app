import React from 'react';
import style from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

  let path = "/dialogs/" + props.id;

  return (

    <div className={style.dialog}>      
      <img div className={style.avatar} alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_zHnsoD29FF3uZIXlcdhTNGrM7jAEzNuaEg&usqp=CAU"></img>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;