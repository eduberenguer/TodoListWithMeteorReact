import React from 'react'
import {navigate} from "@reach/router"
import { useInputValue } from '../../hooks/useInputValue'

import { logic } from '../../logic'

const UpdateTodo = (props) => {
    const newText = useInputValue('')

    const onUpdate = (id, userId, newText) => {
        logic.editTodo(id, userId, newText)
            .then(() => {
                navigate('/home')
            })
    }

    return(
        <div>
            UPDATE
            <form onSubmit={(e) => onUpdate(props.id, props.userId, newText.value)}>
                <input
                    type="text"
                    placeholder='New todo text...'
                    onChange={newText.onChange}
                    value={newText.value}/>
                <button>Update</button>
            </form>
        </div>
    )
}

export default UpdateTodo