import React, { useState } from 'react'
import { Link, navigate } from '@reach/router'
import { useInputValue } from '../../../hooks/useInputValue'

import { logic } from '../../../logic'

const Register = () => {
    const name = useInputValue('')
    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        const newUser = {
            name: name.value,
            email: email.value,
            password: password.value
        }
        logic.register({newUser})
            .then(() => {
                navigate('/login')
            })
    }
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name.value}
                    onChange={name.onChange}
                    placeholder='Name...'>
                </input>
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
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register