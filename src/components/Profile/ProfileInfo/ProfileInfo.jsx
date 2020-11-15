import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <img className={style.profile__img} alt="" src="https://s2.best-wallpaper.net/wallpaper/1920x1080/1806/Blue-style-figure-layers-shadows-abstract_1920x1080.jpg"></img>
      <div className={style.item}>ava + descrioption</div> 
    </div>
  )
}

export default ProfileInfo;