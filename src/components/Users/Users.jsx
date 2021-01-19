import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={p === props.currentPage && style.selected} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small || userPhoto} alt='avatar' className={style.userAvatar}></img>
                        </NavLink>
                    </div>
                    {
                        u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)}}>follow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)}} >unfollow</button>
                    }

                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </div>)
            }

        </div>
    )


}

export default Users