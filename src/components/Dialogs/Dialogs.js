import React from "react";
import Dialog_classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

    let dialogsElements = props.postsDialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messageElements = props.postsMessagesData.map(messages => <MessageItem message={messages.message}/>);

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