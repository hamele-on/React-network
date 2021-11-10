import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';



const Navbar = () => {
    return (
        <nav className={s.nav}>
          
            <div className= {s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
                <div className= {s.item}  >
                <a href='/dialogs' className={s.active}>Massages</a>
            </div>
            <div className= {s.item}>
                <NavLink to='/news' activeClassName='Navbar_item__1Fh82 a.Navbar_active__DSq9G'>News</NavLink>
            </div>
            <div className= {s.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className= {s.item}>
                <a>Settings</a>
            </div>
        </nav>
    );

}

export default Navbar;