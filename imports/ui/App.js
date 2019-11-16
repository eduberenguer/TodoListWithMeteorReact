import React, { useState } from 'react';
import { Router, Redirect, navigate } from '@reach/router'
import { GlobalStyle } from '../styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'

import { Home } from './containers/Home'
import { NotFound } from "./containers/NotFound";
import { Login } from './containers/Login'
import { Register } from "./containers/Register";
import { Landing } from './containers/Landing'
import { Update } from './containers/Update'

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
            <Logo />
            <Router>
                {isAuth && <Redirect from='/' to='/home'/>}
                {!isAuth && <Redirect from='/home' to='/login'/>}
                <Home path='/home' logout={logout}/>
                <Landing path='/'/>
                <Login path='/login' loggedIn={loggedIn}/>
                <Register path='/register'/>
                <Update path='/todo/:id' userId={isAuth}/>
                <NotFound default/>
            </Router>
            <Navbar />
        </div>
    )
}

export default App
