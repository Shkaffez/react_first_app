import React, { Suspense } from "react";
import './App.css';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import { initializeApp } from './components/Redux/App_Reduser';
import NavBar from './components/NavBar/NavBar';
import Preloader from './components/common/Preloader';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/SideBar/FriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const Login = React.lazy(() => import('./components/Login/login'));


class App extends React.Component {
    
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.isInitialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        <FriendsContainer />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer  pageTitile={"Самураи"}/>} />
          <Suspense fallback={<div>загрузка...</div>}>
            <Route path="/login" render={() => <Login />} />
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized
});

export default connect(mapStateToProps, { initializeApp })(App);
