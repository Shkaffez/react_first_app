import * as axios from 'axios';
import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component {

    componentDidMount () {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUser(response.data.items);
        });
    }

    render() {

        let usersCount = this.props.totalUserCount / this.props.pageSize;

        return <div>
            {
                {for(let i = 0; i < usersCount; i++) {

                }}
                this.props.users.map(u => <div key={u.id}>
                    <div>
                        <img src={u.photos.small || userPhoto} alt='avatar' className={style.userAvatar}></img>
                    </div>
                    {
                        u.followed
                            ? <button onClick={() => { this.props.unfollow(u.id) }}>follow</button>
                            : <button onClick={() => { this.props.follow(u.id) }} >unfollow</button>
                    }

                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </div>)
            }
        </div>
    }
}


    export default Users;