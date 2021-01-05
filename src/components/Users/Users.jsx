import * as axios from 'axios';
import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}}`).then(response => {
            this.props.setUser(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    
    onPageChanged = (pageNumper) => {
        this.props.setCurrentPage(pageNumper);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumper}&count=${this.props.pageSize}}`).then(response => {
            this.props.setUser(response.data.items);
            debugger;
        });
    }
    
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={p=== this.props.currentPage && style.selected} onClick={(e) => {this.onPageChanged(p)} }>{p}</span>
                })}
            </div>
            {
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