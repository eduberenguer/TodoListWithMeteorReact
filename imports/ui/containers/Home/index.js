import React, { useEffect, useState } from 'react'
import { logic } from '../../../logic'
import { Title, Input, Button, Form, Todo, ContainerTodos,
        ContainerTodo, Header, ButtonLogout, ContainerButtons, WithoutTodos } from './styles'
import {navigate} from "@reach/router"

export const Home = (props) =>  {
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
            <Header>
                <Title>My to do list</Title>
                <ButtonLogout onClick={logout}>Logout</ButtonLogout>
            </Header>
            <Form onSubmit={insertTodo}>
                <Input
                    type="text"
                    placeholder='Insert new todo...'
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}>
                </Input>
                <Button>Insert</Button>
            </Form>
            <ContainerTodos>
            {
                todos.length
                    ? todos.map((item) => {
                        return (
                            <div key={item.id}>
                                <ContainerTodo>
                                    <Todo>{item.text}</Todo>
                                    <ContainerButtons>
                                        <Button onClick={e => {e.preventDefault(); deleteTodo(item.id)}}>Delete</Button>
                                        <Button onClick={e => {e.preventDefault(); updateTodo(item.id)}}>Update</Button>
                                    </ContainerButtons>
                                </ContainerTodo>
                            </div>
                        )
                    })
                    : <WithoutTodos>👏🏻 Work done 😎</WithoutTodos>
            }
            </ContainerTodos>
        </div>
    )
}
