import React, { useState } from 'react';
import {Router, Redirect, navigate} from '@reach/router'
import {GlobalStyle} from '../styles/GlobalStyles'

import Home from './containers/home/Home'
import NotFound from "./containers/notFound/NotFound";
import Login from './containers/login/Login'
import Register from "./containers/register/Register";
import { Landing } from './containers/landing/Landing'
import UpdateTodo from './components/UpdateTodo'

const App = () =>{
    const [isAuth, setAuth] = useState(() => {
        return window.localStorage.getItem('id')
    })

    const loggedIn = () =>{
        setAuth(window.localStorage.getItem('id'))
        navigate('/home')
    }

    const logout = () =>{
        setAuth('')
        navigate('/')
    }

    return (
        <div>
            <GlobalStyle />
            <Router>
                {isAuth && <Redirect from='/' to='/home'/>}
                {!isAuth && <Redirect from='/home' to='/'/>}
                <Home path='/home' logout={logout}/>
                <Landing path='/'/>
                <Login path='/login' loggedIn={loggedIn}/>
                <Register path='/register'/>
                <UpdateTodo path='/todo/:id' userId={isAuth}/>
                <NotFound default/>
            </Router>
        </div>
    )
}

export default App
