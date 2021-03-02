import { connect } from 'react-redux';
import {follow, unfollow, followSuccess, requesUsers, setUser, unfollowSuccess, setCurrentPage, toggleFollowingInPropress } from '../Redux/Users_Reduser';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader';
import { getUsers, getPageSize, gettotalItemsCount, getCurrentPage, getIsFetching, getFollowingInProgress, getPortionSize } from '../Redux/Users_selectors';



class UsersContainer extends React.Component {

    componentDidMount() {        
        if (this.props.users.length === 0) {
            this.props.requesUsers(this.props.currentPage, this.props.pageSize);
        }
    }

        onPageChanged = (pageNumper) => {   
            this.props.setUser([]);
            this.props.setCurrentPage(pageNumper);
            this.props.requesUsers(pageNumper, this.props.pageSize);
        }

            render() {
                return <>
                    { this.props.isFetching ? <Preloader /> : null}

                    < Users totalItemsCount={this.props.totalItemsCount}
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
                        portionSize={this.props.portionSize}
                        

                    />
                </>
            }
        }


        const mapStateToProps = (state) => {
            return {
                users: getUsers(state),
                pageSize: getPageSize(state),
                totalItemsCount: gettotalItemsCount(state),
                currentPage: getCurrentPage(state),
                isFetching: getIsFetching(state),
                followingInProgress: getFollowingInProgress(state),
                portionSize: getPortionSize(state),
            }
        }

        export default connect(mapStateToProps,
            { followSuccess, unfollowSuccess, setUser, setCurrentPage,
                 toggleFollowingInPropress, requesUsers, follow, unfollow })
            (UsersContainer);