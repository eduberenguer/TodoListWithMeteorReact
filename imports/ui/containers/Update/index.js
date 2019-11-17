import React, { useState, useEffect} from 'react'
import {navigate} from '@reach/router'
import { Title, Button, Form, Input, CurrentTask } from './styles'
import { useInputValue } from '../../../hooks/useInputValue'

import { logic } from '../../../logic'

export const Update = (props) => {
    const newText = useInputValue('')
    const [textTodo, setTextTodo] = useState('')

    useEffect(() => {
        logic.retrieveTodo(props.id)
            .then(todo => {
                setTextTodo(todo.text)
            })
    })

    const onUpdate = (id, userId, newText) => {
        logic.editTodo(id, userId, newText)
            .then(() => {
                navigate('/home')
            })
    }

    return(
        <div>
            <Title>Update</Title>
            <Form onSubmit={(e) => onUpdate(props.id, props.userId, newText.value)}>
                <CurrentTask>Current Task: {textTodo}</CurrentTask>
                <Input
                    type="text"
                    placeholder='New todo text...'
                    onChange={newText.onChange}
                    value={newText.value}/>
                <Button>Change</Button>
            </Form>
        </div>
    )
}