import React from "react";
import Dialog_classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={Dialog_classes.dialog}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
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
    let dialogsData = [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sonya'},
        {id: 4, name: 'Olenka'},
        {id: 5, name: 'Alexey'},
        {id: 6, name: 'Tatka'},
        {id: 7, name: 'Irina'},
        {id: 8, name: 'Sasha'}
    ]
    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesData = [
        {id: 1, message: 'Hi whats\'up'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Very nice'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]
    let messageElements = messagesData.map(messages => <MessageItem message={messages.message}/>);

    return (
        <div className={Dialog_classes.dialogs}>
            <div className={Dialog_classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={Dialog_classes.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;