import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";


const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/profile' component={Profile}/>*/}
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}

                    <Route path='/profile' render={ () => <Profile state={props.appState.profilePage} />}/>
                    <Route path='/dialogs' render={ () => <Dialogs state={props.appState.dialogsPage}/>}/>
                    <Route path='/news' render={ () => <News />}/>
                    <Route path='/music' render={ () => <Music />}/>
                    <Route path='/settings' render={ () => <Settings />}/>
                </div>
            </div>
    )
}

export default App;
