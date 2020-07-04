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
        {id: 7, name: 'Irana'},
        {id: 8, name: 'Sasha'}
    ]
    let messagesData = [
        {id: 1, message: 'Hi whats\'up'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Very nice'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]
    return (
        <div className={Dialog_classes.dialogs}>
            <div className={Dialog_classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
                <DialogItem name={dialogsData[6].name} id={dialogsData[6].id}/>
                <DialogItem name={dialogsData[7].name} id={dialogsData[7].id}/>
            </div>
            <div className={Dialog_classes.messages}>
                <MessageItem message={messagesData[0].message}/>
                <MessageItem message={messagesData[1].message}/>
                <MessageItem message={messagesData[2].message}/>
                <MessageItem message={messagesData[3].message}/>
                <MessageItem message={messagesData[4].message}/>
            </div>
        </div>
    )
}

export default Dialogs;