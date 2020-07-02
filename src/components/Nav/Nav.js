import React from "react";
import nav_classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={nav_classes.nav}>
            <div className={nav_classes.item}>
                <NavLink to='/profile' activeClassName={nav_classes.activeLink}> Profile </NavLink>
            </div>
            <div className={`${nav_classes.item} ${nav_classes.activeLink}`}>
                <NavLink to='/dialogs' activeClassName={nav_classes.activeLink}> Messages </NavLink>
            </div>
            <div className={nav_classes.item}>
                <NavLink to='/news' activeClassName={nav_classes.activeLink}> News </NavLink>
            </div>
            <div className={nav_classes.item}>
                <NavLink to='/music' activeClassName={nav_classes.activeLink}> Music </NavLink>
            </div>
            <div className={nav_classes.item}>
                <NavLink to='/settings' activeClassName={nav_classes.activeLink}> Settings </NavLink>
            </div>
        </nav>
    )
}

export default Nav;