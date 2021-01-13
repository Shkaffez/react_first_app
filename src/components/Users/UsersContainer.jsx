import { connect } from 'react-redux';
import { follow, setUser, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../Redux/Users_Reduser';
import Users from './Users';
import React from 'react';
import * as axios from 'axios';

import Preloader from '../common/Preloader';


class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUser(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }
    }

        onPageChanged = (pageNumper) => {               
                this.props.toggleIsFetching(true);
                this.props.setUser([]);
                this.props.setCurrentPage(pageNumper);
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumper}&count=${this.props.pageSize}`).then(response => {
                    this.props.toggleIsFetching(false);
                    this.props.setUser(response.data.items);                
            });        
        }

            render() {
                return <>
                    { this.props.isFetching ? <Preloader /> : null}

                    < Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        isFetching={this.props.isFetching}

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
                isFetching: state.usersPage.isFetching

            }
        }

        export default connect(mapStateToProps,
            { follow, unfollow, setUser, setCurrentPage, setTotalUsersCount, toggleIsFetching })
            (UsersContainer);