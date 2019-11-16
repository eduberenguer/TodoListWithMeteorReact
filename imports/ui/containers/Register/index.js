import React from 'react'
import { navigate } from '@reach/router'
import { useInputValue } from '../../../hooks/useInputValue'
import { Title, Button, Form, Input } from './styles'
import { logic } from '../../../logic'

export const Register = () => {
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
            <Title>Register</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    value={name.value}
                    onChange={name.onChange}
                    placeholder='Name...'>
                </Input>
                <Input
                    type="text"
                    value={email.value}
                    onChange={email.onChange}
                    placeholder='Email...'>
                </Input>
                <Input
                    type="password"
                    value={password.value}
                    onChange={password.onChange}
                    placeholder='Password...'>
                </Input>
                <Button>Sign in</Button>
            </Form>
        </div>
    )
}