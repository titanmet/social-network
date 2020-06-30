import React from "react";
import nav_classes from  './Nav.module.css';

const Nav = () =>{
    return (
        <nav className={nav_classes.nav}>
            <div className={nav_classes.item}>
                <a> Profile </a>
            </div>
            <div className={nav_classes.item}>
                <a> Messages </a>
            </div>
            <div className={nav_classes.item}>
                <a> News </a>
            </div>
            <div className={nav_classes.item}>
                <a> Music </a>
            </div>
            <div className={nav_classes.item}>
                <a> Settings </a>
            </div>
        </nav>
    )
}

export default Nav;