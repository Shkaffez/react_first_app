import React from 'react';
import style from './Friends.module.css';

const FriendLink = (props) => {

    return (
        <div className={style.wrapper}>
            <img src={props.avatarSrc} alt="ava"/>
            <div className={style.name}>{props.name}</div>
        </div>
    )
}

export default FriendLink;

