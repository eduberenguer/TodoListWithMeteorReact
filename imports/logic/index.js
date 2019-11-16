const validateEmail = require('../../utils/validate-email')

import { Users } from '/imports/api/users'
import { Todos } from '/imports/api/todos'

const logic = {
    _validateStringField(fieldName, fieldValue) {
        if (typeof fieldValue !== 'string' || !fieldValue.length) throw new Error(`invalid ${fieldName}`)
    },

    _validateEmail(email) {
        if (!validateEmail(email)) throw new LogicError('invalid email')
    },

    register({newUser}) {
        return Promise.resolve()
            .then(() => {
                this._validateEmail(newUser.email)
                this._validateStringField('name', newUser.name)
                this._validateStringField('password', newUser.password)
                return Users.findOne({'email':newUser.email})
            })
            .then(user => {
                if(user) throw new LogicError(`User with ${newUser.email} email already exist`)
                return Users.insert(newUser)
            })
    },

    authenticate({user}){
        return Promise.resolve()
            .then(() => {
                this._validateEmail(user.email)
                this._validateStringField('password', user.password)
                return Users.findOne({'email': user.email})
            })
            .then(returnUser => {
                if(!returnUser) throw new LogicError(`User with ${user.email} email not exist`)
                if(user.password !== returnUser.password) throw new LogicError('Wrong password')
                return returnUser._id
            })
    },

    retrieveTodos(userId){
        return Promise.resolve()
            .then(() => {
                return Todos.find({'userId': userId}).fetch()
            })
            .then(todos => {
                if (todos) {
                    todos.forEach(todo => {
                        todo.id = todo._id.toString()
                        delete todo._id
                    });
                }
                return todos || []
            })
    },

    insertTodo(userId, todo){
        this._validateStringField('todo', todo)
        return Promise.resolve()
            .then(() => {
                return Users.findOne({'_id': userId})
            })
            .then(user => {
                if(!user) throw new LogicError('User not found')
                const newTodo = {
                    'userId': userId,
                    'text': todo
                }
                return Todos.insert(newTodo)
            })
    },

    deleteTodo(id){
        return Promise.resolve()
            .then(() => {
                return Todos.findOne({'_id': id})
            })
            .then(todo => {
                if(!todo) throw new LogicError('Todo not found')
                return Todos.remove({'_id': id})
            })
    },

    editTodo(id, userId, newText){
        return Promise.resolve()
            .then(() => {
                return Todos.findOne({'_id': id})
            })
            .then(todo => {
                if(!todo) throw new LogicError('Todo not found')
                return Todos.update({'_id':id}, { 'userId': userId, 'text': newText})
            })
    },

    retrieveTodo(id){
        return Promise.resolve()
            .then(() => {
                return Todos.findOne({'_id': id})
            })
            .then(todo => {
                return todo
            })
    }
}

class LogicError extends Error {
    constructor(message) {
        super(message)
    }
}

module.exports = { logic, LogicError }