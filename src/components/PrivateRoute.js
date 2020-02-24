import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TodoForm from './TodoForm';
import TodoList from './TodoList'

export default function PrivateRoute(props) {
    const {addTodo, todos, deleteTodo, updateTodo} = props

    return <Route {...props} render={(routerProps) => {
        return localStorage.token 
            ? (
                <>
                    <TodoForm {...routerProps} todoAction={addTodo} />
                    <TodoList {...routerProps} todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                </>
            )
            : <Redirect to='/login' />
    }} />
}
