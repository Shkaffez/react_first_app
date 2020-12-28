import React from 'react';
import style from './Users.module.css'

let Users = (props) => {
debugger;
    if (props.users.length === 0) {
        props.setUser([
            {
                id: 1, photoURL: 'https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg',
                fullName: "Ivan", isFollow: true, status: 'lorem5', location: { city: 'Moscov', country: 'Russia' }
            },
            {
                id: 2, photoURL: 'https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg',
                fullName: "Ivan", isFollow: true, status: 'lorem5', location: { city: 'Moscov', country: 'Russia' }
            },
            {
                id: 3, photoURL: 'https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg',
                fullName: "Ivan", isFollow: true, status: 'lorem5', location: { city: 'Moscov', country: 'Russia' }
            },
        ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.photoURL} alt='avatar' className={style.userAvatar}></img>
                </div>
                {
                    u.isFollow
                        ? <button onClick={() => { props.unfollow(u.id) }}>follow</button>
                        : <button onClick={() => { props.follow(u.id) }} >unfollow</button>
                }

                <div>{u.fullName}</div>
                <div>{u.status}</div>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
            </div>)
        }
    </div>

}

export default Users;