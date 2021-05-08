import { connect } from 'react-redux';
import { follow, unfollow, requestUsers, setUser, setCurrentPage, toggleFollowingInPropress, IUsers, SetUserActionType, SetCurrentPageActionType, ToggleFollowingInPropressActionType } from '../Redux/Users_Reduser';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader';
import { getUsers, getPageSize, gettotalItemsCount, getCurrentPage, getIsFetching, getFollowingInProgress, getPortionSize } from '../Redux/Users_selectors';
import { AppStateType } from '../Redux/ReduxStore';

type MapStatePropsType = {
    totalItemsCount: number | null
    pageSize: number | null
    currentPage: number | null
    portionSize: number | null
    followingInProgress: Array<number>
    isFetching: boolean
    users: Array<IUsers>
}

type MapDispatchPropsType = {  
    setCurrentPage: (pageNumber: number) => SetCurrentPageActionType
    setUser: (users: Array<IUsers>) => SetUserActionType
    requestUsers: (currentPage: number | null, pageSize: number | null) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingInPropress: (isFetching: boolean, userId: number)=>ToggleFollowingInPropressActionType
}  

type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.requestUsers(this.props.currentPage, this.props.pageSize);
        }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setUser([]);
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            <h2>{this.props.pageTitle}</h2>
            { this.props.isFetching ? <Preloader /> : null}

            < Users totalItemsCount={this.props.totalItemsCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                portionSize={this.props.portionSize}
            />
        </>
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
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


export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps, {
        setUser, setCurrentPage, toggleFollowingInPropress, requestUsers,
    follow, unfollow})(UsersContainer);