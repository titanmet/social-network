import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

let postsData = [
    {id: 1, message: 'Hi, how are you ?', likesCount: 25},
    {id: 2, message: 'It\'s my first post !', likesCount: 55},
    {id: 3, message: 'It\'s my second post !', likesCount: 125}
]
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
let messagesData = [
    {id: 1, message: 'Hi whats\'up'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Very nice'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
]

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App posts={postsData} postsDialogsData={dialogsData} postsMessagesData={messagesData}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
