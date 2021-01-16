import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
    return (
        <header className={style.header}>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsSfFXzNR5_br9ciiN0CLf8fgm74zWosgwgQ&usqp=CAU"></img> */}
            <div className={style.login_block}>
                {props.login? props.login : <NavLink to={'/login'}>Login</NavLink>}                
            </div>
        </header>
    )
}

export default Header;