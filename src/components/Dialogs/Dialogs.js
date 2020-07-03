import React from "react";
import Dialog_classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={Dialog_classes.dialogs}>
            <div className={Dialog_classes.dialogsItems}>
                <div className={Dialog_classes.dialog}>
                   <NavLink to="/dialogs/1"> Artem </NavLink>
                </div>
                <div className={Dialog_classes.dialog + ' ' + Dialog_classes.active}>
                    <NavLink to="/dialogs/2"> Andrey </NavLink>
                </div>
                <div className={Dialog_classes.dialog}>
                    <NavLink to="/dialogs/3"> Sonya </NavLink>
                </div>
                <div className={Dialog_classes.dialog}>
                    <NavLink to="/dialogs/4"> Olya </NavLink>
                </div>
                <div className={Dialog_classes.dialog}>
                    <NavLink to="/dialogs/5"> Alexey </NavLink>
                </div>
                <div className={Dialog_classes.dialog}>
                    <NavLink to="/dialogs/6"> Natasha </NavLink>
                </div>
                <div className={Dialog_classes.dialog}>
                    <NavLink to="/dialogs/7"> Sasha </NavLink>
                </div>
                <div className={Dialog_classes.dialog}>
                    <NavLink to="/dialogs/8"> Ira </NavLink>
                </div>
            </div>
            <div className={Dialog_classes.messages}>
                <div className={Dialog_classes.message}>
                    Hi whats'up
                </div>
                <div className={Dialog_classes.message}>
                    How are you
                </div>
                <div className={Dialog_classes.message}>
                    Very nace
                </div>
            </div>
        </div>
    )
}

export default Dialogs;