import React from 'react';
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import Friends from '../SideBar/Friends';


const NavBar = () => {
    return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
      </div>

      <div className={style.item}>
        <NavLink to="/dialogs" activeClassName={style.activeLink}>Messages</NavLink>
      </div>

      <div className={style.item}>
        <NavLink to="/users" activeClassName={style.activeLink}>Users</NavLink>
      </div>

      <div className={style.item}>
        <a href="#">News</a>
      </div>

      <div className={style.item}>
        <a href="#">Music</a>
      </div>

      <div className={style.item}>
        <a href="#">Settings</a>
      </div>
    </nav>
  )
}

export default NavBar;