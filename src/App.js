import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/SideBar/FriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';
import { initializeApp } from './components/Redux/App_Reduser';       
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader';


class App extends React.Component {
  
  componentDidMount() {
    this.props.initializeApp();
}

  render() {
    if(!this.props.isInitialized) {
      return <Preloader />
    }


    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <NavBar />
          <FriendsContainer />
          <div className="app-wrapper-content">
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized
});

export default connect(mapStateToProps, { initializeApp })(App);
