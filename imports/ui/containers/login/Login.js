import React from 'react'
import {Link, navigate} from '@reach/router'
import { useInputValue } from '../../../hooks/useInputValue'

import { logic } from '../../../logic'

const Login = (props) => {
    const email = useInputValue('')
    const password = useInputValue('')

    const onLogin = (e) => {
        e.preventDefault()
        const user = {
            email: email.value,
            password: password.value
        }
        logic.authenticate({user})
            .then((id) => {
                window.localStorage.setItem('id', id)
                props.loggedIn()
            })
    }
    return (
        <div>
            <Link to='/'>Landing</Link>
            <Link to='/register'>Register</Link>
            <form onSubmit={onLogin}>
                <input
                    type="text"
                    value={email.value}
                    onChange={email.onChange}
                    placeholder='Email...'>
                </input>
                <input
                    type="password"
                    value={password.value}
                    onChange={password.onChange}
                    placeholder='Password...'>
                </input>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login