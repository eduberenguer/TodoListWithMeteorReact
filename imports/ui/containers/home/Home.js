import React, { useEffect, useState } from 'react'
import { logic } from '../../../logic'
import {navigate} from "@reach/router"

const Home = (props) =>  {
    const [id] = useState(() => window.localStorage.getItem('id'))
    const [todo, setTodo ] = useState('')
    const [todos, setTodos] = useState([])

     useEffect(() => {
         logic.retrieveTodos(id)
             .then(res => {
                 setTodos(res)
             })
     },[todos])

    const insertTodo = (e) => {
        e.preventDefault()
        logic.insertTodo(id, todo)
            .then(() => {
                setTodo('')
            })
    }

    const deleteTodo = (id) => {
        logic.deleteTodo(id)
    }

    const updateTodo = (id) => {
        navigate(`/todo/${id}`)
    }

    const logout = (e) => {
        e.preventDefault()
        window.localStorage.removeItem('id')
        props.logout()
    }

    return (
        <div>
            <header>
                <h1>List</h1>
                <form onSubmit={insertTodo}>
                    <input
                        type="text"
                        placeholder='Todo...'
                        onChange={(e) => setTodo(e.target.value)}
                        value={todo}>
                    </input>
                    <button>Insert</button>
                </form>
                <button onClick={logout}>Logout</button>
            </header>
            {
                todos
                    ? todos.map((item) => {
                        return (
                            <div key={item.id}>
                                <p>{item.text}</p>
                                <button onClick={e => {e.preventDefault(); deleteTodo(item.id)}}>Delete</button>
                                <button onClick={e => {e.preventDefault(); updateTodo(item.id)}}>Update</button>
                            </div>
                        )
                    })
                    : ''
            }
        </div>
    )
}

export default Home
