import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

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
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    { withCredentials: true,
                                      headers: {
                                          "API-KEY": "dca62038-4b8e-42fe-a354-95d74ec414b1"
                                      }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }                                        
                                    });
                            }}>follow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    { withCredentials: true,
                                        headers: {
                                          "API-KEY": "dca62038-4b8e-42fe-a354-95d74ec414b1"
                                      }
                                     }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }                                        
                                    });
                            }} >unfollow</button>
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