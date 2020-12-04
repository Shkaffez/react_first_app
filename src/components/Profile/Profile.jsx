import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  

  return (
    <div>
      <ProfileInfo />
      <MyPosts post_props = {props.profileProps} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
      
    </div>
  )
}

export default Profile;