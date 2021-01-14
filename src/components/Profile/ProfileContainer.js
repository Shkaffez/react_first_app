import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../Redux/PostsPage_Reduser'
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {  
  componentDidMount() {    
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 2;
    }

    axios.get('https://social-network.samuraijs.com/api/1.0//profile/' + userId).then(response => {
                this.props.setUserProfile(response.data);                               
            });
  }

  render() {
    return <Profile {...this.props} />
  }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer);

let mapStateToProps = (state) => ({userProfile: state.postsPage.userProfile});

export default connect(mapStateToProps, { setUserProfile } )(withUrlDataContainerComponent);

