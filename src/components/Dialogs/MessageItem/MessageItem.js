import React from "react";
import Dialog_classes from './../Dialogs.module.css';

const MessageItem = (props) => {
    return (
        <div className={Dialog_classes.message}>
            {props.message}
        </div>
    )
}

export default MessageItem;