import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

class App extends Component {

  state = {
    todos: []
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <PrivateRoute exact 
              path='/' 
              todos={this.state.todos} 
              deleteTodo={this.deleteTodo} 
              updateTodo={this.updateTodo} 
              addTodo={this.addTodo} />
            <Route path='/login' render={(props) => <Login {...props} login={this.login}/>} />
            <Route render={() => <Redirect to='/' />} />
          </Switch>
        </div>
      </Router>
    );
  }

  componentDidMount(){
    let {token} = localStorage
    fetch('http://localhost:3000/api/v1/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(result => {
      return result.user ? this.setState({todos: result.user.todos}) : null
    })
  }

  login = (user, history) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user})
    })
      .then(response => response.json())
      .then(({user, user: {todos}, jwt}) => {
          localStorage.setItem('token', jwt)
          this.setState({
            todos
          })
          history.push('/')
      })
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
