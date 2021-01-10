import { connect } from 'react-redux';
import { followAC, setUserAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from '../Redux/Users_Reduser';
import Users from './Users';
import React from 'react';
import * as axios from 'axios';


class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    
    onPageChanged = (pageNumper) => {
        this.props.setCurrentPage(pageNumper);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumper}&count=${this.props.pageSize}`).then(response => {
            this.props.setUser(response.data.items);            
        });
    }
    
    render() {
        return <Users  totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}                 
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       isFetching={this.props.isFetching}

                        />
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUser: (users) => dispatch(setUserAC(users)),
        setCurrentPage: (pageNumper) => dispatch(setCurrentPageAC(pageNumper)),
        setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountAC(totalCount)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);