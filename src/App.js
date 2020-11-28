import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import Friends from './components/SideBar/Friends';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <NavBar/>
        <Friends sideBarProps={props.state.sideBar}/>
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={ () => <Dialogs dialogsProps={props.state.dialogsPage}/>}/>
          <Route path="/profile" render={ () => <Profile  profileProps={props.state.postsPage}/>}/>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
