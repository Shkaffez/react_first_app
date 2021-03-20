import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader';
import userPhoto from '../../../assets/images/user.jpg';
import Blue_style from '../../../assets/images/Blue-style.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileDataEditForm from './ProfileDataEditForm';
import { FORM_ERROR } from 'final-form';

const ProfileInfo = (props) => {

  let [editMod, setEditMod] = useState(false);

  if (!props.userProfile) {
    return <Preloader />
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  const onSubmit = values => {
      props.saveProfile(values);   
      setEditMod(false);     
      return { [FORM_ERROR]: props.editProfileDataError }
     
  };

  
  return (
    <>
      <img className={style.profile__img} alt="" src={Blue_style}></img>
      <div className={style.profileWrapper}>
        <img src={props.userProfile.photos.small || userPhoto} alt="User Avatar" className={style.userAvatar} />
        {props.isOwner && <input type={"file"} onChange={onPhotoSelected}></input>}
        
        <ProfileStatusWithHooks status={props.status}
          updateStatus={props.updateStatus}
        />
        {editMod ? <ProfileDataEditForm onSubmit={onSubmit} initialValues={props.userProfile} 
        userProfile={props.userProfile} editProfileDataError={props.editProfileDataError}
        saveProfile={props.saveProfile}
         /> 
        : <ProfileData isOwner={props.isOwner} 
          goToEditMode={()=>{setEditMod(true)}} userProfile={props.userProfile}/> }
      </div>




    </>
  )
}

const ProfileData = (props) => {
  return <div>
    {props.isOwner && <button onClick={props.goToEditMode}>Редактировать профиль</button>}
    <div className={style.item}>{props.userProfile.fullName}</div>
    <div><b>В поиске работы:</b> {props.userProfile.lookingForAJob ? "да!" : "нет"}</div>
    <div><b>Обо мне:</b></div> {props.userProfile.aboutMe}
    {props.userProfile.lookingForAJobDescription &&
      <div>
        <b>Профессиональные навыки:</b>
            {props.userProfile.lookingForAJobDescription}
         </div>}

    <div>
      <b>Контакты:</b> {Object.keys(props.userProfile.contacts).map(key => {
        return <Contacts key={key} contactTitle={key} contactValue={props.userProfile.contacts[key]} />
      })}
    </div>
  </div>
}


const Contacts = ({ contactTitle, contactValue }) => {
  return <div className={style.contacts}><b>{contactTitle}</b> : {contactValue}</div>
}

export default ProfileInfo;