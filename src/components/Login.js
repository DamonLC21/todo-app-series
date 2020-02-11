import React, { Component } from 'react'

export default class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    render() {
        return (
            <form className='login-form'>
                <h1>Login</h1>
                <label>Username</label>
                <input name='username' value={this.state.username} />
                <label>Password</label>
                <input type='password' name='password' value={this.state.password} />
                <input type='submit' value='Login' />
            </form>
        )
    }
}
