import React from "react";
import nav_classes from './Nav.module.css';

const Nav = () =>{
    return (
        <nav className={nav_classes.nav}>
            <div className={nav_classes.item}>
                <a href='/profile'> Profile </a>
            </div>
            <div className={`${nav_classes.item} ${nav_classes.active}`}>
                <a href='/dialogs'> Messages </a>
            </div>
            <div className={nav_classes.item}>
                <a href='/news'> News </a>
            </div>
            <div className={nav_classes.item}>
                <a href='/music'> Music </a>
            </div>
            <div className={nav_classes.item}>
                <a href='/settings'> Settings </a>
            </div>
        </nav>
    )
}

export default Nav;