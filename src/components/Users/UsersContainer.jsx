import { connect } from 'react-redux';
import { followAC, setUserAC, unfollowAC } from '../Redux/Users_Reduser';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUser: (users) => dispatch(setUserAC(users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);