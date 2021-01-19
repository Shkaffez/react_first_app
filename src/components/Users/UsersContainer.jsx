import { connect } from 'react-redux';
import {follow, unfollow, followSuccess, getUsers, setUser, unfollowSuccess, setCurrentPage, toggleFollowingInPropress } from '../Redux/Users_Reduser';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader';



class UsersContainer extends React.Component {

    componentDidMount() {        
        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize);
        }
    }

        onPageChanged = (pageNumper) => {   
            this.props.setUser([]);
            this.props.setCurrentPage(pageNumper);
            this.props.getUsers(pageNumper, this.props.pageSize);
        }

            render() {
                return <>
                    { this.props.isFetching ? <Preloader /> : null}

                    < Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        unfollowSuccess={this.props.unfollowSuccess}
                        followSuccess={this.props.followSuccess}
                        isFetching={this.props.isFetching}                        
                        followingInProgress={this.props.followingInProgress}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        

                    />
                </>
            }
        }


        const mapStateToProps = (state) => {
            return {
                users: state.usersPage.users,
                pageSize: state.usersPage.pageSize,
                totalUsersCount: state.usersPage.totalUsersCount,
                currentPage: state.usersPage.currentPage,
                isFetching: state.usersPage.isFetching,
                followingInProgress: state.usersPage.followingInProgress,
            }
        }

        export default connect(mapStateToProps,
            { followSuccess, unfollowSuccess, setUser, setCurrentPage,
                 toggleFollowingInPropress, getUsers, follow, unfollow })
            (UsersContainer);