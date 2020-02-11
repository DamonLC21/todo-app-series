import React from 'react'
import TodoItem from './TodoItem'

export default ({todos, children, deleteTodo, updateTodo}) => {

    const showTodos = todos.map((todo, i) => {
        return <TodoItem key={i} {...todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    })

    return (
        <section className="todo-list">
            {children}
            {showTodos}
        </section>
        
    )
}
