import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getUserStatus, updateStatus } from '../Redux/PostsPage_Reduser'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {  
  componentDidMount() {    
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 13632;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return <Profile {...this.props}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                     />
  }
}

let mapStateToProps = (state) => ({
  userProfile: state.postsPage.userProfile,
  status: state.postsPage.status,
  
});

export default compose(
  connect(mapStateToProps, { getUserProfile,  getUserStatus, updateStatus} ),
  withRouter,
  withAuthRedirect
)(ProfileContainer);