import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, requesUserstatus, updateStatus, savePhoto, saveProfile } from '../Redux/PostsPage_Reduser'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';



class ProfileContainer extends React.Component {  

  refreshProfile = () => {
    let userId = this.props.match.params.userId === undefined ? this.props.userId : this.props.match.params.userId;
    if(!userId) {
      this.props.history.push('/login')
    }


    this.props.getUserProfile(userId);
    this.props.requesUserstatus(userId);
  }

  componentDidMount() {        
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {    
    if(this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  
  render() {
    return <Profile {...this.props}
                    isOwner={!this.props.match.params.userId}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                     />
  }
}

let mapStateToProps = (state) => ({
  userProfile: state.postsPage.userProfile,
  status: state.postsPage.status,
  userId: state.auth.userId
  
});

export default compose(
  connect(mapStateToProps, { getUserProfile,  requesUserstatus, updateStatus, savePhoto, saveProfile} ),
  withRouter,
)(ProfileContainer);