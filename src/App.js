import React, {Component} from 'react';
import TodoList from './components/TodoList'

import './App.css';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

class App extends Component {

  state = {
    todos: [
      {id: 1, title: "First Todo", content:"Do some React", urgent: false},
      {id: 2, title: "Second Todo", content:"Do some more React", urgent: true},
      {id: 3, title: "Third Todo", content:"Do some more React", urgent: false},
      {id: 4, title: "Fourth Todo", content:"Do some more React", urgent: true},
    ]
  }

  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })

    // fetch('http://localhost:3000/todos', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(newTodo)
    // })
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id 
    })

    this.setState({todos})

    // fetch(`http://localhost:3000/todos/${updatedTodo.id}`, {
    //   method: "DELETE"
    // })
  }

  updateTodo = (updatedTodo) => {
    const todos = this.state.todos.map(todo => {
      return todo.id !== updatedTodo.id ? todo : updatedTodo
    })

    
    this.setState({todos})

    // fetch(`http://localhost:3000/todos/${updatedTodo.id}`, {
    //   method: "PATCH",
    //   headers: {
    //         'Content-Type': 'application/json'
    //       },
    //   body: JSON.stringify(updatedTodo)
    // })
  }
  
  render(){
    return (
      <div className="App">
        <TodoForm todoAction={this.addTodo} />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>
      </div>
    );
  }
}

export default App;
