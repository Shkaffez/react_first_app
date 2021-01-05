import { connect } from 'react-redux';
import { followAC, setUserAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from '../Redux/Users_Reduser';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

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

export default connect(mapStateToProps, mapDispatchToProps)(Users);