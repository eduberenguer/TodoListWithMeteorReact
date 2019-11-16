import React from 'react'
import { useInputValue } from '../../../hooks/useInputValue'
import { logic } from '../../../logic'
import { Form, Input, Button, Title } from './styles'

export const Login = (props) => {
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
            <Title>Login</Title>
            <Form onSubmit={onLogin}>
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
                <Button>Log in</Button>
            </Form>
        </div>
    )
}