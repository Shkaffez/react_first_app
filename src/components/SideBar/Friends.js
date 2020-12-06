import React from 'react';
import FriendLink from './FriendLink';
import style from './Friends.module.css'

const Friends = (props) => {
    
    let friendsElements = props.store.getState().sideBar.friendLink.map(friend => <FriendLink avatarSrc={friend.avatarSrc} 
                                                                     name={friend.name}/>);

    return (
        <div className={style.friends}>
            <h3>Friends</h3>
            <div className={style.friendLinks}>
            {friendsElements}
            </div>

        </div>
    )
}

export default Friends;
