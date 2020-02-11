import React, {useState, useEffect} from 'react'
import TodoForm from './TodoForm'

export default function TodoItem({id, title, content, urgent, deleteTodo, updateTodo}) {

    const [isClicked, setisClicked] = useState(false)

    useEffect(() => {
        setisClicked(false)
    }, [title, content]);
    

    const handleDelete = (event) => {
        return event.target.id === "edit" ? setisClicked(true) : deleteTodo(id)
    }

    const showTodo = () => (
        <div className="inner-todo">
            <h2>{title ? title : "Default Title"}</h2>
            <p>{content ? content : "Default Content"}</p>
            <section className="todo-actions">
                <button className="button edit-button" id="edit" onClick={handleDelete}>Edit</button>
                <button className="button delete-button" id="delete" onClick={handleDelete}>Delete</button>
            </section>
        </div>
    )

    return (
        <div className={urgent ? "todo-item urgent" : "todo-item" }>
            {isClicked 
                ? (
                    <>
                    <TodoForm 
                        id={id} 
                        title={title} 
                        content={content} 
                        todoAction={updateTodo} 
                        closeForm={setisClicked}/>
                    <button 
                        className="button delete-button" 
                        onClick={() => setisClicked(false)}>Close
                    </button>
                    </>
                )
                : showTodo()}
        </div>
    )
}
