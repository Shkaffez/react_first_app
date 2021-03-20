import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>      
      <ProfileInfo isOwner={props.isOwner}
                   userProfile={props.userProfile}
                   status={props.status}
                   updateStatus={props.updateStatus}
                   savePhoto={props.savePhoto}
                   saveProfile={props.saveProfile}
                   editProfileDataError={props.editProfileDataError}
                  //  setSaveProfileSuccess={props.setSaveProfileSuccess}
       />
      <MyPostsContainer />
      
    </div>
  )
}

export default Profile;