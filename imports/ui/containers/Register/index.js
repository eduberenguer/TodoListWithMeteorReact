import React from 'react'
import { navigate } from '@reach/router'
import { useInputValue } from '../../../hooks/useInputValue'
import { Title, Button, Form, Input } from './styles'
import { Error } from '../../../styles/GlobalStyles'
import { logic } from '../../../logic'
import { useInputError } from '../../../hooks/useInputError'

export const Register = () => {
    const name = useInputValue('')
    const email = useInputValue('')
    const password = useInputValue('')
    const [error, setError] = useInputError()

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
            .catch(({ message }) => {
                setError(message)
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
                {error && <Error>{error}</Error>}
            </Form>
        </div>
    )
}