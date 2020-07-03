import React from "react";
import Dialog_classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/"+props.id;
    return (
        <div className={Dialog_classes.dialog}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={Dialog_classes.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={Dialog_classes.dialogs}>
            <div className={Dialog_classes.dialogsItems}>
                <DialogItem name='Artem' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sonya' id='3'/>
                <DialogItem name='Olenka' id='4'/>
                <DialogItem name='Alexey' id='5'/>
                <DialogItem name='Tatka' id='6'/>
                <DialogItem name='Sasha' id='7'/>
                <DialogItem name='Irina' id='8'/>
            </div>
            <div className={Dialog_classes.messages}>
                <MessageItem message="Hi whats'up"/>
                <MessageItem message="How are you"/>
                <MessageItem message=" Very nace"/>
            </div>
        </div>
    )
}

export default Dialogs;