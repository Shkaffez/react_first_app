import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import preloader from '../../assets/images/Spinner-1s-200px.svg';

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
                            <img src={u.photos.small || userPhoto} alt='avatar' className={style.userAvatar}></img>
                        </div>
                        {
                            u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>follow</button>
                                : <button onClick={() => { props.follow(u.id) }} >unfollow</button>
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