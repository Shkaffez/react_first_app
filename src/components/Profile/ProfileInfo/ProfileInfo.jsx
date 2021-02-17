import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader';
import userPhoto from '../../../assets/images/user.jpg';
import Blue_style from '../../../assets/images/Blue-style.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {
  if (!props.userProfile) {
    return <Preloader />
  }
  return (
    <div>
      <img className={style.profile__img} alt="" src={Blue_style}></img>
      <div className={style.profileWrapper}>
        <img src={props.userProfile.photos.small || userPhoto} alt="User Avatar" className={style.userAvatar} />
        <div className={style.item}>{props.userProfile.fullName}</div>
        <ProfileStatusWithHooks status={props.status}
                       updateStatus={props.updateStatus}
         />
        {props.userProfile.lookingForAJob && <div>В поиске работы!</div>}
        <div className={style.contacs}>
            {props.userProfile.contacts === {} && <h3>Список контактов</h3>}
            <ul>
              {props.userProfile.contacts.github && <li><span>github</span>{props.userProfile.contacts.github}</li>}
              {props.userProfile.contacts.vk &&<li><span>vk</span>{props.userProfile.contacts.vk}</li>}
              {props.userProfile.contacts.facebook &&<li><span>facebook</span>{props.userProfile.contacts.facebook}</li>}
              {props.userProfile.contacts.instagram &&<li><span>instagram</span>{props.userProfile.contacts.instagram}</li>}
              {props.userProfile.contacts.twitter &&<li><span>twitter</span>{props.userProfile.contacts.twitter}</li>}
              {props.userProfile.contacts.website &&<li><span>website</span>{props.userProfile.contacts.website}</li>}
              {props.userProfile.contacts.youtube &&<li><span>youtube</span>{props.userProfile.contacts.youtube}</li>}
              {props.userProfile.contacts.mainLink &&<li><span>mainLink</span>{props.userProfile.contacts.mainLink}</li>}
            </ul>
        </div>
          
          
      </div>
    </div>
  )
}

export default ProfileInfo;