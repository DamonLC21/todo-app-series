import React, {Component} from 'react';
import TodoList from './components/TodoList'

import './App.css';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import Login from './components/Login'

class App extends Component {

  state = {
    todos: [
      {id: 10, title: "First Todo", content:"Do some React", urgent: false},
      {id: 20, title: "Second Todo", content:"Do some more React", urgent: true},
      {id: 30, title: "Third Todo", content:"Do some more React", urgent: false},
      {id: 40, title: "Fourth Todo", content:"Do some more React", urgent: true},
    ]
  }

  render(){
    return (
      <div className="App">
        {/* <Login /> */}
        <TodoForm todoAction={this.addTodo} />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>
      </div>
    );
  }

  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id 
    })

    this.setState({todos})
  }

  updateTodo = (updatedTodo) => {
    const todos = this.state.todos.map(todo => {
      return todo.id !== updatedTodo.id ? todo : updatedTodo
    })
    this.setState({todos})
  }
  
}

export default App;
