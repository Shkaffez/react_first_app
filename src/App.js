import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/SideBar/FriendsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <NavBar/>
        <FriendsContainer />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={ () => <DialogsContainer />}/>
          <Route path="/profile/:userId?" render={ () => <ProfileContainer  />}/>
          <Route path="/users" render={ () => <UsersContainer  />}/>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
