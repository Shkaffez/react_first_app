import { connect } from 'react-redux';
import { follow, setUser, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../Redux/Users_Reduser';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader';
import { usersAPI } from '../../api/api';


class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUser(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
        }
    }

        onPageChanged = (pageNumper) => {               
                this.props.toggleIsFetching(true);
                this.props.setUser([]);
                this.props.setCurrentPage(pageNumper);
                usersAPI.getUsers(pageNumper, this.props.pageSize).then(data => {
                    this.props.toggleIsFetching(false);
                    this.props.setUser(data.items);                
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